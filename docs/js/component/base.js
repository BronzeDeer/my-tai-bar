import {shadowBling} from "/js/util/bling.js"

export default class BaseComponent extends HTMLElement{
    constructor(){
        super()
        this._root = this.attachShadow({ mode: "open" });
        [this.$,this.$$] = shadowBling(this._root)
        this._loadingPromises=[]

    }

    addStyleSheet = (url) =>{
        let link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = url
        link.type = "text/css"
        this._loadingPromises.push(new Promise((resolve,reject)=>{
            link.onload = resolve
        }))
        this._root.append(link)
    }

    connectedCallback(){
        Promise.all(this._loadingPromises).then(()=>{this.setAttribute("loaded","")})
    }
}