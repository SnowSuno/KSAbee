import {AccountType} from "./types";

export enum CompareKey {
  TIER = "lp_key",
  LEVEL = "level",
  WINRATE = "win_rate",
}

export interface SortProps {
  key: CompareKey;
  reverse: boolean;
}

export const compare = ({key, reverse}: SortProps) => (a: AccountType, b: AccountType): number => {
  return (a[key] - b[key]) * (reverse ? 1 : -1);
}
