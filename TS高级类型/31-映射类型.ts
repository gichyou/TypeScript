type PropKeys = 'x'|'y'|'z'
type Type1 = {x: number; y: number; z: number}

type Type2 = {[Key in PropKeys]: number}

// interface Type3 {
//     [Key in PropKeys]: number
// }