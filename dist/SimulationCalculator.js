export default class SimulationCalculator {
    static set objList(value) { SimulationCalculator._objList = value; }
    static get objList() {
        if (SimulationCalculator._objList === undefined)
            throw new Error("_objList is not defined");
        return SimulationCalculator._objList;
    }
    static calculateTrajectory() {
    }
}
