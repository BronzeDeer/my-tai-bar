import LazyLoader from "/js/util/lazyload.js"
import {shadowBling} from "/js/util/bling.js"
import { cocktails } from "../../../data/recipe-book.js";

export default class CocktailList extends HTMLElement{
    constructor() {
        super();
        this._root = this.attachShadow({ mode: "open" });
        [this.$,this.$$] = shadowBling(this._root)

        let style = document.createElement("link")
        style.rel = "stylesheet"
        style.href = "/css/lazy-loader.css"
        this._root.append(style)

        style = document.createElement("link")
        style.rel = "stylesheet"
        style.href = "/css/cocktail-list.css"
        this._root.append(style)

        let container = document.createElement("div")
        container.id = "container"
        this._root.append(container)
        this.container = container
    }

    static get observedAttributes() {
        return ['cocktail-list','sort'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "cocktail-list":
                if(oldValue !== newValue){
                    if(newValue.charAt(0) === '[') newValue = newValue.slice(1)
                    if( newValue.slice(-1) === ']') newValue = newValue.slice(0,-1)

                    this._cocktailList = newValue.split(",")
                    if(this.sort) this.sortBy(this.sort)
                    this.refreshContent()
                }
                break;
            case 'sort':
                if(oldValue !== newValue){
                    if(newValue){
                        this.sortBy(newValue)
                    } else {
                        //Restore original list according to attribute
                        this._cocktailList = this.cocktailList
                        this.refreshContent()
                    }
                }

            default:
                break;
        }
    }

    sortFuncs = {
        "alpha-name": (x,y) => cocktails[x].name.localeCompare(cocktails[y].name)
    }

    sortBy(method){
        if(this._cocktailList){

            let preSort = [...this._cocktailList]

            let reverse = false
            if(method.startsWith("reverse-")){
                reverse = true
                method = method.slice(8)
            }

            //in-place
            this._cocktailList.sort(this.constructor.sortFuncs[method])
            if(reverse) this._cocktailList.reverse()

            if(preSort != this._cocktailList) this.refreshContent()
        }

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
        let {value,done} = this.listIt.next()
        if(!done){
            if(this.noLazy){
                let loader = this.makeLoaderFunc(value)
                this.container.append(await loader())
            } else {
                let ll = document.createElement("lazy-loader")
                ll.className="full-width d-block blocker"
                ll.loader = this.makeLoaderFunc(value)
                this.container.append(ll)
            }
            setTimeout(this.loadNextEntry,50)
        }

    }

}
