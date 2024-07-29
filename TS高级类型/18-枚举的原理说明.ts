let songs: string[] = ['what do you mean','company']

enum Direction{
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

function changeDirection(direction: Direction){
    console.log(direction);   
}

changeDirection(Direction.Up)

console.log(Direction);

