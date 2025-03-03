import Structure from "./Structure.js";
import Point from "./Point.js";
import Rect from "./Rect.js";
import { rectBuilder } from "../static.js";

export default class Polygon extends Structure{
    private _pointsList: Point[] = [];
    private _rectList: Rect[] = [];

    private _thickness?: number;

    set thickness(value: number) { this._thickness = value }

    constructor(){
        super();
    }

    someNewMethod(){
        let a = 1;
        let b = 2;
        return a + b;
    }

    setNewPoint(x: number, y: number){
        this._pointsList?.push(new Point(x, y));
    }

    createRectsList(){
        if(this._thickness === undefined) throw new Error("_thickness is not defined");
        if(this._pointsList.length < 3) throw new Error("Not enough points to create polygon");

        for(let i = 0; i < this._pointsList.length - 1; i++){
            this._createRect(i, i + 1);
        }

        this._createRect(this._pointsList.length - 1, 0);
    }

    private _createRect(n1: number, n2: number){
        let point1 = this._pointsList[n1];
        let point2 = this._pointsList[n2];

        let [x, y, width, angle] = this._calculateRectParams(point1, point2);

        rectBuilder.init();
        rectBuilder.setPos(x, y);
        rectBuilder.setWidthHeight(width, this._thickness!);
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