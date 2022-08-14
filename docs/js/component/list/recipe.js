//Make sure the recipe elements are loaded and registered
import RecipeElement from "/js/component/list/element/recipe.js"
import CocktailList from "/js/component/list/base.js"

export default class RecipeList extends CocktailList{

    makeLoaderFunc = (id,price) => {
        return  async () =>{
            let el = document.createElement("cocktail-recipe")
            el.cocktailID = id
            el.className = "fade-in"
            el.printable = this.printable
            if (price) el.price = price
            return el
        }
    }
}

customElements.define("recipe-list",RecipeList)