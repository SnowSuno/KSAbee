import {PositionType, TierType} from "./enums";
import {UserType, AccountType} from "./types";

import {Expose} from "class-transformer";

export class Profile {
    @Expose() user: UserType;
    @Expose() nickname: string;
    @Expose() summoner_id: number;
    @Expose() profile_image: string;
    @Expose() level: number;
    @Expose() position: PositionType;
    @Expose() tier: TierType;
    @Expose() league_points: number;
    @Expose() wins: number;
    @Expose() losses: number;



}