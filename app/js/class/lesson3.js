// {
//     let regExp = new RegExp("xyz", "g");
//     let regExpTwo = new RegExp(/xyz/g);
//     let regExpTest = "XYZ";
//     let regExpThree = new RegExp(/xyz/g, "ig");
//     console.log(regExp.test(regExpTest), regExpTwo.test(regExpTest), regExpThree.flags);
// }
//g是匹配全局,不从匹配值后的第一个字符开始匹配
//y是匹配跟随,必须从匹配值后的第一个字符开始匹配
// {
//     let b_string = "bbb_bb_b";
//     let regExpG = /b+/g;
//     let regExpY = /b+/y;
//     console.log("one", regExpG.exec(b_string), regExpY.exec(b_string));
//     console.log("two", regExpG.exec(b_string), regExpY.exec(b_string));
//     console.log(regExpG.sticky, regExpY.sticky);
// }
//u是匹配多字节字符
// {
//     console.log(/^\uD328/.test('\uD328\uD323'));
//     console.log(/^\uD328/u.test('\uD328\uD323'));
//     console.log(/\u{61}/.test('a'));
//     console.log(/\u{61}/u.test('a'));
//     console.log(`\u{2B22E}`);
//     let s = '𫈮';
//     console.log(/^.$/.test(s));
//     console.log(/^.$/u.test(s));
//     console.log(/𫈮{2}/.test('𫈮𫈮'));
//     console.log(/𫈮{2}/u.test('𫈮𫈮'));
// }
{
    let regOne = new RegExp("xyz", "g");
    let regTwo = new RegExp(/xyz/g);
    let regThree = new RegExp(/xyz/g, "ig");
    let regTest = "XYZ";
    console.log(regOne.test(regTest), regTwo.test(regTest), regThree.test(regTest));
    console.log(regThree.flags);
}
//g匹配全局,不一定从匹配值后的第一个字符开始匹配
//y匹配邻近字符,一定从匹配值后的第一个字符开始匹配
//sticky检测是否有y匹配邻近字符
{
    let b_string = "bbb_bb_b";
    let regG = /b+/g;
    let regY = /b+/y;
    console.log("one", regG.exec(b_string), regY.exec(b_string));
    console.log("two", regG.exec(b_string), regY.exec(b_string));
    console.log(regG.sticky, regY.sticky);
}
//u匹配多字节字符
{
    console.log(/^\uD3BD/.test('\uD3BD\uD332'));
    console.log(/^\uD3BD/u.test('\uD3BD\uD332'));
    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
    let s = `\u{2B22E}`;
    console.log(s);
    console.log(/^.$/.test(s));
    console.log(/^.$/u.test(s));
    console.log(/𫈮{2}/.test('𫈮𫈮'));
    console.log(/𫈮{2}/u.test('𫈮𫈮'));
}
