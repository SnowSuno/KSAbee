import React from "react";

interface PositionButtonProps {
  handlePosition: (input: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PositionButton = ({handlePosition}: PositionButtonProps) => {
  return (
    <select
      defaultValue={'all'}
      onChange={handlePosition}
    >
      <option value="all">포지션</option>
      <option value="top">탑</option>
      <option value="jg">정글</option>
      <option value="mid">미드</option>
      <option value="bot">원딜</option>
      <option value="sup">서폿</option>
    </select>
  )
}

export default PositionButton