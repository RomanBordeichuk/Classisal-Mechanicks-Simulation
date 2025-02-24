import IBuilder from "../../interfaces/IBuilder.js";
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

    private constructor(){}

    init(){
        this._polygon = new Polygon();
    }

    setNewPoint(x: number, y: number){
        if(this._polygon === undefined) throw new Error("_polygon is not defined");
        this._polygon.setNewPoint(x, y);
    }

    setThickness(t: number){
        if(this._polygon === undefined) throw new Error("_polygon is not defined");
        this._polygon.thickness = t;
    }

    build(){
        if(this._polygon === undefined) throw new Error("_polygon is not defined");
        this._polygon.createRectsList();

        return this._polygon;
    }
}