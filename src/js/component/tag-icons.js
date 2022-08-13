import BaseComponent from "./base.js"

let icon_root = "/img/tag-icons/"

let iconized_tags = {
  "milk": icon_root+"cow.svg",
  "strong": icon_root+"strong_inverted.svg",
  "non-alcoholic": icon_root+"non-alc.svg",
  "grapefruit": icon_root+"grapefruit.svg",
  "vegan": icon_root+"vegan.svg",
}


export default class TagIcons extends BaseComponent{
  constructor() {
    super();

    this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")

    let container = document.createElement("div")
    container.id = "container"
    container.className = "h-100 d-flex align-items-center"
    this._root.append(container)
    this.container = container
  }

  static get observedAttributes() {
      return ['tags'];
  }

  set tags(val){
    this.setAttribute("tags",val)
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
        case "tags":
            if(oldValue !== newValue){
                if(newValue.charAt(0) === '[') newValue = newValue.slice(1)
                if( newValue.slice(-1) === ']') newValue = newValue.slice(0,-1)

                this.container.textContent=""

                for (let tag of newValue.split(",").map((x)=>x.trim())){

                  if( tag in iconized_tags){
                    let el = document.createElement("img")
                    el.style = "height: 3rem; width: 3rem;"
                    el.className = "mx-2"
                    el.src = iconized_tags[tag]
                    this.container.appendChild(el)
                  }

                }
            }
            break;
        default:
          break;
    }
  }
}

customElements.define("tag-icons",TagIcons)
