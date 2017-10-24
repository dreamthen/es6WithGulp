{
    function test(name, age = 24, sayHello) {
        console.log("name:" + name, "age:" + age, "sayHello:" + sayHello);
    }

    test("yinwk", undefined, "hello world");
}

{
    let x = "test";

    function testOne(x, y = x) {
        console.log(x, y);
    }

    testOne("kill");

    function testTwo(c, y = x) {
        console.log(c, y);
    }

    testTwo("kill");
}

{
    //...可以把函数参数转化为数组,也可以把数组转化为字符
    function testTest(...args) {
        for (let argItem of args) {
            console.log(argItem);
        }
    }

    testTest(1, 4, 6, 10);
    console.log('a', ...[1, 4, 6, 10]);
}

{
    //箭头函数
    let arrows = v => v * 6;
    let count = arrows(5);
    console.log(count);

    //箭头函数Ano
    let arrowsAno = () => 8;
    let arrowsCount = arrowsAno();
    console.log(arrowsCount);

    let arrowsThird = v => {
        return v * 10;
    };
    console.log(arrowsThird(667));
}

{
    //伪函数
    function testProduct(c) {
        console.log(c);
    }

    function testMyProduct(c) {
        return testProduct(c + " world come true~");
    }

    testMyProduct("yinwk");
}