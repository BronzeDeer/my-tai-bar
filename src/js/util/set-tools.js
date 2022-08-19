Set.prototype.intersect = function(setB){
    if(!(setB instanceof Set)){
        setB = new Set(setB)
    }
    return new Set([...this].filter(x => (setB.has(x))))
}

Set.prototype.minus = (setB) => {
    if(!(setB instanceof Set)){
        setB = new Set(setB)
    }
    return new Set([...this].filter(x => (!setB.has(x))))
}