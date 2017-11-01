{
    //类的定义
    class Gary {
        constructor(hobby = 'eat burger') {
            this.hobby = hobby;
        }
    }

    let gary = new Gary('play computer game');
    console.log(gary, gary.hobby);
}

{
    //类的继承
    class Gary {
        constructor(hobby = 'eat burger') {
            this.hobby = hobby;
        }
    }

    class LittleGary extends Gary {
        constructor(hobby = 'sleep in bed') {
            super(hobby);
            this.name = 'littleYin';
        }
    }

    let littleGary = new LittleGary('sing songs');
    console.log(littleGary, littleGary.hobby, littleGary.name);
}

{
    //getter and setter
    class Gary {
        constructor(hobby = 'eat burger') {
            this.hobby = hobby;
        }

        get Have() {
            return 'Gary ' + this.hobby;
        }

        set Have(value) {
            this.hobby = value;
        }
    }

    let gary = new Gary('sleep in bed');
    console.log(gary, gary.hobby, gary.Have);
    gary.Have = 'play computer games';
    console.log(gary, gary.hobby, gary.Have);
}

{
    //静态方法
    class Gary {
        constructor(hobby = 'eat burger') {
            this.hobby = hobby;
        }

        static tell(tell = 'tell me a truth') {
            console.log(tell);
        }
    }

    Gary.tell('I will tell you a truth: you are foolish');
}

{
    //静态属性
    class Gary {
        constructor(hobby = 'eat burger') {
            this.hobby = hobby;
        }
    }

    Gary.sunshine = 'sunshineGaryGuy';
    console.log(Gary.sunshine);
}