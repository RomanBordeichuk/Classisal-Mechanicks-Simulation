import Builder from "./classes/Builder.js";
export default class CicleBuilder extends Builder {
    constructor() {
        super();
        this._circle = super.obj;
    }
    setR(r) {
        this._circle.r = r;
    }
}
