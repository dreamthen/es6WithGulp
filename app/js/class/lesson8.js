//对象扩展
{
    //es5
    let o = "o";
    let k = "k";
    let okEs5 = {
        o: o,
        k: k
    };
    let okEs6 = {
        o,
        k
    };
    console.log("es5:", okEs5, "es6:", okEs6);
}

{
    //es5 function
    let o = "o";
    let k = "k";
    let okFuncEs5 = {
        sayOk: function (man) {
            console.log(man + ",ok~");
        }
    };
    okFuncEs5.sayOk("yinwk");
    //es6 function
    let okFuncEs6 = {
        sayOk(man) {
            console.log(man + ",ok~~");
        }
    };
    okFuncEs6.sayOk("zhaoy");
}

{
    //is
    console.log(Object.is("abc", "abc"), "abc" === "abc");
    console.log(Object.is([], []), [] === []);
    //assign
    console.log(Object.assign({name: "yinwk"}, {name: "ywk", age: 25, sayHello: "hello,es6"}));
    //entries
    let object = {
        name: "duck",
        hobby: "eat"
    };
    for (let [index, value] of Object.entries(object)) {
        console.log(`${index}:${value}`);
    }
    //keys
    for (let keys of Object.keys(object)) {
        console.log(keys);
    }
    //values
    for (let values of Object.values(object)) {
        console.log(values);
    }
}

{
    //扩展运算符
    let object = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    };
    // let {a: aa, b: bb, ...c} = object;
    let {a: aa, b: bb} = object;
    console.log(aa, bb);
}