import IBuilder from "../../interfaces/IBuilder.js";
import Circle from "../Circle.js";

export default class CircleBuilder implements IBuilder{
    private static _instance: CircleBuilder;

    private _circle?: Circle;

    static get instance(){
        if(CircleBuilder._instance === undefined){
            CircleBuilder._instance = new CircleBuilder();
        }

        return CircleBuilder._instance;
    }

    private constructor(){}

    init(){
        this._circle = new Circle();
    }

    setPos(x: number, y: number){
        if(this._circle === undefined) throw new Error("_circle is not defined");

        this._circle.x = x;
        this._circle.y = y;
    }

    setR(r: number){
        if(this._circle === undefined) throw new Error("_circle is not defined");
        this._circle.r = r;
    }

    build(){
        if(this._circle === undefined) throw new Error("_circle is not defined");

        this._circle.setCircleR();
        this._circle.setHtmlObjPos();
        this._circle.buildHtmlObj();
        return this._circle;
    }
}