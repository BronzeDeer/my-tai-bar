// This webComponent takes an async factory/loader function (this.loader) which creates and configures an element
// Once the lazyloader comes on screen it will execute the loader function and display a loading animation
// Once the promise returns,the lazy loader will replace its content with the result of the loader function
// You should style this component with min-width and min-height to block out a rough area in advance
// You can control the amount of the lazy loader that needs to be revealed before it starts loading with the 'threasholdRatio' property (default 0.15)


export default class LazyLoader extends HTMLElement{
    constructor(){
        super()
        this._root = this.attachDom
        this.spinner = document.createElement("div")
        this.spinner.className = "lds-ring pause"
        this.spinner.innerHTML = "<div></div><div></div><div></div><div></div>"

        this.thresholdRatio = 0.15
    }

    connectedCallback(){
        if(super.connectedCallback) super.connectedCallback()
        this.append(this.spinner)
        this.observer = new IntersectionObserver(this.intersectionCallback,{threshold:[this.thresholdRatio,1.0],root:null})
        this.observer.observe(this)
    } 

    set loader(func){
        this._loader = func
    }

    intersectionCallback = entries =>{
        if(entries[0].intersectionRatio > this.thresholdRatio){
            this.observer.unobserve(this)
            this.trigger()
        }
    }

    async trigger(){
        this.spinner.classList.remove("pause")
        let el = await this._loader()
        this.removeChild(this.spinner)
        this.append(el)
    }
}

customElements.define("lazy-loader",LazyLoader)