
import {bling} from "./util/bling.js"
bling()

import RecipeElement from "/js/component/list/element/recipe.js"
import RecipeList from "/js/component/list/recipe.js"
import LazyLoader from "/js/util/lazyload.js"
import {cocktails} from "/data/recipe-book.js"

window.on('load',() =>{  
    let container = $("#main")
    container.innerText = ""

    //Debug: test lazy-load
    const f = async () =>{
      let pp = document.createElement("cocktail-recipe")
      pp.cocktailID = "puka-punch"
      //Emulate long loading time
      await new Promise(resolve => setTimeout(resolve,2000))
      return pp
    }


    // const mt = document.createElement("cocktail-recipe")
    // mt.cocktailID = "mai-tai"

    // const bernie = document.createElement("cocktail-recipe")
    // bernie.cocktailID = "socialist"    

    let list = document.createElement("recipe-list")
    list.cocktailList = Object.keys(cocktails)
    container.append(list)

    // let ll = document.createElement("lazy-loader")
    // ll.loader = f
    // container.append(ll)

})