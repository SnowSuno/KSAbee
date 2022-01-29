import {AccountType} from "./types";

export const Grade = {
  "": "학번",
  "19": "19학번",
  "20": "20학번",
  "21": "21학번"
}
// interface FilterOption {
//   key: string;
//   label: string;
// }

// const avaibleGrades = [19, 20, 21];
//
// const Grades: FilterOption[] = [{key: "", label: "학번"}]
//   .concat(avaibleGrades.map(grade => (
//     {key: grade.toString(), label: `${grade}학번`}
//   )));
//
// const Positions: FilterOption[] = [
//   {key: "", label: "포지션"},
//   {key: "top", label: "탑"},
//   {key: "jg", label: "정글"},
//   {key: "mid", label: "미드"},
//   {key: "bot", label: "바텀"},
//   {key: "sup", label: "서폿"},
// ];

export const Position = {
  "": "포지션",
  "top": "탑",
  "jg": "정글",
  "mid": "미드",
  "bot": "원딜",
  "sup": "서폿",
}


export interface FilterProps {
  search: string;
  grade: keyof typeof Grade;
  position: keyof typeof Position;
}

export const filter = ({search, grade, position}: FilterProps) => (account: AccountType) => (
  [account.nickname, account.user.name].some(
    keysting => keysting.toLowerCase().includes(search.toLowerCase()))
  && (grade ? account.user.sid.startsWith(grade) : true)
  && (position ? account.position === position : true)
);

