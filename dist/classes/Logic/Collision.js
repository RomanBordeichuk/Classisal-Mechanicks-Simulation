export default class Collision {
    get obj1() {
        if (this._obj1 === undefined)
            throw new Error("_obj1 is not defined");
        return this._obj1;
    }
    get obj2() {
        if (this._obj2 === undefined)
            throw new Error("_obj2 is not defined");
        return this._obj2;
    }
    get t() {
        if (this._t === undefined)
            throw new Error("_t is not defined");
        return this._t;
    }
    constructor(obj1, obj2, t) {
        this._obj1 = obj1;
        this._obj2 = obj2;
        this._t = t;
    }
}
//# sourceMappingURL=Collision.js.map