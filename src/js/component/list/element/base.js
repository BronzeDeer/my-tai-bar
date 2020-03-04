import {cocktails} from "/data/recipe-book.js"
import BaseComponent from "/js/component/base.js"

export default class ListELement extends BaseComponent{

    constructor() {
        super();

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/dist/fontawesome-free-5.12.1-web/css/all.min.css")
        this.addStyleSheet("/css/recipe-element.css")

        let main = document.createElement("div")
        main.id = "recipe"
        main.className = "container card cocktail mt-5 mb-5 no-break"

            let header = document.createElement("div");
            header.id = "header"
            header.className = "row"

                let titleCol = document.createElement("div")
                titleCol.id = "title"
                titleCol.className = "col card-header"

                    let cocktailName = document.createElement("H2")
                    cocktailName.id = "cocktail-name"
                    titleCol.append(cocktailName)

                header.append(titleCol)
            main.append(header)

            let topRow = document.createElement("div")
            topRow.className = "card-body row "
            topRow.id = "top-row"
            main.append(topRow)

            let note = document.createElement("div")
            note.className = "alert alert-secondary d-none"
            note.id = "note"


            main.append(note)

        this._root.append(main)
    }

    static get observedAttributes() {
        return ['cocktail-id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "cocktail-id":
                if(oldValue !== newValue){
                    this.cocktail = cocktails[newValue]
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

    set cocktail(cocktail){
        this._updateName(cocktail["name"])
        console.log(["Base: cocktail updated to: ",cocktail])
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
