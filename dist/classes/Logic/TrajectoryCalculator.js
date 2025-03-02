import AfterCollDirectionCalculator from "./AfterCollDirectionCalculator.js";
import CollisionCalculator from "./CollisionCalculator.js";
import ObjectReplacer from "./ObjectReplacer.js";
export default class TrajectoryCalculator {
    static calculateTrajectory(objList) {
        let firstCollision = CollisionCalculator.calculateFirstCollisionOrUnderfined(objList, 0);
        if (firstCollision === undefined) {
            ObjectReplacer.updateObjData(objList, 1);
            ObjectReplacer.replace(objList);
            return;
        }
        collisionCalcRecursion();
        function collisionCalcRecursion() {
            ObjectReplacer.updateObjData(objList, firstCollision.t);
            AfterCollDirectionCalculator.calculateDirection(firstCollision);
            ObjectReplacer.updateObjData(objList, 1e-10);
            let oldT = firstCollision.t;
            firstCollision = CollisionCalculator.
                calculateFirstCollisionOrUnderfined(objList, firstCollision.t);
            if (firstCollision === undefined) {
                return;
            }
            collisionCalcRecursion();
            ObjectReplacer.updateObjData(objList, 1 - oldT);
            ObjectReplacer.replace(objList);
        }
    }
}
//# sourceMappingURL=TrajectoryCalculator.js.map