//函数扩展
{
    function test(name, age = 26) {
        console.log(name, age);
    }

    test("yinwk", 25);
}

{
    let x = "test";

    function testOne(x, y = x, publicPath) {
        console.log(x, y, publicPath);
    }

    testOne("kill", "zzz", "publicPath");

    function testTwo(c, y = x) {
        console.log(c, y);
    }

    testTwo("kill");
}

{
    function testThree(...args) {
        console.log(args);
        for (let argsItem of args) {
            console.log(argsItem);
        }
    }

    testThree([1, 4, 5, 6, 7, 22, 0]);
}

{
    console.log(...[1, 2, 3, 5, 8, 10, 23]);
    console.log('a', ...[1, 2, 3, 5, 8, 10, 23]);
}

{
    let func = v => v * 3;
    console.log(func(4));
    let funcStrict = () => 5;
    console.log(funcStrict());
}

{
    function testFunc(x) {
        return x * 9;
    }

    function testTest(number) {
        return testFunc(number);
    }

    console.log(testTest(25));
}

//闭包
{
    function closure(n) {
        for (var i = 0; i < n; i++) {
            setTimeout(function timer() {
                console.log(i);
            }, i * 1000);
        }
    }

    closure(8);
}

{
    function closureOne(n) {
        for (let i = 0; i < n; i++) {
            setTimeout(function timer() {
                console.log(i);
            }, i * 1000);
        }
    }

    closureOne(8);

    function closureTwo(n) {
        for (var i = 0; i < n; i++) {
            setTimeout((function timer(i) {
                return function () {
                    console.log(i);
                }
            })(i), i * 1000);
        }
    }

    closureTwo(8);

    function closureThree(n) {
        for (var i = 0; i < n; i++) {
            setTimeout(function timer(i) {
                console.log(i);
            }.bind(this, i), i * 1000);
        }
    }

    closureThree(8);
}
