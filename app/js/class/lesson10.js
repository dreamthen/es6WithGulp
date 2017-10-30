{
    //Set
    let set = new Set();
    let integer = '66666';
    set.add(100);
    set.add(["world", true]);
    set.add({name: "Gary"});
    set.add(integer);
    console.log(set, set.size);
    for (let setItem of set) {
        console.log("let if ---", setItem);
    }
    for (let key of set.keys()) {
        console.log("keys ---", key);
    }
    for (let value of set.values()) {
        console.log("values ---", value);
    }
    for (let [key, value] of set.entries()) {
        console.log("entries ---", key, value);
    }
    set.forEach(setItem => console.log("foreach ---", setItem));
    console.log(set.has(integer));
    set.delete(integer);
    console.log(set);
    set.clear();
    console.log(set);
    //unique
    let setAno = new Set([1, 4, 5, 7, 10, 55, 5, 8, 10, 22, 7]);
    console.log(setAno);
}

{
    //WeakSet
    //1.no size property
    //2.no clear function
    //3.no 遍历
    let weakSet = new WeakSet();
    let o = {number: 1000};
    weakSet.add(o);
    console.log(weakSet, weakSet.size);
    // for (let weakSetItem of weakSet) {
    //     console.log(weakSetItem);
    // }
    console.log(weakSet.has(o));
    // weakSet.delete(o);
    // console.log(weakSet);
    // weakSet.clear();
    // console.log(weakSet);
}

{
    //Map
    let map = new Map();
    map.set('a', [123]);
    map.set(true, "1000");
    map.set({sayHello: true}, "sayHello");
    console.log(map, map.size);
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
        console.log("entries ---", `${JSON.stringify(key)}:${value}`);
    }
    map.forEach(mapItem => console.log("foreach ---", mapItem));
    console.log(map.has(true));
    map.delete(true);
    console.log(map);
    map.clear();
    console.log(map);
    let mapAno = new Map([[true, "9000"], [{n: [{newItem: "new"}]}, 888]]);
    console.log(mapAno, mapAno.size);
}

{
    //WeakMap
    //1. no size
    //2. no clear
    //3. no 遍历
    let weakMap = new WeakMap();
    let o = {name: 'a'};
    weakMap.set(o, 'a的三次方');
    console.log(weakMap, weakMap.size);
    console.log(weakMap.has(o));
    // for (let weakMapItem of weakMap) {
    //     console.log(weakMapItem);
    // }
    // weakMap.clear();
    // console.log(weakMap);
    weakMap.delete(o);
    console.log(weakMap);
}

{
    //Set与array比较
    let set = new Set();
    let array = [];
    //增
    set.add({t: 66});
    array.push({t: 66});
    console.log("set-array-add", set, array);
    //查
    console.log("set-array-find", set.has({t: 66}), array.find(arrayItem => arrayItem.t));
    //改
    set.forEach(setItem => setItem.t ? setItem.t = 88 : "");
    array.forEach(arrayItem => arrayItem.t ? arrayItem.t = 88 : "");
    console.log("set-array-modify", set, array);
    //删
    set.forEach(setItem => setItem.t ? set.delete(setItem) : "");
    let index = array.findIndex(arrayItem => arrayItem.t ? arrayItem.t : "");
    array.splice(index, 1);
    console.log("set-array-delete", set, array);
}

{
    //Map与array比较
    let map = new Map();
    let array = [];
    //增
    map.set('t', 66);
    array.push({t: 66});
    console.log("map-array-add", map, array);
    //查
    console.log("map-array-find", map.get('t'), map.has('t'), array.find(arrayItem => arrayItem.t));
    //改
    map.set('t', 88);
    array.forEach(arrayItem => arrayItem.t ? arrayItem.t = 88 : '');
    console.log("map-array-modify", map, array);
    //删
    map.delete('t');
    let index = array.findIndex(arrayItem => arrayItem.t ? arrayItem.t : '');
    array.splice(index, 1);
    console.log("map-array-delete", map, array);
}

{
    //Set,Map和Object比较
    let setDemo = {t: 66};
    let set = new Set();
    let map = new Map();
    let o = {};
    //增
    set.add(setDemo);
    map.set('t', 66);
    o['t'] = 66;
    console.log('set-map-object-add', set, map, o);
    //查
    console.log('set-map-object-find', set.has(setDemo), map.has('t'), 't' in o);
    //改
    setDemo['t'] = 88;
    map.set('t', 88);
    o['t'] = 88;
    console.log('set-map-object-modify', set, map, o);
    //删
    set.delete(setDemo);
    map.delete('t');
    delete o['t'];
    console.log('set-map-object-delete', set, map, o);
}