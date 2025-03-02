import Obj from "./Obj.js";

export default class Circle extends Obj{
    private _r?: number;

    set r(value: number) { this._r = value }
    get r(){
        if(this._r === undefined) throw new Error("_r is not defined");
        return this._r;
    }

    constructor(){
        super();
        super.htmlObj.classList.add("circle");
    }

    setHtmlObjPos(){
        super.htmlObj.style.left = super.x - this.r + "px";
        super.htmlObj.style.top = super.y - this.r + "px";
    }

    setCircleR(){
        super.htmlObj.style.width = this.r * 2 + "px";
        super.htmlObj.style.height = this.r * 2 + "px";
    }

    calcMass(){
        if(super.pinned == true) return;
        
        let area = Math.PI * this.r ** 2;
        super.m = super.density * area;
    }
}