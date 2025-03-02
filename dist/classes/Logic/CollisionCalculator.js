import Circle from "../Entities/Circle.js";
import Collision from "./Collision.js";
export default class CollisionCalculator {
    static calculateFirstCollisionOrUnderfined(objList, dt) {
        let collisionsList = [];
        objList.forEach(obj1 => {
            if (!(obj1 instanceof Circle))
                throw new Error("Incorrect object type");
            if (obj1.pinned == false) {
                objList.forEach(obj2 => {
                    if (!(obj2 instanceof Circle))
                        throw new Error("Incorrect object type");
                    if (obj1 != obj2) {
                        let a1 = obj1.speed * Math.cos(obj1.direction * Math.PI / 180);
                        let b1 = obj1.speed * Math.sin(obj1.direction * Math.PI / 180);
                        let sumR = obj1.r + obj2.r;
                        let dx = obj1.x - obj2.x;
                        let dy = obj1.y - obj2.y;
                        let a;
                        let b;
                        let c;
                        if (obj2.pinned == true) {
                            a = a1 ** 2 + b1 ** 2;
                            b = 2 * (dx * a1 + dy * b1);
                            c = dx ** 2 + dy ** 2 - sumR ** 2;
                        }
                        else {
                            let a2 = obj2.speed * Math.cos(obj2.direction * Math.PI / 180);
                            let b2 = obj2.speed * Math.sin(obj2.direction * Math.PI / 180);
                            let da = a1 - a2;
                            let db = b1 - b2;
                            a = da ** 2 + db ** 2;
                            b = 2 * (dx * da + dy * db);
                            c = dx ** 2 + dy ** 2 - sumR ** 2;
                        }
                        let D = b ** 2 - 4 * a * c;
                        let t;
                        if (D > 0) {
                            let t1 = (-b - D ** 0.5) / (2 * a);
                            let t2 = (-b + D ** 0.5) / (2 * a);
                            if (t1 < t2)
                                t = t1;
                            else
                                t = t2;
                        }
                        else if (D == 0) {
                            t = -b / (2 * a);
                        }
                        if (t !== undefined && t <= 1 - dt && t > 0) {
                            collisionsList.push(new Collision(obj1, obj2, t));
                        }
                    }
                });
            }
        });
        let firstCollision;
        collisionsList.forEach(coll => {
            if (firstCollision === undefined)
                firstCollision = coll;
            else if (coll.t < firstCollision.t)
                firstCollision = coll;
        });
        return firstCollision;
    }
}
//# sourceMappingURL=CollisionCalculator.js.map