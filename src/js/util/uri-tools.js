export const getGETParameters = () => {
    let getString = window.location.search.substr(1)
    let params = {}
    for(let kv of getString.split("&")){
        let [key,value=true] = kv.split("=")
        params[key] = value
    }
    return params
}