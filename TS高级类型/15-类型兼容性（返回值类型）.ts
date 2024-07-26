type F5 = () => string
type F6 = () => number

let f5: F5 = () =>{return 'hello'}
let f6: F6

f6 = f5

type F7 =() => {name: string}
type F8 = () => {name: string; age: number}

let f7: F7 = () => {return {name: 'jack'}}
let f8: F8 = () => {return {name: 'rose', age: 18}}

f7 = f8
f8 = f7