import {PositionType, TierType} from "./enums";

export interface UserType {
    name: string;
    sid: string
}

export interface AccountType {
    index: number;
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
    win_rate: number;
    lp_key: number;
}

export interface AccountStateType {
  data: AccountType[];
  loading: boolean;
  error: Error | null;
}

interface AccountRequestBase {
    password: string;
}

export interface AccountCreate extends AccountRequestBase {
    password: string;
    nickname: string;
    position: string;
}
export interface AccountUpdate extends AccountRequestBase {
    password: string;
    nickname?: string;
    position?: string;
}

export interface AccountDelete extends AccountRequestBase {
    password: string;
}

export interface ResponseMessageType {
    detail: string;
    code: string;
}