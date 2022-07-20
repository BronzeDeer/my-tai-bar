import LazyLoader from "/js/util/lazyload.js"
import { cocktails } from "../../../data/recipe-book.js";
import BaseComponent from "/js/component/base.js"

export default class CocktailList extends BaseComponent{
    constructor() {
        super();

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/css/lazy-loader.css")
        this.addStyleSheet("/css/cocktail-list.css")
        this.addStyleSheet("/css/no-fouc.css")

        let container = document.createElement("div")
        container.id = "container"
        container.className = "container"
        this._root.append(container)
        this.container = container
    }

    static get observedAttributes() {
        return ['cocktail-list','sort','printable',"filter"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "cocktail-list":
                if(oldValue !== newValue){
                    if(newValue.charAt(0) === '[') newValue = newValue.slice(1)
                    if( newValue.slice(-1) === ']') newValue = newValue.slice(0,-1)

                    this._cocktailList = newValue.split(",").map(x => {return {type:"cocktail",id:x}})
                    if(this.sort){
                        this._presortedList = this._cocktailList
                        this._cocktailList = this.sortRichListBy(this.sort,this._cocktailList)
                    }
                    this.refreshContent()
                }
                break;
            case 'sort':
                if(oldValue !== newValue){
                    if(newValue){
                        this._presortedList = this._cocktailList
                        this._cocktailList = this.sortRichListBy(newValue,this._cocktailList)
                    } else {
                        //Restore original list
                        this._cocktailList = this._presortedList
                    }
                    this.refreshContent()
                }
                break;
            case 'printable':
                if(oldValue !== newValue){
                    let loadedEls = this.$$("[loaded]")
                    for(let el of loadedEls){
                        el.printable = (newValue != null)
                    }
                }
                break;
            case 'filter':
                if(oldValue !== newValue){
                    this._filter(newValue.split(","))
                }
                break;
            default:
                break;
        }
    }

    sortFuncs = {
        "alpha-name": (x,y) => cocktails[x.id].name.localeCompare(cocktails[y.id].name)
    }

    parseSortMethod(methodString){
        let reverse = false
        if(methodString.startsWith("reverse-")){
            reverse = true
            methodString = methodString.slice(8)
        }

        return [reverse, methodString]
    }

    sortListBy(methodString,list){

        if(list.length == 0) return []

        let out = [...list]
        let [reverse, method] = this.parseSortMethod(methodString)
        out.sort(this.sortFuncs[method])
        if(reverse) out.reverse()
        return out
    }

    sortRichListBy(methodString,list){
        let sorted = []
        let curSection = []
        for(let el of list){
            if(el.type == "section"){
                sorted = sorted.concat(this.sortListBy(methodString,curSection))
                sorted.push(el)
            } else {
                curSection.push(el)
            }
        }
        sorted = sorted.concat(this.sortListBy(methodString,curSection))
        return sorted
    }

    set sort(val){
        this.setAttribute("sort",val)
    }

    get sort(){
        return this.getAttribute("sort")
    }

    set noLazy(val){
        if(val){
            this.setAttribute("no-lazy",true)
        } else {
            this.removeAttribute("no-lazy")
        }

    }

    get noLazy(){
        return this.hasAttribute("no-lazy")
    }

    set cocktailList(list){
        this.setAttribute("cocktail-list",list.toString())
    }

    get cocktailList(){
        return this.getAttribute("cocktail-list").split(",")
    }

    set richCocktailList(list){
        this.type = "rich"
        this._cocktailList = list
        this.refreshContent()
    }

    get richCocktailList(){
        return this._cocktailList
    }

    set printable(val){
        if(val){
            this.setAttribute("printable","")
        } else {
            this.removeAttribute("printable")
        }
    }

    get printable(){
        return this.hasAttribute("printable")
    }

    _filter(list){

        let isSection = (el) => el.firstChild.tagName.toLowerCase().localeCompare("h1") == 0

        let isEmpty = false
        let lastSection = undefined
        for(let child of this.container.children){
            if(isSection(child)){
                if(lastSection){
                    if(isEmpty){
                        lastSection.classList.add("d-none")
                    } else {
                        lastSection.classList.remove("d-none")
                    }
                }
                lastSection = child
                isEmpty = true
            } else {
                let id = this.noLazy ? child.firstChild.id : child.firstChild.id.slice("loader-".length)
                if(list.includes(id)){
                    child.classList.remove("d-none")
                    isEmpty = false
                } else {
                    child.classList.add("d-none")
                }
            }
        }
        if(lastSection){
            if(isEmpty){
                lastSection.classList.add("d-none")
            } else {
                lastSection.classList.remove("d-none")
            }
        }

    }

    set filter(val){
        if(!(val instanceof Array)){
            val = Array.from(val)
        }
        this.setAttribute("filter",val.toString())
    }

    get filter(){
        return this.getAttribute("filter").split(",")
    }

    refreshContent = () => {
        this.container.innerText = ""
        this.listIt = this._cocktailList.values()
        this.loadNextEntry()
    }

    makeLoaderFunc = (id) => {
        throw new Error("Abstract makeLoaderFunc not overriden");
    }

    loadNextEntry = async () =>{
        //Load list entries one by one with delay to preserve responsiveness
        let {value: el,done} = this.listIt.next()
        if(!done){
            let div = document.createElement("div")
            div.className = "mt-5 mb-5"
            if(el.type == "section"){
                let h = document.createElement("h1")
                h.innerText = el.name
                h.classList = "display-3"
                div.classList.add("ml-5")
                div.append(h)
            } else if (el.type == "cocktail"){
                if(this.noLazy){
                    let loader = this.makeLoaderFunc(el.id)
                    div.append(await loader())
                } else {
                    let ll = document.createElement("lazy-loader")
                    ll.className="full-width d-block blocker"
                    ll.id = "loader-" + el.id
                    ll.loader = this.makeLoaderFunc(el.id)
                    div.append(ll)
                }
            }
            this.container.append(div)
            setTimeout(this.loadNextEntry,50)
        }

    }

}
