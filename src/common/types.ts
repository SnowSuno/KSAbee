import {PositionType, TierType} from "./enums";

export interface UserType {
    name: string;
    sid: string
}

export interface AccountType {
    user: UserType;
    nickname: string;
    summoner_id: number;
    profile_image: string;
    level: number;
    position: PositionType;
    tier: TierType;
    league_points: number;
    wins: number;
    losses: number;
}

interface AccountRequestBase {
    password: string;
}

export interface AccountCreate extends AccountRequestBase {
    nickname: string;
    position: string;
}
export interface AccountUpdate extends AccountRequestBase {
    nickname?: string;
    position?: string;
}
export interface AccountDelete extends AccountRequestBase {

}

export interface ResponseMessageType {
    detail: string;
    code: string;
}