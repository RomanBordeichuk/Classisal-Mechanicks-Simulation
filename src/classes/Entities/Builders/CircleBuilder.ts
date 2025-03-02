import IBuilder from "../../../interfaces/IBuilder.js";
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

    set circle(value: Circle) { this._circle = value }
    get circle(){
        if(this._circle === undefined) throw new Error("_circle is not defined");

        return this._circle;
    }

    private constructor(){}

    init(){
        this.circle = new Circle();
    }

    setPos(x: number, y: number){
        this.circle.x = x;
        this.circle.y = y;
    }

    setDiameter(d: number){
        this.circle.r = d / 2;
    }

    setVelocity(speed: number, direction: number) {
        this.circle.speed = speed;
        this.circle.direction = direction;
    }

    pin(){
        this.circle.pinned = true;
    }

    setDencity(density: number){
        this.circle.density = density;
    }

    build(){
        this.circle.setCircleR();
        this.circle.setHtmlObjPos();

        this.circle.checkVelocity();
        this.circle.checkDensity();
        this.circle.calcMass();

        this.circle.buildHtmlObj();
        return this.circle;
    }
}