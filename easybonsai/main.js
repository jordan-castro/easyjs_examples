// Compiled by EasyJS version 0.1.9
function expect(method, error_msg) {
    () => {
        {
            try {
                return method();
            } catch (e) {
                return error_msg;
            }
        }
    };
};
class Line {
    constructor() {
        this.start = null;
        this.end = null;
        this.m = null;
        this.c = null;
        this.is_vertical = false;
    } get_y(x) {
        if (!this.is_vertical) {
            return (this.m * x + this.c);
        };
    } get_x(y) {
        if (this.is_vertical) {
            return this.c;
        } else if (this.m != 0) {
            return ((y - this.c) / this.m);
        };
    } set_end_points(start, end) {
        this.start = start;
        this.end = end;
        if (this.start[0] == this.end[0]) {
            this.is_vertical = true;
            this.m = null;
            this.c = this.start[0];
        } else {
            this.m = (this.start[1] - this.end[1] / this.start[0] - this.end[0]);
            this.c = this.start[1] - this.m * this.start[0];
        };
    } set_gradient(m, point) {
        this.m = m;
        this.c = (point[1] - (m * point[0]));
    } get_theta() {
        if (this.is_vertical) {
            return Math.PI / 2;
        } else {
            return Math.atan(this.m);
        };
    }
}
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } mag() {
        return Math.sqrt();
    } add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    } mul(other) {
        return new Vector(this.x * other.x, this.y * other.y);
    } normalize() {
        let m = this.mag();
        this.x /= m;
        this.y /= m;
    }
}
const VERSION = '1.0.0';
const DESC = 'Easy Bonsai procedurally generates ASCII art trees in your terminal.';
console.log(DESC);
;
console.log(VERSION);
;
let vec1 = new Vector(0, 0);
let vec2 = new Vector(10, 10);
let vec3 = vec1.add(vec2);
console.log(vec1);
;
console.log(vec2);
;
console.log(vec3);
;
