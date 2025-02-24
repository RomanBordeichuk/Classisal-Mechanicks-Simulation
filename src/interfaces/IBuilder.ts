import Structure from "../classes/Structure.js";

export default interface IBuilder{
    init(): void
    build(): Structure
}