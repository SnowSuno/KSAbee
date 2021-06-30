import React from 'react'
import './SelectLineButton.css'

const LineButton = ({line, active, onClick}) => {
    return (
        <div className={`line ${active ? 'active' : ''}`} onClick={onClick}>
            {line}
        </div>
    )
}

export default function SelectLineButton({selectLine, onSelectLine}) {
    const lines = ["All", "top", "jungle", "mid", "bottom", "support"]
    const fonrtPosition = (line) => {
        if (line === "All") return "전체";
        if (line === "top") return "탑";    
        if (line === "jungle")  return "정글";    
        if (line === "mid") return "미드";    
        if (line === "bottom")  return "원딜";
        if (line === "support") return "서폿";        
    }

    const lineList = lines.map(
        line => 
        <LineButton 
            line={fonrtPosition(line)}
            active={selectLine===line}
            onClick={() => onSelectLine(line)}
            key={line}
        />
    )

    return (
        <div className="lineButtons">
            {lineList}
        </div>
    )
}
