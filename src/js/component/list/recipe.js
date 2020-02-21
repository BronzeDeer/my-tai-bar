//Make sure the recipe elements are loaded and registered
import RecipeElement from "/js/component/list/element/recipe.js"
import LazyLoader from "/js/util/lazyload.js"
import {shadowBling} from "/js/util/bling.js"

export default class RecipeList extends HTMLElement{
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
        style.href = "/css/recipe-list.css"
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

                    this.cocktailList = newValue.split(",")
                    
                }
                break;
        
            default:
                break;
        }
    }

    set cocktailList(list){
        this.setAttribute("cocktail-list",list.toString())
        
        this.container.innerText = ""
        this.listIt = list.values()
        this.loadNextEntry()
    }
    loadNextEntry = () =>{
        console.log(this)
        //Load list entries one by one with delay to preserve responsiveness
        let {value,done} = this.listIt.next()
        if(!done){
            let ll = document.createElement("lazy-loader")
            ll.className="full-width d-block blocker"
            ll.loader = async () =>{
                let el = document.createElement("cocktail-recipe")
                el.cocktailID = value
                //Emulate loading time
                //await new Promise(resolve => setTimeout(resolve,250))
                return el
            }
            this.container.append(ll)
            setTimeout(this.loadNextEntry,50)
        }
            
    }
    
}

customElements.define("recipe-list",RecipeList)