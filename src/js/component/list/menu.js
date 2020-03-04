import "/js/component/list/element/menu.js"
import CocktailList from "/js/component/list/base.js"

export default class MenuList extends CocktailList{

    makeLoaderFunc = (id) => {
        return  async () =>{
            let el = document.createElement("menu-item")
            el.cocktailID = id
            el.className = "fade-in"
            return el
        }
    }
}

customElements.define("menu-list",MenuList)
