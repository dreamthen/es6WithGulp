//数组解构赋值
{
    let a, b;
    [a, b] = [24, 8];
    console.log(a, b);
}
{
    let a, b, reset;
    [a, b, reset] = [24, 8];
    console.log(a, b, reset);
}
{
    let a, b, c;
    [a, b, c = 23] = [24, 8];
    console.log(a, b, c);
}
{
    let a, b, reset;
    [a, b, ...reset] = [24, 8, 23, 6, 3, 1, 11];
    console.log(a, b, reset);
}
//对象解构赋值
{
    let {a, b} = {a: 23, b: 6};
    console.log(a, b);
}
//应用场景
//更换变量
{
    let [a, b] = [31, 8];
    [a, b] = [b, a];
    console.log(a, b);
}
//函数返回
{
    let a, b;

    function f() {
        return [24, 8];
    }

    [a, b] = f();
    console.log(a, b);
}
//任意取数组元素
{
    let a, b, c;

    function f() {
        return [24, 8, 23, 3, 11, 1, 6];
    }

    [a, b, , , c] = f();
    console.log(a, b, c);
}
{
    let a, b, c;

    function f() {
        return [24, 8, 23, 6, 11, 1, 3];
    }

    [a, , , b, ...c] = f();
    console.log(a, b, c);
}
//任意取对象属性值
{
    let o = {name: "yinwk", age: 24};
    let {name: n, age: a} = o;
    console.log(n, a);
}
{
    let metaData = {
        id: 24,
        desc: {
            id: 8,
            description: "I'm yinwk",
            descEnum: [2, 5, 6]
        }
    };
    let {id: metaId, desc: {id: descId, description: descContent, descEnum: enumable}} = metaData;
    console.log(metaId, descId, descContent, enumable);
}