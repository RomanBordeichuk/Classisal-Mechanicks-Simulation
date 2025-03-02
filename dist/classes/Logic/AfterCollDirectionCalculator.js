import Circle from "../Entities/Circle.js";
export default class AfterCollDirectionCalculator {
    static calculateDirection(collision) {
        if (!(collision.obj1 instanceof Circle))
            throw new Error("Incorrect object type");
        if (!(collision.obj2 instanceof Circle))
            throw new Error("Incorrect object type");
        let x1 = collision.obj1.x;
        let y1 = collision.obj1.y;
        let x2 = collision.obj2.x;
        let y2 = collision.obj2.y;
        let collFlatAngle = Math.atan((y2 - y1) / (x2 - x1)) * 180 / Math.PI;
        this._calcMirroredAngle(collFlatAngle, collision.obj1);
        this._calcMirroredAngle(collFlatAngle, collision.obj2);
    }
    static _calcMirroredAngle(collFlatAngle, obj) {
        if (obj.pinned == true)
            return;
        let angleDelta = obj.direction - collFlatAngle;
        if (angleDelta < -90)
            angleDelta += 180;
        else if (angleDelta > 90)
            angleDelta -= 180;
        let vx = obj.speed * Math.cos(angleDelta * Math.PI / 180);
        let vy = obj.speed * Math.sin(angleDelta * Math.PI / 180);
        vx = -vx;
        let newDirection = Math.atan(vy / vx) * 180 / Math.PI;
        if (vx < 0) {
            if (vy > 0)
                newDirection = 180 + newDirection;
            else
                newDirection = 180 - newDirection;
        }
        obj.direction = newDirection;
    }
}
//# sourceMappingURL=AfterCollDirectionCalculator.js.map