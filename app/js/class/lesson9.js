{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1, a2);
    console.log(a1 === a2);
    let a3 = Symbol.for("a3");
    let a4 = Symbol.for("a3");
    console.log(a3, a4);
    console.log(a3 === a4);
}

{
    let number = Symbol.for("666");
    let obj = {
        name: "yinwk",
        age: 25,
        [number]: "999"
    };
    for (let [key, value] of Object.entries(obj)) {
        console.log("let of", key, value);
    }
    Object.getOwnPropertySymbols(obj).forEach(function ownSymbols(ownSymbolItem, ownSymbolIndex) {
        console.log("ownProperty", ownSymbolItem, obj[ownSymbolItem]);
    });
    Reflect.ownKeys(obj).forEach(function ownKeys(ownKeyItem, ownKeyIndex) {
        console.log("ownKeys", ownKeyItem, obj[ownKeyItem]);
    });
}