import Obj from "../Entities/Obj.js";
import Polygon from "../Entities/Polygon.js";
import { FPS, SimSpeed } from "../../static.js";
export default class TrajectoryCalculator {
    static set objList(value) { TrajectoryCalculator._objList = value; }
    static get objList() {
        if (TrajectoryCalculator._objList === undefined)
            throw new Error("_objList is not defined");
        return TrajectoryCalculator._objList;
    }
    static calculateTrajectory() {
        let objList = TrajectoryCalculator.objList;
        objList.forEach(obj => {
            if (obj instanceof Obj) {
                let obj1 = obj;
                let dx = obj1.speed * SimSpeed * (30 / FPS) * Math.cos(obj1.direction * Math.PI / 180);
                let dy = obj1.speed * SimSpeed * (30 / FPS) * Math.sin(obj1.direction * Math.PI / 180);
                obj1.x += dx;
                obj1.y += dy;
                obj1.updateHtmlObj();
            }
            else if (obj instanceof Polygon) {
                throw new Error("Not implemented");
            }
            else
                new Error("obj has unexpected type");
        });
    }
}
