import PickerItem from "/js/component/menu-picker/base-item.js"

import {cocktails} from "/data/recipe-book.js"

export default class CocktailPickerItem extends PickerItem{

    onValueChanged = (newValue) => {
        let header = document.createElement("h5")
        header.innerText = cocktails[newValue].name
        header.className = "mb-0"
        this._main.innerText = ""
        this._main.append(header)
    }
}
customElements.define("pick-cocktail",CocktailPickerItem)
