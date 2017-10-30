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
    console.log(arr.has(100));
    arr.delete(false);
    console.log(arr);
    arr.clear();
    console.log(arr);
    //unique
    let arrAno = new Set([24, 55, "new world", 44, 24, 88, 100, "new world"]);
    console.log(arrAno);
}

{
    //WeakSet:
    //1.无size属性
    //2.无clear方法
    //3.无遍历
    let weakCollection = new WeakSet();
    weakCollection.add({name: "yinwk"});
    weakCollection.add({age: 25});
    console.log(weakCollection);
    weakCollection.delete({name: "yinwk"});
    console.log(weakCollection);
}

{
    //Map
    let arrMap = new Map();
    let arr = [123];
    let object = {name: "Gary"};
    arrMap.set(arr, "newNumber1234567890");
    arrMap.set(object, "Hi Guys~I'm Gary");
    console.log(arrMap, arrMap.size, arrMap.get(arr));
    console.log(arrMap.get(object));
    for (let arrMapValueItem of arrMap) {
        console.log(arrMapValueItem);
    }
    for (let key of arrMap.keys()) {
        console.log(key);
    }
    for (let value of arrMap.values()) {
        console.log(value);
    }
    for (let [key, value] of arrMap.entries()) {
        console.log(`${JSON.stringify(key)}:${value}`);
    }
    arrMap.forEach(function each(eachItem, eachIndex) {
        console.log("foreach", eachItem);
    });
    console.log(arrMap.has(object));
    arrMap.delete(arr);
    console.log(arrMap);
    arrMap.clear();
    console.log(arrMap);
    let map = new Map([[['gary'], "Gary is mine~"], [['gary'], "Gary is mine~"], [true, [1, 2, 3, 4, 5, 6, 7, 8, 9]]]);
    console.log(map);
}

{
    //WeakMap
    //1.no size property
    //2.no clear function
    //3.no 遍历
    //4.no get function
    let weakMap = new WeakMap();
    let weakArr = ['123'];
    weakMap.set(weakArr, '456');
    console.log(weakMap, weakMap.size);
    // for (let weakMapItem of weakMap) {
    //     console.log(weakMapItem);
    // }
    //weakMap.clear();
    weakMap.delete(weakArr);
    console.log(weakMap);
}