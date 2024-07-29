interface A {
    fn: (value: number) => string
}

interface B extends A{
    fn: (value: string) => string
}


type C = A & B