import Polygon from "../Polygon.js";
export default class PolygonBuilder {
    static get instance() {
        if (PolygonBuilder._instance === undefined) {
            PolygonBuilder._instance = new PolygonBuilder();
        }
        return PolygonBuilder._instance;
    }
    set polygon(value) { this._polygon = value; }
    get polygon() {
        if (this._polygon === undefined)
            throw new Error("_polygon is not defined");
        return this._polygon;
    }
    constructor() { }
    init() {
        this.polygon = new Polygon();
    }
    setNewPoint(x, y) {
        this.polygon.setNewPoint(x, y);
    }
    setThickness(t) {
        this.polygon.thickness = t;
    }
    setVelocity(speed, direction) {
        this.polygon.speed = speed;
        this.polygon.direction = direction;
    }
    pin() {
        this.polygon.pinned = true;
    }
    build() {
        this.polygon.checkPointsList();
        this.polygon.createRectsList();
        this.polygon.checkVelocity();
        return this.polygon;
    }
}
//# sourceMappingURL=PolygonBuilder.js.map