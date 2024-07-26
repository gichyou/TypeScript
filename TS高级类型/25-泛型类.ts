// class GenericNumber<NumType>{
//     defaultValue: NumType
//     add: (x: NumType, y: NumType) => NumType

//     constructor(value: NumType){
//         this.defaultValue = value
//     }
// }

// const myNum = new GenericNumber(10)
// myNum.defaultValue = 100


// myNum.defaultValue = 10

class GenericNumber<NumType>{
    defaultValue: NumType
    add: (x: NumType, y: NumType) => NumType
}

const myNum = new GenericNumber<number>()
myNum.defaultValue = 100