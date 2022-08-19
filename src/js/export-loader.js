import {bling} from "./util/bling.js"
bling()

import {getGETParameters} from "./util/uri-tools.js"


window.on('load',() =>{
    let GET = getGETParameters()
    if(GET["fromStorage"]){
        let list = localStorage.getItem("displayList")
        if(list){
            $("#list").richCocktailList = JSON.parse(list)
            $("#bartender").richCocktailList = JSON.parse(list)
        } else {
            //Todo: Popup modal to load from disk or return to main page
            alert("No list in local storage")
        }
    } else {
        alert("GET Fail")
    }
})