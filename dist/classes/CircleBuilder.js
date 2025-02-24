import Circle from "./Circle.js";
export default class CicleBuilder {
    constructor() { }
    init() {
        this._circle = new Circle();
    }
    setPos(x, y) {
        if (this._circle === undefined)
            throw new Error("_circle is not defined");
        this._circle.x = x;
        this._circle.y = y;
    }
    setR(r) {
        if (this._circle === undefined)
            throw new Error("_circle is not defined");
        this._circle.r = r;
    }
    build() {
        if (this._circle === undefined)
            throw new Error("_circle is not defined");
        this._circle.setCircleR();
        this._circle.setHtmlObjPos();
        this._circle.buildHtmlObj();
        return this._circle;
    }
}
