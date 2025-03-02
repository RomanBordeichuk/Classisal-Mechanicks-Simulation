import Structure from "./Structure.js";
import Point from "./Point.js";
import Rect from "./Rect.js";
import RectBuilder from "./Builders/RectBuilder.js";

export default class Polygon extends Structure{
    private _pointsList: Point[] = [];
    private _rectList: Rect[] = [];
    private _thickness?: number;

    set pointsList(value: Point[]){ this._pointsList }
    get pointsList(){
        //if(this._pointsList.length < 3) throw new Error("Not enough points to create polygon");

        return this._pointsList;
    }

    set thickness(value: number) { this._thickness = value }
    get thickness(){
        if(this._thickness === undefined) throw new Error("_thickness is not defined");
        return this._thickness;
    }

    constructor(){
        super();
    }

    setNewPoint(x: number, y: number){
        this.pointsList.push(new Point(x, y));
    }

    checkPointsList(){
        if(this.pointsList.length < 3) throw new Error("Not enough points to create polygon");
    }

    createRectsList(){
        for(let i = 0; i < this.pointsList.length - 1; i++){
            this._createRect(i, i + 1);
        }

        this._createRect(this.pointsList.length - 1, 0);
    }

    private _createRect(n1: number, n2: number){
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

    private _calculateRectParams(p1: Point, p2: Point): [number, number, number, number]{
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;

        let x = (p1.x + p2.x) / 2;
        let y = (p1.y + p2.y) / 2;
        let width = (dx ** 2 + dy ** 2) ** 0.5;
        let angle = Math.atan(dy / dx) * 180 / Math.PI; 

        return [x, y, width, angle];
    }
}