import BaseComponent from "./base.js"

let icon_root = "/img/tag-icons/"

let iconized_tags = {
  "milk": {
    img_url: icon_root+"cow.svg",
    desc: "contains milk"
  },
  "strong": {
    img_url: icon_root+"strong_inverted.svg",
    desc: "very high alcohol content even if it doesn't taste like it; drink slowly"
  },
  "non-alcoholic": {
    img_url: icon_root+"non-alc.svg",
    desc: "non-alcoholic drink"
  },
  "grapefruit": {
    img_url: icon_root+"grapefruit.svg",
    desc: "contains grapefruit, may interfere with medication; check medicine leaflet"
  },
  "vegan": {
    img_url: icon_root+"vegan.svg",
    desc: "contains only vegan ingredients; filtration methods not always known"
  },
  "honey-vegan": {
    img_url: icon_root+"honey-vegan.svg",
    desc: "vegan if made with honey-alternative; ask your bartender (potential upcharge)"
  }
}

let constructIcon = (item) =>{
  let el = document.createElement("img")
  el.style = "height: 3rem; width: 3rem;"
  el.className = "mx-2"
  el.src = item.img_url
  return el
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
                    this.container.append(constructIcon(iconized_tags[tag]))
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

let constructItem= (item)=>{
  let container = document.createElement("div")
  container.className = "d-flex col-6 p-2 align-items-center border"
  container.append(constructIcon(item))
  let text = document.createElement("div")
  text.className = "ml-3"
  text.innerText = item.desc
  container.append(text)

  return container
}


export let legend = class TagLegend extends BaseComponent{
  constructor() {
    super();

    this.addStyleSheet("/dist/bootstrap-4.3.1-dist/css/bootstrap.min.css")

    let container = document.createElement("div")
    container.id = "container"
    container.className = "container d-flex flex-wrap align-items-stretch"
    this._root.append(container)
    this.container = container

    for (let icon of Object.values(iconized_tags)){
      container.append(constructItem(icon))
    }
  }

}

customElements.define("tag-legend",legend)
