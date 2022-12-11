import { HeroDto } from "./HeroDto";
import { SpaceAreaDto } from "./SpaceAreaDto";

export class GameWorldLocalAreaDto {
    id!: number;
    name!: string;
    othersInAreas!: HeroDto[];
    thisHero!: HeroDto;
    localSpaceAreas!: SpaceAreaDto[];
}

