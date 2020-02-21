import LazyLoader from "/js/util/lazyload.js"
import {shadowBling} from "/js/util/bling.js"

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
        return ['cocktail-list'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "cocktail-list":
                if(oldValue !== newValue){
                    if(newValue.charAt(0) === '[') newValue = newValue.slice(1)
                    if( newValue.slice(-1) === ']') newValue = newValue.slice(0,-1)

                    this._cocktailList = newValue.split(",")

                    this.container.innerText = ""
                    this.listIt = this._cocktailList.values()
                    this.loadNextEntry()

                }
                break;

            default:
                break;
        }
    }

    set cocktailList(list){
        this.setAttribute("cocktail-list",list.toString())
    }

    makeLoaderFunc = (id) => {
        throw new Error("Abstract makeLoaderFunc not overriden");
    }

    loadNextEntry = () =>{
        //Load list entries one by one with delay to preserve responsiveness
        let {value,done} = this.listIt.next()
        if(!done){
            let ll = document.createElement("lazy-loader")
            ll.className="full-width d-block blocker"
            ll.loader = this.makeLoaderFunc(value)
            this.container.append(ll)
            setTimeout(this.loadNextEntry,50)
        }

    }

}
