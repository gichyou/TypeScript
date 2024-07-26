type Props = { a: number; b: string; c: boolean }



type TypeA = Props['a']

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

type PartialProps = MyPartial<Props>