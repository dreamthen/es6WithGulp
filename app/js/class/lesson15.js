{
    let arr = ['hello', 'world', 'come', 'true'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start: [3, 2, 9, 6],
        end: [99, 98, 100],
        [Symbol.iterator]() {
            let self = this;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            let index = 0;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };
    for (let objItem of obj) {
        console.log(objItem);
    }
}

{
    let object = ["yinwk", "zhaoy"];
    for (let value of object) {
        console.log("value:" + value);
    }
}