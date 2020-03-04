import BaseComponent from "/js/component/base.js"
import "/js/component/menu-picker/cocktail-item.js"

import Sortable from "/dist/RubaXa-Sortable/sortable.core.esm.js"

export default class PickList extends BaseComponent{
    constructor(){
        super()
        window.pickList = this

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/css/no-fouc.css")

        let main = document.createElement("div")
        main.className = "container-fluid"

            this._list = document.createElement("div")
            this._list.id = "pick-list"
            this._list.className = "list-group"

            main.append(this._list)

        this._root.append(main)

    }

    connectedCallback(){
        if(super.connectedCallback) super.connectedCallback()
        Sortable.create(this._list,{
            animation:250
        })
    }

    addCocktail = (cocktailID) => {
        let pick = document.createElement("pick-cocktail")
        pick.value = cocktailID
        pick.className = " list-group-item fade-in"
        pick.deleteCallback = () => {this._list.removeChild(pick)}
        this._list.append(pick)
    }

}

customElements.define("pick-list",PickList)