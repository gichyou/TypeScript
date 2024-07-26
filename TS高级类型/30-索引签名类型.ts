interface AnyObject {
    [key: string]: number
}

let obj: AnyObject = {
    a: 1,
    1: 2
}


const arr: Array<number> = [1,2,3,4]
arr.forEach