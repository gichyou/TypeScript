function id<Type>(value: Type): Type {
    return value
}

//1.以number类型调用泛型函数
const num = id<number>(10)

//2.以string类型调用泛型函数
const str = id<string>('hello')