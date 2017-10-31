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
    //WeakSet
    //1. no size property
    //2. no clear function
    //3. no 遍历
    let weakSet = new WeakSet();
    let weakSetDemo = {name: "yinwk"};
    weakSet.add(weakSetDemo);
    console.log(weakSet, weakSet.size);
    // weakSet.clear();
    // for (let weakSetItem of weakSet) {
    //     console.log(weakSetItem);
    // }
    console.log(weakSet.has(weakSetDemo));
    weakSet.delete(weakSetDemo);
    console.log(weakSet);
}

{
    //Map
    let map = new Map();
    let o = {name: 'yinwk'};
    map.set(o, {userName: 'clown laugh at you~'});
    map.set(true, ['map', 'set', 'weakSet', 'weakMap', 999, {home: 'lai'}]);
    console.log(map, map.size, map.get(true), map.get(o));
    console.log(map.has(true), map.has(o));
    for (let mapItem of map) {
        console.log("let of ---", mapItem);
    }
    for (let key of map.keys()) {
        console.log("keys ---", key);
    }
    for (let value of map.values()) {
        console.log("values ---", value);
    }
    for (let [key, value] of map.entries()) {
        console.log("entries ---", key, value);
    }
    map.forEach(mapItem => console.log("foreach ---", mapItem));
    // map.delete(o);
    map.clear();
    console.log(map);
    let mapAno = new Map([[{_id: 37068319920701}, 'ManagerYin'], [true, 'true love'], ['world', 666]]);
    console.log(mapAno, mapAno.size, mapAno.get(true));
}

{
    //WeakMap
    //1. no size property
    //2. no clear function
    //3. no 遍历
    let weakMap = new WeakMap();
    let o = {
        o: '1993-07-01'
    };
    weakMap.set(o, {name: 'GaryYin'});
    console.log(weakMap, weakMap.size, weakMap.get(o));
    // for (let weakMapItem of weakMap) {
    //     console.log(weakMapItem);
    // }
    // weakMap.clear();
    // console.log(weakMap);
    console.log(weakMap.has(o));
    weakMap.delete(o);
    console.log(weakMap);
}

{
    //Set和array比较
    let set = new Set();
    let array = [];
    //增
    set.add({t: 66});
    array.push({t: 66});
    console.log("set-array-add", set, array);
    //查
    console.log(set.has({t: 66}), array.find(arrayItem => arrayItem.t));
}