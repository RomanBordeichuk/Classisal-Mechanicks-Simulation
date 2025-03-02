import Structure from "../Entities/Structure.js";
import TrajectoryCalculator from "./TrajectoryCalculator.js";
import { FPS } from "../../static.js";

export default class Simulation{
    private static _instance: Simulation;

    private _objList?: Structure[];
    private _pause: boolean = true;
    private _running: number = 0;

    static get instance(){
        if(Simulation._instance === undefined){
            Simulation._instance = new Simulation();
        }

        return Simulation._instance;
    }

    set objList(value: Structure[]) { this._objList = value }
    get objList(){
        if(this._objList === undefined) throw new Error("_objList is not defined");
        return this._objList;
    }

    private constructor(){
        document.addEventListener("keyup", e => {
            switch(e.key){
                case " ":{
                    if(this._pause == true){
                        this._pause = false;
                        console.log("run");
                        this._running = setInterval(() => this.iteration(), 1000 / FPS);
                    }
                    else{
                        this._pause = true;
                        console.log("pause");
                        clearInterval(this._running);
                    }
                }
            }
        });
    }

    iteration(){
        console.log("running...");
        TrajectoryCalculator.calculateTrajectory(this.objList);
    }
}