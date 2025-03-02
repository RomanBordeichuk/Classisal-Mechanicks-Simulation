import Structure from "./Entities/Structure.js";
import Point from "./Entities/Point.js";
import { rectBuilder } from "../static.js";
export default class Polygon extends Structure {
    set thickness(value) { this._thickness = value; }
    constructor() {
        super();
        this._pointsList = [];
        this._rectList = [];
    }
    setNewPoint(x, y) {
        var _a;
        (_a = this._pointsList) === null || _a === void 0 ? void 0 : _a.push(new Point(x, y));
    }
    createRectsList() {
        if (this._thickness === undefined)
            throw new Error("_thickness is not defined");
        if (this._pointsList.length < 3)
            throw new Error("Not enough points to create polygon");
        for (let i = 0; i < this._pointsList.length - 1; i++) {
            this._createRect(i, i + 1);
        }
        this._createRect(this._pointsList.length - 1, 0);
    }
    _createRect(n1, n2) {
        let point1 = this._pointsList[n1];
        let point2 = this._pointsList[n2];
        let [x, y, width, angle] = this._calculateRectParams(point1, point2);
        rectBuilder.init();
        rectBuilder.setPos(x, y);
        rectBuilder.setWidthHeight(width, this._thickness);
        rectBuilder.setAngle(angle);
        this._rectList.push(rectBuilder.build());
    }
    _calculateRectParams(p1, p2) {
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        let x = (p1.x + p2.x) / 2;
        let y = (p1.y + p2.y) / 2;
        let width = (dx ** 2 + dy ** 2) ** 0.5;
        let angle = Math.atan(dy / dx) * 180 / Math.PI;
        return [x, y, width, angle];
    }
}
