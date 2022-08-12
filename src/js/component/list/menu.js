import "/js/component/list/element/menu.js"
import CocktailList from "/js/component/list/base.js"

export default class MenuList extends CocktailList{

    makeLoaderFunc = (id,price) => {
        return  async () =>{
            let el = document.createElement("menu-item")
            el.cocktailID = id
            el.className = "fade-in"
            el.printable = this.printable
            if (price) el.price = price
            return el
        }
    }
}

customElements.define("menu-list",MenuList)
