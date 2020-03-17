import BaseComponent from "/js/component/base.js"
import "/js/component/menu-picker/cocktail-item.js"
import "./header-item.js"

import Sortable from "/dist/RubaXa-Sortable/sortable.core.esm.js"

export default class PickList extends BaseComponent{
    constructor(){
        super()
        window.pickList = this

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/css/no-fouc.css")
        this.addStyleSheet("/css/menu-picker.css")

        let main = document.createElement("div")
        main.className = "container-fluid menu-picker"

            main.append(this.makeHeader())

            this._list = document.createElement("div")
            this._list.id = "pick-list"
            this._list.className = "list-group mt-3 pick-list"
                this._placeholder = document.createElement("div")
                this._placeholder.className = "list-group-item alert alert-light text-center"
                this._placeholder.innerText = 'Add Cocktails using the "Pick" Button...'
                this._list.append(this._placeholder)
            main.append(this._list)

            let addHdrDiv = document.createElement("div")
            addHdrDiv.className = "text-center mt-2"
                let hdrBtn = document.createElement("button")
                hdrBtn.className = "btn btn-secondary"
                hdrBtn.onclick = this.addHdr
                hdrBtn.innerText = "Add section header"
                addHdrDiv.append(hdrBtn)
            main.append(addHdrDiv)

        this._root.append(main)

    }

    makeHeader = () =>{
        let header = document.createElement("div")
        header.className = "container-fluid"
            let title = document.createElement("div")
            title.className = "row"
                let h = document.createElement("h5")
                h.innerText = "Menu Picker"
                title.append(h)
            header.append(title)

            //FIXME: doesn't work due to bootstrap not comprehending shadow-root
            let dropdown = document.createElement("div")
            dropdown.className="row dropdown"
                let btn = document.createElement("button")
                btn.className = "col btn btn-secondary dropdown-toggle"
                btn.setAttribute("data-toggle","dropdown")
                btn.innerHTML = "<b>Export</b>"
                btn.type = "button"
                dropdown.append(btn)

                let dropdownMenu = document.createElement("div")
                dropdownMenu.className = "dropdown-menu"
                    let dropdownItem = document.createElement("a")
                    dropdownItem.className = "dropdown-item"
                    dropdownItem.href = "#"
                    dropdownItem.innerText = "Recipe"
                    dropdownMenu.append(dropdownItem)

                    dropdownItem = document.createElement("a")
                    dropdownItem.className = "dropdown-item"
                    dropdownItem.href = "#"
                    dropdownItem.innerText = "Recipe (compact)"
                    dropdownMenu.append(dropdownItem)

                    dropdownItem = document.createElement("a")
                    dropdownItem.className = "dropdown-item"
                    dropdownItem.href = "#"
                    dropdownItem.innerText = "Menu"
                    dropdownMenu.append(dropdownItem)

                    dropdownItem = document.createElement("a")
                    dropdownItem.className = "dropdown-item"
                    dropdownItem.href = "#"
                    dropdownItem.innerText = "Menu (compact)"
                    dropdownMenu.append(dropdownItem)

                dropdown.append(dropdownMenu)

            header.append(dropdown)
        return header
    }

    connectedCallback(){
        if(super.connectedCallback) super.connectedCallback()
        let options = {
            animation:250
        }

        if(window.innerWidth < 1250){
            options.handle = ".fa-grip-lines"
        }
        Sortable.create(this._list,options)
    }

    addPick = (pick) => {
        pick.className = " list-group-item fade-in"
        pick.deleteCallback = () => {this.deletePick(pick)}
        if(this._list.firstChild == this._placeholder){
            this._list.replaceChild(pick,this._placeholder)
        } else {
            this._list.append(pick)
        }
    }

    addCocktail = (cocktailID) => {
        let pick = document.createElement("pick-cocktail")
        pick.value = cocktailID
        this.addPick(pick)
    }

    addHdr = () => {
        let pick = document.createElement("pick-header")
        this.addPick(pick)
        pick.classList.add("bg-secondary")
        pick.classList.add("text-white")
    }

    deletePick = (pick) => {
        this._list.removeChild(pick)
        if(!this._list.hasChildNodes()){
            this._list.append(this._placeholder)
        }
    }

    toString = () => {
        return JSON.stringify(this.getExportable())
    }

    getExportable = () => {
        if(this._placeholder.parentNode == this._list){
            return []
        }
        return this._list.childNodes.map(x => x.getExportable())
    }
}

customElements.define("pick-list",PickList)