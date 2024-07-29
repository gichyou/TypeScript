// enum Direction{Up,Down,Left,Right}

//成员设置初始值
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