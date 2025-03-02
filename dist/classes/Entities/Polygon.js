import Structure from "./Structure.js";
import Point from "./Point.js";
import RectBuilder from "./Builders/RectBuilder.js";
export default class Polygon extends Structure {
    set pointsList(value) { this._pointsList; }
    get pointsList() {
        //if(this._pointsList.length < 3) throw new Error("Not enough points to create polygon");
        return this._pointsList;
    }
    set thickness(value) { this._thickness = value; }
    get thickness() {
        if (this._thickness === undefined)
            throw new Error("_thickness is not defined");
        return this._thickness;
    }
    constructor() {
        super();
        this._pointsList = [];
        this._rectList = [];
    }
    setNewPoint(x, y) {
        this.pointsList.push(new Point(x, y));
    }
    checkPointsList() {
        if (this.pointsList.length < 3)
            throw new Error("Not enough points to create polygon");
    }
    createRectsList() {
        for (let i = 0; i < this.pointsList.length - 1; i++) {
            this._createRect(i, i + 1);
        }
        this._createRect(this.pointsList.length - 1, 0);
    }
    _createRect(n1, n2) {
        let point1 = this.pointsList[n1];
        let point2 = this.pointsList[n2];
        let [x, y, width, angle] = this._calculateRectParams(point1, point2);
        let rectBuilder = RectBuilder.instance;
        rectBuilder.init();
        rectBuilder.setPos(x, y);
        rectBuilder.setWidthHeight(width, this.thickness);
        rectBuilder.setVelocity(0, 0);
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
//# sourceMappingURL=Polygon.js.map