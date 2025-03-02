import Structure from "../Entities/Structure.js";
import Obj from "../Entities/Obj.js";
import Polygon from "../Entities/Polygon.js";

export default class ObjectReplacer{
    static updateObjData(objList: Structure[], t: number){
        objList.forEach(obj => {
            if(obj.pinned == false){
                if(obj instanceof Obj){
                    let dx = obj.speed * t * Math.cos(obj.direction * Math.PI / 180);
                    let dy = obj.speed * t * Math.sin(obj.direction * Math.PI / 180);
    
                    obj.x += dx;
                    obj.y += dy;
                }
                else if(obj instanceof Polygon){
                    throw new Error("Not implemented");
                }
                else new Error("obj has unexpected type");
            }
        });
    }
    
    static replace(objList: Structure[]){
        objList.forEach(obj => {
            if(obj.pinned == false){
                if(obj instanceof Obj) obj.updateHtmlObj();
            }
        });
    }
}