import React from 'react'

interface GradeButtonProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function GradeButton({handleGrade}: GradeButtonProps) {

  return (
    <select
      defaultValue={'all'}
      onChange={handleGrade}
    >
      <option value="all">학번</option>
      <option value="19">19학번</option>
      <option value="20">20학번</option>
      <option value="21">21학번</option>
      <option value="22">22학번</option>
    </select>
  )
}
