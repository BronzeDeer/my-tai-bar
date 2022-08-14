import {bling} from "../../util/bling.js"

export default class TagSelection extends HTMLElement{
    constructor(){
        super()
        bling()
        this._root = this

        this._content = document.createElement("div")
        this._content.className = "d-inline-block tag-selection bg-secondary my-1 mx-2 px-1"

        this._text = document.createElement("b")
        this._deleteIcon = document.createElement("i")
        this._deleteIcon.className = "d-none ml-1 fa fa-times-circle"
        this._content.append(this._text,this._deleteIcon)

    }

    static get observedAttributes() {
        return ['value'];
    }

    connectedCallback(){
        this._root.append(this._content)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "value":
                if(oldValue !== newValue){
                    this._text.innerText = newValue
                }
                break;

            default:
                break;
        }
    }

    set value(val){
        this.setAttribute("value",val)
    }

    get value(){
        return this.getAttribute("value")
    }

    set deleteCallback(func){
        this._deleteIcon.on("click",()=>{func(this)})
        this._deleteIcon.classList.remove("d-none")
    }
}

customElements.define("tag-selection",TagSelection)
