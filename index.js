function regulatedInput(collection) {
    if (Array.isArray(collection) === true) {
      return collection.slice();
    } else {
      return Object.values(collection);
    }
};
const myEach = (collection, callback) => {
    const newCollection = regulatedInput(collection);
    for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i]);
    }
    return collection
};
const myMap = (collection,callback) => {
    const newCollection = regulatedInput(collection);
    let newArray = [];
    for (let index = 0; index < newCollection.length; index++) {
        newArray.push(callback(newCollection[index]));
    }
    return newArray
};
const myReduce = (collection,callback,acc) => {
    let newCollection = regulatedInput(collection);
    if(!acc){
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc,newCollection[i], newCollection)
    }
    return acc
};
const myFind = (collection,predicate) => {
    let newCollection = regulatedInput(collection);
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i]))
        return newCollection[i]
    }
    return undefined
};
const myFilter = (collection,predicate) => {
    let newCollection = regulatedInput(collection);
    const newArr = [];
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
    return newArr
};
const mySize = (collection) => {
    let newCollection = regulatedInput(collection);
    return newCollection.length;
};

const myFirst = (array,n) => {
    const results = [];
    if(n === undefined) return array[0]
    for(let i=0; i<n; i++){
        results.push(array[i])
    }
    return results
};
const myLast = (array,n)=>{
    if(n === undefined) return array[array.length - 1];
    return array.slice(-n);
};
const myKeys = (object) => {
    return Object.keys(object);
};
const myValues = (object) => {
    return Object.values(object)
};


