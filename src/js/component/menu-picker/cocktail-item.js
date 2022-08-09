import PickerItem from "/js/component/menu-picker/base-item.js"

import {cocktails} from "/data/recipe-book.js"

export default class CocktailPickerItem extends PickerItem{

    constructor(){
        super()

        let price = this._price = document.createElement("input")
        price.type = "text"
        price.className = "col-3 my-auto text-right"
        price.placeholder = "price"
        this._main.insertAdjacentElement("afterend",price)
    }

    onValueChanged = (newValue) => {
        let header = document.createElement("h5")
        header.innerText = cocktails[newValue].name
        header.className = "mb-0"
        this._main.innerText = ""
        this._main.append(header)
    }

    getExportable = () => {
        let exportable = {type:"cocktail",id:this.value}
        if(this._price.value){
            exportable.price = this._price.value
        }
        return exportable
    }
}
customElements.define("pick-cocktail",CocktailPickerItem)
