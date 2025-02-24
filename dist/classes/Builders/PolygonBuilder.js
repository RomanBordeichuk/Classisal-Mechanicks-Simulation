import Polygon from "../Polygon.js";
export default class PolygonBuilder {
    static get instance() {
        if (PolygonBuilder._instance === undefined) {
            PolygonBuilder._instance = new PolygonBuilder();
        }
        return PolygonBuilder._instance;
    }
    constructor() { }
    init() {
        this._polygon = new Polygon();
    }
    setNewPoint(x, y) {
        if (this._polygon === undefined)
            throw new Error("_polygon is not defined");
        this._polygon.setNewPoint(x, y);
    }
    setThickness(t) {
        if (this._polygon === undefined)
            throw new Error("_polygon is not defined");
        this._polygon.thickness = t;
    }
    build() {
        if (this._polygon === undefined)
            throw new Error("_polygon is not defined");
        this._polygon.createRectsList();
        return this._polygon;
    }
}
