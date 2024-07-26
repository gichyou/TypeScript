interface ILength{length: number}

function id<Type extends ILength>(value: Type): Type{
    value.length
    return value
}

id(['1','2'])
id(10)