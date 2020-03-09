
import "../../util/set-tools.js"
import {tags} from "../../../data/tags.js"
import {cocktails} from "/data/recipe-book.js"
import BaseComponent from "../base.js"
import "../list/element/recipe.js"
import "./tag-selection.js"

function makeDataList(){
    let dataList = document.createElement("datalist")
    dataList.id="tag-list"
    for(let tag in tags){
        let opt = document.createElement("option")
        opt.value=tag
        dataList.append(opt)
    }

    for(let [cocktailID,cocktailObj] of Object.entries(cocktails)){
        let opt = document.createElement("option")
        opt.value=cocktailID
        opt.innerText= cocktailObj.name
        dataList.append(opt)
    }
    return dataList
}

export default class TagSearchBar extends BaseComponent{
    constructor(){
        super()

        this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")
        this.addStyleSheet("/dist/fontawesome-free-5.12.1-web/css/all.min.css")
        this.addStyleSheet("/css/tag-search.css")

        this.selectedTags = new Set()
        this.recalculateFilter()

        let container = document.createElement("div")
        container.className="container-fluid"
            let row = document.createElement("div")
            row.className = "row searchbar"
                this._tagContainer = document.createElement("div")
                this._tagContainer.id = "tag-container"
                this._tagContainer.className = "tag-container"
                row.append(this._tagContainer)

                let searchInput = document.createElement("input")
                searchInput.className = "col mx-2 search-input"
                searchInput.setAttribute("list","tag-list")
                searchInput.addEventListener("input",this.inputCallback)
                searchInput.placeholder = "Search for cocktails by tag or by name"
                row.append(searchInput)
                row.append(makeDataList())
            container.append(row)
        this._root.append(container)
    }

    set filteredCocktails(val){
        if(this.onFilterChanged) this.onFilterChanged(val)
        this._filteredCocktails = val
    }

    get filteredCocktails(){
        return this._filteredCocktails
    }

    recalculateFilter = () =>{
        let res = new Set(Object.keys(cocktails))
        for(let t of this.selectedTags){
            res = res.intersect(tags[t])
        }
        console.log([this,res])
        this.filteredCocktails = res
    }

    inputCallback =(e) =>{
        //Fixme:
        //As of 80.0.3987.100 Chrom(e/ium) has a bug in which auto complete
        //creates a generic event instead of an input event so inputType is missing
        //This is an attempted workaround by detecting events which are not of the correct type
        if(e.inputType == "insertReplacementText" || ! (e instanceof InputEvent)){
            let el = document.createElement("tag-selection")
            let tagValue = e.target.value

            if(tagValue in cocktails){
                //Todo spawn modal with the cocktail
                let el = document.createElement("cocktail-recipe")
                el.className="no-fouc"
                el.cocktailID = tagValue
                showModal(el)
            } else if(!this.selectedTags.has(tagValue)){
                this.selectedTags.add(tagValue)
                this.filteredCocktails = this.filteredCocktails.intersect(tags[tagValue])
                el.value = tagValue
                el.deleteCallback = this.tagDeleteCallback
                this._tagContainer.append(el)
            } else {
                // TODO: animate the existing tag for attention
                let existing = this._tagContainer
            }
            e.target.value = ""

        }

    }

    tagDeleteCallback = (tag) =>{
        console.log([this,tag])
        this.selectedTags.delete(tag.value)
        this.recalculateFilter()
        this._tagContainer.removeChild(tag)
    }
}

customElements.define("tag-search",TagSearchBar)
