// interface Point2D{
//     x: number
//     y: number
// }

// interface Point3D extends Point2D{
//     z: number
// }

// let p3: Point3D = {
//     x:1,
//     y:2,
//     z:3
// }



interface Person {
    name: string
    say(): number
}

interface Contact{
    phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
    name: 'jack',
    phone: '18144556677',
    say() {
        return 1
    },
}