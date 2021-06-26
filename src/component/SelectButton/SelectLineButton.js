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
    const lines = ["all", "top", "jungle", "mid", "bottom", "support"]
    const lineList = lines.map(
        line => 
        <LineButton 
            line={line}
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
