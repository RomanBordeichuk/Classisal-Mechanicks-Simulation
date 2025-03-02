import IBuilder from "../../../interfaces/IBuilder.js";
import Rect from "../Rect.js";

export default class RectBuilder implements IBuilder{
    private static _instance: RectBuilder; 
    private _rect?: Rect;

    static get instance(){
        if(RectBuilder._instance === undefined){
            RectBuilder._instance = new RectBuilder();
        }

        return RectBuilder._instance;
    }

    set rect(value: Rect) { this._rect = value }
    get rect() {
        if(this._rect === undefined) throw new Error("_rect is not defined");
        return this._rect;
    }

    private constructor(){}

    init(){
        this.rect = new Rect();
    }

    setPos(x: number, y: number){
        this.rect.x = x;
        this.rect.y = y;
    }

    setWidthHeight(width: number, height: number){
        this.rect.width = width;
        this.rect.height = height;
    }

    setAngle(angle: number){
        this.rect.angle = angle;
    }

    setVelocity(speed: number, direction: number){
        this.rect.speed = speed;
        this.rect.direction = direction;
    }

    pin(){
        this.rect.pinned = true;
    }

    build(){   
        this.rect.setHtmlObjWidthHeight();
        this.rect.setHtmlObjAngle();
        this.rect.setHtmlObjPos();
        this.rect.checkVelocity();
        this.rect.buildHtmlObj();
        return this.rect;
    }

}