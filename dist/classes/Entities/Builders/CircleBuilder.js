import Circle from "../Circle.js";
export default class CircleBuilder {
    static get instance() {
        if (CircleBuilder._instance === undefined) {
            CircleBuilder._instance = new CircleBuilder();
        }
        return CircleBuilder._instance;
    }
    set circle(value) { this._circle = value; }
    get circle() {
        if (this._circle === undefined)
            throw new Error("_circle is not defined");
        return this._circle;
    }
    constructor() { }
    init() {
        this.circle = new Circle();
    }
    setPos(x, y) {
        this.circle.x = x;
        this.circle.y = y;
    }
    setDiameter(d) {
        this.circle.r = d / 2;
    }
    setVelocity(speed, direction) {
        this.circle.speed = speed;
        this.circle.direction = direction;
    }
    pin() {
        this.circle.pinned = true;
    }
    setDencity(density) {
        this.circle.density = density;
    }
    build() {
        this.circle.setCircleR();
        this.circle.setHtmlObjPos();
        this.circle.checkVelocity();
        this.circle.checkDensity();
        this.circle.calcMass();
        this.circle.buildHtmlObj();
        return this.circle;
    }
}
//# sourceMappingURL=CircleBuilder.js.map