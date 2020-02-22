
import {bling} from "./util/bling.js"
bling()

import RecipeElement from "/js/component/list/element/recipe.js"
import RecipeList from "/js/component/list/recipe.js"
import LazyLoader from "/js/util/lazyload.js"
import {cocktails} from "/data/recipe-book.js"

window.on('load',() =>{
    let container = $("#main")
    container.innerText = ""

    let list = document.createElement("recipe-list")
    list.cocktailList = Object.keys(cocktails)
    container.append(list)

})
