import { FPS, SimSpeed } from "../../static.js";

export default abstract class Structure{
    private _speed?: number;
    private _direction?: number;
    private _pinned: boolean = false;
    private _density?: number;
    private _m?: number;

    set speed(value: number) { 
        this._speed = value * SimSpeed * (30 / FPS); 
    }
    get speed() {
        if(this._speed === undefined) throw new Error("_speed is not defined");
        return this._speed;
    }

    set direction(value: number) { this._direction = value }
    get direction() {
        if(this._direction === undefined) throw new Error("_direction is not defined");
        return this._direction;
    }
    
    set pinned(value: boolean) { this._pinned = value }
    get pinned() {
        return this._pinned;
    }

    set density(value: number) { this._density = value }
    get density(){
        if(this._density === undefined) throw new Error("_density is not defined");
        return this._density;
    }

    set m(value: number) { this._m = value }
    get m(){
        if(this._m === undefined) throw new Error("_m is not defined");
        return this._m;
    }

    constructor(){}

    checkVelocity(){
        if(this.pinned == true) return;
        
        this.speed;
        this.direction;
    }

    checkDensity(){
        if(this.pinned == true) return;
        this.density;
    }
}