var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + 'Y:' + this.y);
        //while defining custom type object we need to allocate memory
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
