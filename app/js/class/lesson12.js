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
    console.log("set-array-find", set.has({t: 66}), array.find(arrayItem => arrayItem.t));
    //改
    set.forEach(setItem => setItem.t ? setItem.t = 88 : '');
    array.forEach(arrayItem => arrayItem.t ? arrayItem.t = 88 : '');
    console.log("set-array-modify", set, array);
    //删
    set.forEach(setItem => setItem.t ? set.delete(setItem) : '');
    let index = array.findIndex(arrayItem => arrayItem.t);
    array.splice(index, 1);
    console.log(set, array);
}

{
    //Map和array比较
    let map = new Map();
    let array = [];
    //增
    map.set('t', {t: 66});
    array.push({t: 66});
    console.log('map-array-add', map, array);
    //查
    console.log('map-array-find', map.has('t'), map.get('t'), array.find(arrayItem => arrayItem.t));
    //改
    map.set('t', {t: 88});
    array.forEach(arrayItem => arrayItem.t ? arrayItem.t = 88 : '');
    console.log('map-array-modify', map, array);
    //删
    map.delete('t');
    let index = array.findIndex(arrayItem => arrayItem.t);
    array.splice(index, 1);
    console.log('map-array-delete', map, array);
}

{
    //Set,Map和Object比较
    let setDemo = {t: 66};
    let set = new Set();
    let map = new Map();
    let o = {};
    //增
    set.add(setDemo);
    map.set('t', {t: 66});
    o['t'] = 66;
    console.log('set-map-object-add', set, map, o);
    //查
    console.log('set-map-object-find', set.has(setDemo), map.has('t'), map.get('t'), 't' in o);
    //改
    setDemo['t'] = 88;
    map.set('t', {t: 88});
    o['t'] = 88;
    console.log('set-map-object-modify', set, map, o);
    //删
    set.delete(setDemo);
    map.delete('t');
    delete o['t'];
    console.log('set-map-object-delete', set, map, o);
}

{
    //Proxy和Reflect
    let person = {
        birthday: '1993-06-30',
        name: 'yinwk',
        _r: 370683199306300013
    };
    let mirrorProxy = new Proxy(person, {
        get(target, key) {
            if (key === 'birthday')
                return target[key].replace('1993', '1994');
            else
                return target[key];
        },
        set(target, key, value) {
            if (key === 'name')
                return target[key] = value;
            else
                return target[key];
        },
        has(target, key) {
            if (key.indexOf('_') !== -1)
                return target[key];
            else
                return false;

        },
        deleteProperty(target, key) {
            if (key === 'name') {
                delete target[key];
                return true;
            } else
                return target[key];
        },
        ownKeys(target) {
            return Object.keys(target).filter(ownKeyItem => ownKeyItem !== 'name');
        }
    });
    console.log(mirrorProxy);
    console.log(mirrorProxy['birthday']);
    mirrorProxy['name'] = 'zhaoyue';
    console.log(mirrorProxy);
    mirrorProxy['birthday'] = '1994-03-10';
    console.log(mirrorProxy);
    console.log('name' in mirrorProxy, 'birthday' in mirrorProxy, '_r' in mirrorProxy);
    // delete mirrorProxy['birthday'];
    // console.log(mirrorProxy);
    // delete mirrorProxy['_r'];
    // console.log(mirrorProxy);
    // delete mirrorProxy['name'];
    console.log(mirrorProxy);
    console.log(Reflect.ownKeys(mirrorProxy), Object.getOwnPropertyNames(mirrorProxy));
}

{
    //Proxy and Reflect校验
    function personValidate(target, validate) {
        return new Proxy(target, {
            _validate: validate,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let val = this._validate[key];
                    if (!!val(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else
                        throw new Error(`${key}不能设置为${value}`);
                } else
                    throw new Error(`${key}不存在`);
            }
        });
    }

    const personCheck = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        }
    };

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return personValidate(this, personCheck);
        }
    }

    const person = new Person('yinwk', 28);
    console.log(person);
    // person.name = 24;
    // console.log(person);
    person.name = 'CLAY';
    person.age = 24;
    console.log(person);
}