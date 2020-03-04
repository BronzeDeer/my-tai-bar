
import {bling} from "./util/bling.js"
bling()

import "/js/component/list/element/recipe.js"
import "/js/component/list/recipe.js"
import "/js/component/list/menu.js"
import "/js/component/menu-picker/list.js"
import {cocktails} from "/data/recipe-book.js"

window.on('load',() =>{
    let container = $("#main")
    container.innerText = ""

    let list = document.createElement("recipe-list")
    list.cocktailList = Object.keys(cocktails)
    container.append(list)

    let sideList = $("#side-list")
    sideList.innerText=""
        let pickList = document.createElement("pick-list")
        pickList.className = "sticky-top"
    sideList.append(pickList)

})
