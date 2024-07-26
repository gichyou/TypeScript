class Person {
    readonly age: number = 18

    constructor(age: number){
        this.age  = age
    }

    // setAge(){
    //     this.age = 20
    // }
}

// interface IPerson{
//     readonly name: string

// }



let obj: {readonly name: string} = {
    name: 'jack'
}

obj.name = 'rose'