{
    let a = `\u0061`;
    let ng = '\u20BB7';
    let og = `\u{20BB7}`;
    console.log(a);
    console.log(ng);
    console.log(og);
}
{
    let a = '𠮷';
    // let a = 'a';
    console.log(a.length);
    console.log('a1', a.charAt(0));
    console.log('a2', a.charAt(1));
    console.log('u1', a.charCodeAt(0));
    console.log('u2', a.charCodeAt(1));
    console.log('es6 a1', a.codePointAt(0));
    console.log('es6 a2', a.codePointAt(1));
    console.log('es6 u1', a.codePointAt(0).toString(16));
    console.log('es6 u2', a.codePointAt(1).toString(16));
}
{
    let a = '𠮷a';
    console.log(a.length);
    console.log(a.charAt(0));
    console.log(a.charAt(1));
    console.log(a.charAt(2));
    console.log(a.charCodeAt(0));
    console.log(a.charCodeAt(1));
    console.log(a.charCodeAt(2));
    console.log(a.codePointAt(0));
    console.log(a.codePointAt(1));
    console.log(a.codePointAt(2));
    console.log(a.codePointAt(0).toString(16));
    console.log(a.codePointAt(1).toString(16));
    console.log(a.codePointAt(2));
}
{
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}
{
    let string = `\u{20bb7}abcd\u{2b22e}`;
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
    for (let code of string) {
        console.log(code);
    }
}
{
    let str = "string";
    console.log(str.includes("i"));
    console.log(str.includes("c"));
    console.log(str.startsWith("str"));
    console.log(str.endsWith("ng"));
}

{
    let number = "abc";
    console.log(number.repeat(2));
    console.log("1".padStart(2, "0"));
    console.log("1".padEnd(2, "0"));
}

{
    let name = "list",
        sayHello = "hello world";
    console.log(`I'm ${name},${sayHello}`);
}

{
    let user = {
        name: "list",
        sayHello: "hello world"
    };
    console.log(abc`I'm ${user.name},${user.sayHello}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return v1 + s[1] + s[0] + v2;
    }
}

{
    console.log(String.raw`Hi\n4`);
    console.log(`Hi\n3`);
}