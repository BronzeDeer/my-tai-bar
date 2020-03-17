import {shadowBling} from "/js/util/bling.js"
import BaseComponent from "/js/component/base.js"

export default class PickerItem extends BaseComponent{

    constructor(){
        super()

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/dist/fontawesome-free-5.12.1-web/css/all.min.css")

        let container = document.createElement("div")
        container.className = "container-fluid"
            let row = document.createElement("div")
            row.className = "row"

                let grip = document.createElement("div")
                grip.className = "col-1 my-auto pl-0"
                    let glyphicon = document.createElement("i")
                    glyphicon.className="text-secondary fa fa-grip-lines fa-lg align-middle"
                    grip.append(glyphicon)
                row.append(grip)

                this._main = document.createElement("div")
                this._main.className = "col my-auto"
                this._main.id = "main"
                row.append(this._main)

                let col = document.createElement("div")
                col.className = "col-2 my-auto"

                    this._deleteButton = document.createElement("button")
                    this._deleteButton.id = "delete"
                    this._deleteButton.type = "button"
                    this._deleteButton.className = "btn btn-danger py-0"
                    this._deleteButton.disabled = true

                        glyphicon = document.createElement("i")
                        glyphicon.className="fa fa-times fa-lg align-middle"
                        this._deleteButton.append(glyphicon)

                    col.append(this._deleteButton)
                row.append(col)
            container.append(row)
        this._root.append(container)
        console.log([this,"finished constructing"])
    }

    static get observedAttributes() {
        return ['value'];
    }

    connectedCallback(){
        super.connectedCallback()
        console.log([this," connected"])
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "value":
                if(oldValue !== newValue){
                    this.onValueChanged(newValue)
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
        this.getAttribute("value")
    }

    set deleteCallback(func){
        this._deleteButton.onclick = func
        this._deleteButton.disabled = false
    }

    toString = () => {
        return this.value
    }

    onValueChanged = (newValue) =>{
        throw new Error("Abstract onValueChanged() not overriden")
    }

}
