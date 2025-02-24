import Obj from "./Obj.js";
export default class Builder {
    get obj() { return this._obj; }
    constructor() {
        this._obj = new Obj();
    }
    setPos(x, y) {
        this._obj.setPos(x, y);
    }
    build() {
        return this._obj;
    }
}
