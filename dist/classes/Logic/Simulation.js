import TrajectoryCalculator from "./TrajectoryCalculator.js";
import { FPS } from "../../static.js";
export default class Simulation {
    static get instance() {
        if (Simulation._instance === undefined) {
            Simulation._instance = new Simulation();
        }
        return Simulation._instance;
    }
    set objList(value) { this._objList = value; }
    get objList() {
        if (this._objList === undefined)
            throw new Error("_objList is not defined");
        return this._objList;
    }
    constructor() {
        this._pause = true;
        this._running = 0;
        document.addEventListener("keyup", e => {
            switch (e.key) {
                case " ": {
                    if (this._pause == true) {
                        this._pause = false;
                        console.log("run");
                        this._running = setInterval(() => this.iteration(), 1000 / FPS);
                    }
                    else {
                        this._pause = true;
                        console.log("pause");
                        clearInterval(this._running);
                    }
                }
            }
        });
    }
    iteration() {
        console.log("running...");
        TrajectoryCalculator.calculateTrajectory(this.objList);
    }
}
//# sourceMappingURL=Simulation.js.map