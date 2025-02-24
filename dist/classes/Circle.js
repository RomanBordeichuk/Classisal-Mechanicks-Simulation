import Obj from "./Obj.js";
export default class Circle extends Obj {
    set r(value) { this._r = value; }
    get r() {
        if (this._r === undefined)
            throw new Error("_r is not defined");
        return this._r;
    }
    constructor() {
        super();
        super.htmlObj.classList.add("circle");
    }
    setHtmlObjPos() {
        if (this._r === undefined)
            throw new Error("_r is not defined");
        super.htmlObj.style.left = super.x - this._r / 2 + "px";
        super.htmlObj.style.top = super.y - this._r / 2 + "px";
    }
    setCircleR() {
        super.htmlObj.style.width = this._r + "px";
        super.htmlObj.style.height = this._r + "px";
    }
}
