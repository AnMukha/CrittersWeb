export class HeroDto {
    id!: number;
    gameUserId!: string;
    x!: number;
    y!: number;
    direction!: Direction;
    energy!: number;
    cellsInBuffer!: number;
    cellsBufferSize!: number;
    maxEnergy!: number;
    fieldSize!: number;
    cellsLimitToPut!: number;
}

export enum Direction {
    top = 0,
    right = 1,
    bottom = 2,
    left = 3
}