{
    //Proxy和Reflect
    let object = {
        time: '1993-06-30',
        name: 'yinwk',
        _r: 370683199606300130
    };
    let mirrorProxy = new Proxy(object, {
        get(target, key) {
            if (key === 'time') {
                return target[key].replace('1993', '1994');
            } else {
                return target[key];
            }
        },
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        has(target, key) {
            if (key.indexOf('_') > -1) {
                return target[key];
            } else {
                return false;
            }
        },
        deleteProperty(target, key) {
            if (key === 'name') {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        ownKeys(target) {
            return Object.keys(target).filter(ownKeyItem => ownKeyItem !== "time");
        }
    });
    console.log(mirrorProxy.time);
    mirrorProxy.name = "zhaoy";
    mirrorProxy.time = "1994-03-10";
    console.log(mirrorProxy);
    console.log(mirrorProxy.time);
    console.log('_r' in mirrorProxy, 'time' in mirrorProxy);
    // delete mirrorProxy.time;
    // console.log(mirrorProxy);
    // delete mirrorProxy.name;
    // console.log(mirrorProxy);
    // console.log(Object.getOwnPropertyNames(mirrorProxy));
    console.log(Reflect.ownKeys(mirrorProxy));
}

{
    //Reflect
    let object = {
        time: '1993-06-30',
        name: 'yinwk',
        _r: 370683199606300130
    };
    console.log(Reflect.get(object, 'time'));
    Reflect.set(object, 'time', '1994-03-10');
    console.log(object);
    console.log(Reflect.has(object, 'name'));
}

{
    function personValidate(target, validate) {
        return new Proxy(target, {
            _validate: validate,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let val = this._validate[key];
                    if (!!val(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw new Error(`${key}不能设置为${value}`);
                    }
                } else {
                    throw new Error(`${key} is not found.`);
                }
            }
        });
    }

    const personIsValid = {
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
            return personValidate(this, personIsValid);
        }
    }

    const person = new Person('yinwk', 24);
    console.log(person.name, person.age);
    person.name = 'yinwkLoveZhaoyue';
    console.log(person.name, person.age);
    person.age = 23;
    console.log(person.name, person.age);
}