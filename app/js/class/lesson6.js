//array
{
    let arr = Array.of(3, 5, 9, 11, 77);
    console.log(arr);
    console.log(`arr: ${arr}`);
    console.log(arr.length);
    let arrAno = Array.of();
    console.log(arrAno);
}

{
    let querySelector = document.querySelectorAll("p");
    let queryArr = Array.from(querySelector);
    queryArr.forEach(function each(item, index) {
        console.log(item.textContent);
    });
    console.log(Array.from([2, 4, 8], function map(item, index) {
        return item * 4;
    }));
}

{
    let arr = [99, "a", undefined, false];
    // console.log(arr.fill(7));
    console.log(arr.fill(6, 1, 3));
}

{
    let arr = [999, "aa", undefined, true];
    for (let key of arr.keys()) {
        console.log(key);
    }
    for (let value of arr.values()) {
        console.log(value);
    }
    for (let [key, value] of arr.entries()) {
        console.log(`${key}:${value}`);
    }
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 99, 100, 1000, 22];
    console.log(arr.find(function finder(item, index) {
        return item > 22;
    }));
    console.log(arr.findIndex(function findIndex(item, index) {
        return item > 22;
    }));
}

{
    let arr = [99, 'aa', undefined, false, 'world comeTrue'];
    console.log(arr.includes('aa'));
    console.log(arr.includes(99));
    console.log(arr.includes(true));
}