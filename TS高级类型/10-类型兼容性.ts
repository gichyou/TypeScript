let arr = [1, 2, 3]

arr.forEach(item => { })

//两个类的兼容性演示：
class Point {
    x: number
    y: number
}

class Point2D {
    x: number
    y: number
}

const p: Point = new Point2D()