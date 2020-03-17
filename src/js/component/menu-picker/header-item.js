import PickerItem from "/js/component/menu-picker/base-item.js"


export default class HeaderPickerItem extends PickerItem{
    constructor(){
        super()

        this.$("i.fa-grip-lines").classList.remove("text-secondary")

        this._textContainer = document.createElement("div")
            this._textContainer.className = "row"

            let h = document.createElement("h5")
            h.className = "col mb-0 text-center"
                this._text = document.createElement("b")
                h.append(this._text)
            this._textContainer.append(h)

            let editIcon = document.createElement("i")
            editIcon.className = "col-1 fa fa-pen-square fa-lg fa-align-middle align-self-center align-self-end"
            editIcon.onclick = this.makeEditable
            this._textContainer.append(editIcon)

        this._input = document.createElement("input")
        this._input.type="text"
        this._input.onblur = this.inputCallback
        this._input.onkeyup = e => {if(e.keyCode === 13) {e.preventDefault();this.inputCallback(e)}}

        this._main.append(this._input)
    }

    connectedCallback(){
        super.connectedCallback()
        if(this._input.parentNode == this._main){
            this._input.focus()
        }
    }


    inputCallback = (e) =>{
        if(this._input.parentNode == this._main){
            this._main.replaceChild(this._textContainer,this._input)
            this.value = this._input.value
        }
    }

    onValueChanged = (newValue) => {
        if(this._input.parentNode == this._main){
            //Setting from outside cancels and overrides edit mode
            this._main.replaceChild(this._textContainer,this._input)
        }
        this._text.innerText = newValue
    }

    makeEditable = () => {
        if(this._textContainer.parentNode == this._main){
            this._input.value = this.value
            this._main.replaceChild(this._input,this._textContainer)
        }
        this._input.focus()
    }

    getExportable = () => {
        return {type:"section",name:this.value}
    }
}
customElements.define("pick-header",HeaderPickerItem)
