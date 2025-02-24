import { htmlObjList } from "../static.js";
import Structure from "./Structure.js";

export default abstract class Obj extends Structure{
    private _x?: number;
    private _y?: number;

    private _htmlObj: HTMLDivElement; 

    set x(value: number) { this._x = value }
    get x() {
        if(this._x === undefined) throw new Error("_x is not defined");
        return this._x;
    }

    set y(value: number) { this._y = value }
    get y() {
        if(this._y === undefined) throw new Error("_y is not defined");
        return this._y;
    }

    set htmlObj(value: HTMLDivElement) { this._htmlObj = value }
    get htmlObj() { 
        if(this._htmlObj === undefined) throw new Error("_htmlObj is not defined");
        return this._htmlObj;
    }

    constructor(){
        super();
        
        this._htmlObj = document.createElement("div");
        this._htmlObj.classList.add("obj");
    }

    setHtmlObjPos(){
        this._htmlObj.style.left = this._x + "px";
        this._htmlObj.style.top = this._y + "px";
    }

    buildHtmlObj(){
        htmlObjList?.append(this._htmlObj);
    }
}