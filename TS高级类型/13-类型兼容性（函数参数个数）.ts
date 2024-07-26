type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1 = (a) => {console.log(a);
}
let f2: F2 = (a,b) => {console.log(a,b);
}

f2 = f1
f1 = f2

f1(1)
