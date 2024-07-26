var songs = ['what do you mean', 'company'];
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function changeDirection(direction) {
    console.log(direction);
}
changeDirection(Direction.Up);
