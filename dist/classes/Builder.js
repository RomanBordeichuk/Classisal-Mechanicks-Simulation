import Obj from "./Obj.js";
import { htmlObjList } from "../static.js";
export default class Builder {
    get obj() {
        if (this._obj === undefined)
            throw new Error("_obj is not defined");
        return this._obj;
    }
    constructor() {
        this._obj = new Obj();
    }
    setPos(x, y) {
        this._obj.x = x;
        this._obj.y = y;
    }
    build() {
        htmlObjList.append(this._obj.htmlObj);
        return this._obj;
    }
}
