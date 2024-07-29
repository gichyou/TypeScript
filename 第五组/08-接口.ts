interface IPerson{
    name:string
    age: number
    sayHi(): void
}

let person: IPerson = {
    name: 'zhangsan',
    age: 18,
    sayHi() {
        console.log('nihao');
    },
}

type IPerson2 ={
    name:string
    age: number
    sayHi(): void
}

// console.log(person.sayHi());
