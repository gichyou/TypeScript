let numbers: number[] = [1, 3, 5]

let b: boolean[] = [true, false]

//联合类型
//添加小括号，表示：首先是数组，然后这个数组中能够出现number 或 string 类型的元素
let arr: (number|string)[] = [1,3,5,'hello']

//不加小括号：表示arr1既可以是number类型，又可以是string[]
//let arr: number|string[] = [1,3,5,'hello']