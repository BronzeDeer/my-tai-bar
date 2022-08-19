export function bling(){
    //bling.js but with difference between query and queryAll

    window.$ = document.querySelector.bind(document);
    window.$$ = document.querySelectorAll.bind(document);

    Node.prototype.on = window.on = function (name, fn) {
        this.addEventListener(name, fn);
    }
    
    NodeList.prototype.__proto__ = Array.prototype;
    
    NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
        this.forEach(function (elem, i) {
        elem.on(name, fn);
        });
    }

}

export function shadowBling(shadowRoot){
    return [shadowRoot.querySelector.bind(shadowRoot),shadowRoot.querySelectorAll.bind(shadowRoot)]
}