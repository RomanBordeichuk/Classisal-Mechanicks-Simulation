import Rect from "../Rect.js";
export default class RectBuilder {
    static get instance() {
        if (RectBuilder._instance === undefined) {
            RectBuilder._instance = new RectBuilder();
        }
        return RectBuilder._instance;
    }
    constructor() { }
    init() {
        this._rect = new Rect();
    }
    setPos(x, y) {
        if (this._rect === undefined)
            throw new Error("_rect is not defined");
        this._rect.x = x;
        this._rect.y = y;
    }
    setWidthHeight(width, height) {
        if (this._rect === undefined)
            throw new Error("_rect is not defined");
        this._rect.width = width;
        this._rect.height = height;
    }
    setAngle(angle) {
        if (this._rect === undefined)
            throw new Error("_rect is not defined");
        this._rect.angle = angle;
    }
    build() {
        if (this._rect === undefined)
            throw new Error("_rect is not defined");
        this._rect.setHtmlObjWidthHeight();
        this._rect.setHtmlObjAngle();
        this._rect.setHtmlObjPos();
        this._rect.buildHtmlObj();
        return this._rect;
    }
}
