
import ListElement from "/js/component/list/element/base.js"
import {ingredients,specialAfter,specialPre} from "/data/recipe-book.js"

var METHOD_ICONS = {
    "shake":"/img/recipe-icons/shaker.svg",
    "stirr": "/img/recipe-icons/stirr.png",
    "drink-mixer": "/img/recipe-icons/drink-mixer.svg",
    "swizzle":"/img/recipe-icons/swizzle.svg"
}

var GLASS_ICONS = {
    "pilsner":"/img/recipe-icons/pilsner.svg",
    "coupe":"/img/recipe-icons/coupe.svg",
    "flute":"/img/recipe-icons/flute.png",
    "highball":"/img/recipe-icons/highball.svg",
    "hurricane":"/img/recipe-icons/hurricane.svg",
    "martini":"/img/recipe-icons/martini.svg",
    "rocks":"/img/recipe-icons/rocks.svg",
    "bowl":"/img/recipe-icons/bowl.svg",
    "brandy":"/img/recipe-icons/brandy.svg",
    "copper-mug":"/img/recipe-icons/copper-mug.png",
    "shot":"/img/recipe-icons/shot.png",
    "wine":"/img/recipe-icons/wine.svg"
}
var ICE_ICONS={
    "cubes":"/img/recipe-icons/ice-cubes.svg",
    "crushed":"/img/recipe-icons/ice-crushed.svg",
    "none":"/img/recipe-icons/none.png"
    }

export default class RecipeELement extends ListElement{

    constructor() {
        super();

        let summary = document.createElement("div")
        summary.id = "summary"
        summary.className = "text-muted"
        this.$("#title").append(summary)

        let ingredientsCol = document.createElement("div")
        ingredientsCol.className = "col-8 my-auto ingredients"
        ingredientsCol.id = "ingredients"
        this.$("#top-row").append(ingredientsCol)
        let preparationCol = document.createElement("div")
        preparationCol.className = "col my-auto preparation"
        preparationCol.id = "preparation"
        this.$("#top-row").append(preparationCol)
    }

    set cocktail(cocktail){
        super.cocktail = cocktail
        this._updateNote(cocktail["note"])
        this._updateSummary(cocktail["summary"])
        this._updateIngredients(cocktail["ingredients"],cocktail["special-ingredients"])
        this._updatePreparation(cocktail["method"],cocktail["ice-method"],cocktail["glass"],cocktail["ice-glass"])
    }

    _makeStepHeader = (text) =>{
        let ingredientHeader = document.createElement("h5")
        ingredientHeader.className = "mt-3 step-header"
        ingredientHeader.innerText = text
        return ingredientHeader
    }

    _makePreparationIcon = (src,size=125) =>{
        let img = document.createElement("img")
        img.className = "icon-border rounded m-2"
        img.src = src
        img.width = size
        img.height = size

        return img
    }

    _updateIngredients = (ingredientList,specialIngredients) => {
        let oldContainer = this.$("#ingredients")
        let container = oldContainer.cloneNode(false)

        let preIngredients = this._parseSpecialIngredients(ingredientList,specialIngredients,specialPre)

        if(preIngredients.length > 0){
            container.append(...preIngredients)
            container.append(this._makeStepHeader("Add Ingredients"))
        }

        for(let key in ingredientList){
            if(!specialIngredients || !(key in specialIngredients)){
                container.append(this._parseIngredient(key,ingredientList[key],true))
            }
        };

        let afterIngredients = this._parseSpecialIngredients(ingredientList,specialIngredients,specialAfter)
        if(afterIngredients.length > 0){
            container.append(...afterIngredients)
        }

        oldContainer.parentNode.replaceChild(container,oldContainer)
    }

    _parseSpecialIngredients = (ingredientList,specialIngredients,actionDict) =>{

        if(!specialIngredients){
            return []
        }

        let result = []

        let actions = Object.keys(actionDict).filter(
            x => Object.values(specialIngredients).includes(x)
        )

        for( let action of actions){

            result.push(this._makeStepHeader(actionDict[action]))

            for(let [key,ingAction] of Object.entries(specialIngredients)){
                if(ingAction == action){
                    result.push(this._parseIngredient(key,ingredientList[key]))
                }
            }
        }

        return result

    }

    _updatePreparation = (method,iceMethod,glass,iceGlass) => {
        let container = this.$("#preparation")
        container.innerText = ""

        let row = document.createElement("div")
        row.className = "row"

        let row2 = null

        if(method === "build"){
            //1 row 2 col
            let col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(GLASS_ICONS[glass]))

            col.append(this._makePreparationIcon(ICE_ICONS[iceMethod]))
            row.append(col)
        } else if(iceGlass === "method") {
            //Two rows one with 2 col and one with 1 col
            let col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(METHOD_ICONS[method]))
            row.append(col)

            col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(GLASS_ICONS[glass]))
            row.append(col)

            row2 = document.createElement("div")
            row2.className = "row"

            col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(ICE_ICONS[iceMethod]))
            row2.append(col)
        } else {
            //single row two cols
            let col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(METHOD_ICONS[method]))
            col.append(this._makePreparationIcon(ICE_ICONS[iceMethod]))
            row.append(col)

            col = document.createElement("div")
            col.className = "col text-center"
            col.append(this._makePreparationIcon(GLASS_ICONS[glass]))
            col.append(this._makePreparationIcon(ICE_ICONS[iceGlass]))
            row.append(col)
        }

        container.append(row)
        if(row2) container.append(row2)
    }

    _updateSummary = (value) => {
        this.$("#summary").innerText = "(" + value + ")"
    }

    _parseIngredient = (key, amount, includeHints = false) => {
        let ingText = ingredients[key]
        let splitIdx = ingText.indexOf("(")
        let hint = ""

        if(splitIdx >= 0){
            hint = ingText.slice(splitIdx)
            ingText = ingText.slice(0,splitIdx)
        }


        let row = document.createElement("div")
        row.className = "row ingredient"
        row.id = key

            let amountCol = this._parseAmount(amount)
            row.append(amountCol)

            let ingCol = document.createElement("div")
                ingCol.className = "col"
                let t = document.createElement("div")
                t.innerText = ingText.charAt(0).toUpperCase() + ingText.slice(1)
                ingCol.append(t)

                if(includeHints && hint){
                    let h = document.createElement("div")
                    h.className = "hint"
                    h.innerText = hint
                    ingCol.append(h)
                }
            row.append(ingCol)

        return row
    }

     _parseAmount = (val) => {
        let div = document.createElement("div")
        div.className = "col-2"
        val = val.trim().toLowerCase()
        let b = document.createElement("b")
        if(val.localeCompare("fill") == 0){
            b.innerText = "fill"
            div.append(b)
        } else {
            let idx = val.search(/[A-Za-z]/)
            let t = document.createTextNode(val.slice(0,idx)+" ")
            div.append(t)
            b.innerText = val.slice(idx)
            div.append(b)
        }
        return div
    }

}

customElements.define("cocktail-recipe",RecipeELement)