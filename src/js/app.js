
import {bling} from "./util/bling.js"
bling()

import "/js/component/list/element/recipe.js"
import "/js/component/list/recipe.js"
import "/js/component/tag-search/searchbar.js"
import "/js/component/list/menu.js"
import "/js/component/menu-picker/list.js"
import {cocktails} from "/data/recipe-book.js"

const closeModal = () =>{
    window._modal.classList.remove("d-block")
    window._modal.classList.remove("show")
    window._modalBackdrop.classList.add("d-none")
    window._modalBackdrop.classList.remove("show")
    document.body.classList.remove("modal-open")
    document.body.onclick = null
}

window.on('load',() =>{
    let container = $("#main")
    container.innerText = ""

    let list = document.createElement("recipe-list")
    list.cocktailList = Object.keys(cocktails)
    container.append(list)

    $("tag-search").onFilterChanged = x => {list.filter = x }

    let sideList = $("#side-list")
    sideList.innerText=""
        let pickList = document.createElement("pick-list")
        pickList.className = "sticky-top"
    sideList.append(pickList)

    window._modalBackdrop = $(".modal-backdrop")
    window._modal = $("#main-modal")
    window._modalContent = window._modal.querySelector(".modal-content")
    window.showModal = (content) => {
        window._modalContent.innerText = ""
        window._modalContent.append(content)
        window._modal.classList.add("d-block")
        window._modal.classList.add("show")
        window._modalBackdrop.classList.remove("d-none")
        window._modalBackdrop.classList.add("show")
        document.body.classList.add("modal-open")
        document.body.onclick = closeModal
    }

})
