class Animals{
    type: string
    constructor(type: string){
        this.type = type
    }
    move (){console.log(this.type + '在活动');
    }
}

class Dogs extends Animals{
    bark(){console.log('汪');
    }
}

const d  = new Dogs('旺财')
d.bark()
d.move()
