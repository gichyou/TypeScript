class Animals{
    private readonly name: string
    constructor(name: string){
        this.name = name
    }
    move (){console.log(this.name + '在活动');
    }
}

class Dogs extends Animals{
    bark(){console.log('汪');
    }
}

const d  = new Dogs('旺财')
d.bark()
d.move()
