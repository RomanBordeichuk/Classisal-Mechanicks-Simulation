import IBuilder from "../../../interfaces/IBuilder.js";
import Polygon from "../Polygon.js";

export default class PolygonBuilder implements IBuilder{
    private static _instance: PolygonBuilder;
    private _polygon?: Polygon;

    static get instance(){
        if(PolygonBuilder._instance === undefined){
            PolygonBuilder._instance = new PolygonBuilder();
        }

        return PolygonBuilder._instance;
    }

    set polygon(value: Polygon){ this._polygon = value }
    get polygon(){
        if(this._polygon === undefined) throw new Error("_polygon is not defined");
        return this._polygon;
    }

    private constructor(){}

    init(){
        this.polygon = new Polygon();
    }

    setNewPoint(x: number, y: number){
        this.polygon.setNewPoint(x, y);
    }

    setThickness(t: number){
        this.polygon.thickness = t;
    }

    setVelocity(speed: number, direction: number) {
        this.polygon.speed = speed;
        this.polygon.direction = direction;
    }

    pin(){
        this.polygon.pinned = true;
    }

    build(){
        this.polygon.checkPointsList();
        this.polygon.createRectsList();
        this.polygon.checkVelocity();
        return this.polygon;
    }
}