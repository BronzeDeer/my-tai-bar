import ListElement from "/js/component/list/element/base.js"

export default class MenuItem extends ListElement{
    constructor(){
        super()
        let desc = document.createElement("div")
        desc.id = "description"
        this.$("#top-row").append(desc)
    }

    set cocktail(cocktail){
        super.cocktail = cocktail
        if("menu-desc" in cocktail){
            this.$("#description").innerText = cocktail["menu-desc"]
        } else {
            this.$("#description").innerText = cocktail["summary"]
        }
    }
}

customElements.define("menu-item",MenuItem)
