import { htmlObjList } from "../static.js";
import Structure from "./Structure.js";
export default class Obj extends Structure {
    set x(value) { this._x = value; }
    get x() {
        if (this._x === undefined)
            throw new Error("_x is not defined");
        return this._x;
    }
    set y(value) { this._y = value; }
    get y() {
        if (this._y === undefined)
            throw new Error("_y is not defined");
        return this._y;
    }
    set htmlObj(value) { this._htmlObj = value; }
    get htmlObj() {
        if (this._htmlObj === undefined)
            throw new Error("_htmlObj is not defined");
        return this._htmlObj;
    }
    constructor() {
        super();
        this._htmlObj = document.createElement("div");
        this._htmlObj.classList.add("obj");
    }
    setHtmlObjPos() {
        this._htmlObj.style.left = this._x + "px";
        this._htmlObj.style.top = this._y + "px";
    }
    buildHtmlObj() {
        htmlObjList === null || htmlObjList === void 0 ? void 0 : htmlObjList.append(this._htmlObj);
    }
}
