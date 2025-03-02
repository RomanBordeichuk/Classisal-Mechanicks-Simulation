import Structure from "../classes/Entities/Structure.js";

export default interface IBuilder{
    init(): void
    setVelocity(speed: number, direction: number): void
    pin(): void
    build(): Structure
}