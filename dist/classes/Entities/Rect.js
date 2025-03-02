import Obj from "./Obj.js";
export default class Rect extends Obj {
    set width(value) { this._width = value; }
    get width() {
        if (this._width === undefined)
            throw new Error("_width is not defined");
        return this._width;
    }
    set height(value) { this._height = value; }
    get height() {
        if (this._height === undefined)
            throw new Error("_width is not defined");
        return this._height;
    }
    set angle(value) { this._angle = value; }
    get angle() {
        if (this._angle === undefined)
            throw new Error("_width is not defined");
        return this._angle;
    }
    constructor() {
        super();
        super.htmlObj.classList.add("rect");
    }
    setHtmlObjPos() {
        super.htmlObj.style.left = super.x - this.width / 2 + "px";
        super.htmlObj.style.top = super.y - this.height / 2 + "px";
    }
    setHtmlObjWidthHeight() {
        super.htmlObj.style.width = this._width + "px";
        super.htmlObj.style.height = this._height + "px";
    }
    setHtmlObjAngle() {
        super.htmlObj.style.transform = "rotate(" + this._angle + "deg)";
    }
}
//# sourceMappingURL=Rect.js.map