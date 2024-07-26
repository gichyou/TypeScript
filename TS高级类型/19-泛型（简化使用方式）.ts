function id<Type>(value: Type): Type {
    console.log(value.length);
    return value
}

//1.以number类型调用泛型函数
const num = id<number>(10)

//2.以string类型调用泛型函数
const str = id<string>('hello')



let num1 = id(10)


let str1 = id('hello')
