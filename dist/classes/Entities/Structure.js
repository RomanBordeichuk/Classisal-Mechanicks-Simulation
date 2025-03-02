import { FPS, SimSpeed } from "../../static.js";
export default class Structure {
    set speed(value) {
        this._speed = value * SimSpeed * (30 / FPS);
    }
    get speed() {
        if (this._speed === undefined)
            throw new Error("_speed is not defined");
        return this._speed;
    }
    set direction(value) { this._direction = value; }
    get direction() {
        if (this._direction === undefined)
            throw new Error("_direction is not defined");
        return this._direction;
    }
    set pinned(value) { this._pinned = value; }
    get pinned() {
        return this._pinned;
    }
    set density(value) { this._density = value; }
    get density() {
        if (this._density === undefined)
            throw new Error("_density is not defined");
        return this._density;
    }
    set m(value) { this._m = value; }
    get m() {
        if (this._m === undefined)
            throw new Error("_m is not defined");
        return this._m;
    }
    constructor() {
        this._pinned = false;
    }
    checkVelocity() {
        if (this.pinned == true)
            return;
        this.speed;
        this.direction;
    }
    checkDensity() {
        if (this.pinned == true)
            return;
        this.density;
    }
}
//# sourceMappingURL=Structure.js.map