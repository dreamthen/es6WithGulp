class Test{
    constructor(){
        this.name = "yinwk";
        this.world = "world";
    }
}

let nameMine = new Test();

document.body.innerHTML = nameMine.name + nameMine.world;