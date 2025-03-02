import Rect from "../Rect.js";
export default class RectBuilder {
    static get instance() {
        if (RectBuilder._instance === undefined) {
            RectBuilder._instance = new RectBuilder();
        }
        return RectBuilder._instance;
    }
    set rect(value) { this._rect = value; }
    get rect() {
        if (this._rect === undefined)
            throw new Error("_rect is not defined");
        return this._rect;
    }
    constructor() { }
    init() {
        this.rect = new Rect();
    }
    setPos(x, y) {
        this.rect.x = x;
        this.rect.y = y;
    }
    setWidthHeight(width, height) {
        this.rect.width = width;
        this.rect.height = height;
    }
    setAngle(angle) {
        this.rect.angle = angle;
    }
    setVelocity(speed, direction) {
        this.rect.speed = speed;
        this.rect.direction = direction;
    }
    pin() {
        this.rect.pinned = true;
    }
    build() {
        this.rect.setHtmlObjWidthHeight();
        this.rect.setHtmlObjAngle();
        this.rect.setHtmlObjPos();
        this.rect.checkVelocity();
        this.rect.buildHtmlObj();
        return this.rect;
    }
}
//# sourceMappingURL=RectBuilder.js.map