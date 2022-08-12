import ListElement from "/js/component/list/element/base.js"

export default class MenuItem extends ListElement{
    constructor(){
        super()
        let desc = document.createElement("div")
        desc.id = "description"
        this.$("#top-row").append(desc)

        let price = this._price = document.createElement("div")
        price.className = "col-2 text-right"
        let price_content = document.createElement("h2")
        price_content.id = "price"
        price.append(price_content)

        this.$("#title").insertAdjacentElement("afterend",price)
    }

    set cocktail(cocktail){
        super.cocktail = cocktail
        if("menu-desc" in cocktail){
            this.$("#description").innerText = cocktail["menu-desc"]
        } else {
            this.$("#description").innerText = cocktail["summary"]
        }
    }

    set price(price){
        this.setAttribute("price",price)
    }

    get price(){
        return this.getAttribute("price")
    }

    static get observedAttributes() {
        return super.observedAttributes.concat(['price'])
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "price":
                if(oldValue !== newValue){
                    this.$('#price').innerText = newValue
                }
                break;
            default:
                super.attributeChangedCallback(name,oldValue,newValue);
                break;
        }
    }

}

customElements.define("menu-item",MenuItem)
