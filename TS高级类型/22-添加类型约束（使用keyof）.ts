function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return console.log(obj[key]);
}

let person = { name: 'jack', age: 18 }
getProp(person,'name')
getProp(person,'age')

// getProp(18,"toString")