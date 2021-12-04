import React from 'react'

interface GradeButtonProps {
  handleGrade: (input: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function GradeButton({handleGrade}: GradeButtonProps) {

  return (
    <div>
      <select
        defaultValue={19}
        onChange={handleGrade}
      >
        <option value="19">19학번</option>
        <option value="20">20학번</option>
        <option value="21">21학번</option>
        <option value="22">22학번</option>
      </select>
    </div>
  )
}
