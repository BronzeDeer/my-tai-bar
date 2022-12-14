import {cocktails} from "../../../../data/recipe-book.js"
import BaseComponent from "../../base.js"
import TagIcons from "../../tag-icons.js";
import {reverse_tags} from "../../../../data/tags.js"

export default class ListELement extends BaseComponent{

    constructor() {
        super();

        this.addStyleSheet("./dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("./dist/fontawesome-free-5.12.1-web/css/all.min.css")
        this.addStyleSheet("./css/recipe-element.css")

        this._container = document.createElement("div")
        this._container.id = "container"
        this._container.className = "container card cocktail no-break"

            let card_header = document.createElement("div");
            card_header.className = "card-header"
            card_header.style = "margin-right: -15px; margin-left: -15px;"

            let header = document.createElement("div")
            header.id = "header"
            header.className = "row"

                let titleCol = document.createElement("div")
                titleCol.id = "title"
                titleCol.className = "col"

                    let cocktailName = document.createElement("H2")
                    cocktailName.id = "cocktail-name"
                    titleCol.append(cocktailName)

                header.append(titleCol)

                let tagCol = document.createElement("div")
                tagCol.id = "tags"
                tagCol.className = "w-auto"
                    let tags = this._tags = document.createElement("tag-icons")
                    tagCol.append(tags)
                header.append(tagCol)

                let price = this._price = document.createElement("div")
                    price.className = "col-2 text-right d-none"
                    price.style = "font-size: 3rem; font-weight: 500;"
                    price.id = "price"
                header.append(price)

                let btnCol = document.createElement("div")
                btnCol.className = "col-2 text-center my-auto pick-col d-none"
                    let pickBtn = document.createElement("button")
                    pickBtn.id = "pick-btn"
                    this._pickBtn = pickBtn
                    pickBtn.className = "btn btn-secondary fa-1x"
                    if(window.pickList){
                        pickBtn.onclick = () => {if(this.cocktailID)window.pickList.addCocktail(this.cocktailID)}
                        btnCol.classList.remove("d-none")
                    }
                    //Will be enabled once cocktailID is set
                    pickBtn.disabled = true

                        let icon = document.createElement("i")
                        icon.className="fa fa-plus"
                        pickBtn.append(icon)

                        let bold = document.createElement("b")
                        bold.innerText = " Pick"
                        pickBtn.append(bold)

                    btnCol.append(pickBtn)
                header.append(btnCol)

            card_header.append(header)

            this._container.append(card_header)

            let topRow = document.createElement("div")
            topRow.className = "card-body row "
            topRow.id = "top-row"
            this._container.append(topRow)

            let note = document.createElement("div")
            note.className = "alert alert-secondary d-none"
            note.id = "note"


            this._container.append(note)

        this._root.append(this._container)
    }

    static get observedAttributes() {
        return ['cocktail-id','printable',"price"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "cocktail-id":
                if(oldValue !== newValue){
                    this.cocktail = cocktails[newValue]
                    this._pickBtn.disabled = false
                    this._tags.tags = reverse_tags[newValue]
                }
                break;
            case "printable":
                if(oldValue !== newValue){
                    if(newValue != null){
                        this._container.classList.add("printable")
                    } else {
                        this._container.classList.remove("printable")
                    }
                }
            case "price":
                if(oldValue !== newValue){
                    if(newValue){
                        this.$("#price").classList.remove("d-none")
                    } else {
                        this.$("#price").classList.add("d-none")
                    }
                    this.$('#price').innerText = newValue
                }
                break;
            default:
                break;
        }
    }

    set cocktailID(id){
        this.setAttribute("cocktail-id",id)
    }

    get cocktailID(){
        return this.getAttribute("cocktail-id")
    }

    get cocktailID(){
        return this.getAttribute("cocktail-id")
    }
    set cocktail(cocktail){
        this._updateName(cocktail["name"])
    }

    set printable(val){
        if(val){
            this.setAttribute("printable","")
        } else {
            this.removeAttribute("printable")
        }
    }

    get printable(){
        return this.hasAttribute("printable")
    }

    set price(price){
        this.setAttribute("price",price)
    }

    get price(){
        return this.getAttribute("price")
    }

    _updateName = (value) => {
        this.$("#cocktail-name").innerText = value
    }

    _updateNote = (value) => {
        let note = this.$("#note")
        note.innerText = ""
        if(!!value){
            let b = document.createElement("b")
            b.textContent = "Note: "
            note.append(b)
            note.append(document.createTextNode(value))

            note.classList.remove("d-none")
        } else {
            note.classList.add("d-none")
        }
    }
}
