{
    //回顾Set,Map
    //回顾Set,Map与array,object的比较
    //回顾Proxy和Reflect
    let set = new Set();
    let number = {numberLucky: 777};
    set.add(100);
    set.add(true);
    set.add({number: 666});
    set.add(number);
    console.log(set, set.size);
    console.log(set.has({number: 666}), set.has(number), set.has(100));
    for (let setItem of set) {
        console.log("let of ---", setItem);
    }
    for (let key of set.keys()) {
        console.log("keys  ---", key);
    }
    for (let value of set.values()) {
        console.log("values ---", value);
    }
    for (let [key, value] of set.entries()) {
        console.log("entries ---", key, value);
    }
    set.forEach(setItem => console.log("foreach ---", setItem));
    //unique
    let setAno = new Set([100, 99, 1, 99, 98, 96, 2, 6, 7, 9, 20, 56, 7, 2]);
    console.log(setAno, setAno.size);
}

{
    let weakSet = new WeakMap();
}