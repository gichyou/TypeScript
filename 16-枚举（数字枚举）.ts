// enum Direction{Up,Down,Left,Right}

//成员设置初始值
enum Direction{
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

function changeDirection(direction: Direction){
    console.log(direction);   
}

changeDirection(Direction.Up)