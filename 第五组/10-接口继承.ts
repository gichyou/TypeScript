interface Point2D { x: number; y: number }

//使用继承，实现复用
interface Point3D extends Point2D { z: number }

let p3: Point3D = {
    x: 20,
    y: 30,
    z: 50
}