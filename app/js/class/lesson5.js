{
    //二进制
    console.log(0b111101111);
    //八进制
    console.log(0o767);
    //十六进制
    console.log(0x20bb7);
    //是否有穷尽
    console.log('10', Number.isFinite(10));
    console.log('0x20bb7', Number.isFinite(0x20bb7));
    //是否是NaN,只认NaN
    console.log('0', Number.isNaN(0));
    console.log('10', Number.isNaN(10));
    console.log('NaN', Number.isNaN(NaN));
    console.log('666', Number.isNaN('666'));
}

{
    console.log('0', Number.isInteger(0));
    console.log('-10', Number.isInteger(-10));
    console.log('25.0', Number.isInteger(25.0));
    console.log('25.1', Number.isInteger(25.1));
    console.log('string 25.0', Number.isInteger('25.0'));
}
{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log('999', Number.isSafeInteger(999), '-10', Number.isSafeInteger(-10));
    console.log('NaN', Number.isSafeInteger(NaN));
    console.log('25.0', Number.isSafeInteger(25.0), '50', Number.isSafeInteger('50'));
    console.log('foo', Number.isSafeInteger('foo'));
}
{
    console.log('4.1', Math.ceil(4.1));
    console.log('4.8', Math.floor(4.8));
    console.log('4.1', Math.trunc(4.1));
    console.log('4.8', Math.trunc(4.8));
    console.log('5.5', Math.trunc('5.5'));
    console.log('foo', Math.trunc('foo'));
}
{
    console.log('平方根', Math.sqrt(4));
    console.log('立方根', Math.cbrt(27));
    console.log('81', Math.sqrt(81));
    console.log('81 3', Math.cbrt(81));
}