{
    let arr = new Set();
    arr.add(100);
    arr.add(false);
    arr.add(["world", {name: "yinwk"}]);
    console.log(arr);
    for (let item of arr) {
        console.log(item);
    }
    for (let keys of arr.keys()) {
        console.log(keys);
    }
    for (let values of arr.values()) {
        console.log(values);
    }
    for (let [key, value] of arr.entries()) {
        console.log(key, value);
    }
    arr.forEach((arrItem, arrIndex) => {
        console.log(arrItem);
    });
    let newArr = Array.from([22, 56, "world"]);
    for(let newItemKey of newArr.keys()){
        console.log(newItemKey);
    }
}