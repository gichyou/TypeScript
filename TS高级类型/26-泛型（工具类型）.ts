interface Props {
    id: string
    children: number[]
}

type PartialProps = Partial<Props>

let p1: Props = {
    id: 'jack',
    children: [1,2,3]
}

let p2: PartialProps = {
    id: 'rose'
}