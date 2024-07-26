type Props1 = {x: number; y: number}

//错误演示：因为.d.ts文件中，不能出现可执行代码（代码实现）
// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// console.log(add(1, 5));