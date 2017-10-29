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
    console.log(arr.size);
    // let newArr = Array.from([22, 56, "world"]);
    // for (let newItemKey of newArr.keys()) {
    //     console.log(newItemKey);
    // }
    arr.delete(false);
    console.log(arr);
    arr.clear();
    console.log(arr);
    let arrAno = new Set([24, 55, "new world"]);
    console.log(arrAno);
}

{
    let weakCollection = new WeakSet();
    weakCollection.add({name: "yinwk"});
    weakCollection.add({age: 25});
    weakCollection.clear();
    console.log(weakCollection);
}