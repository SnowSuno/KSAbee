import React from 'react'
import './SelectBatchButton.css'

const BatchButton = ({batch}) => {
    return (
        <option value={batch}>
            {batch}
        </option>
    )
}

export default function SelectBatchButton({selectBatch, onSelectBatch}) {
    const batches = ["All", "19", "20", "21"];
    const batchList = batches.map(
        batch =>
        <BatchButton
            batch={batch}
            key={batch}
        />
        )

    return (
        <div className="batchButton">
            <select onChange={(event) => onSelectBatch(event.target.value)}>
                {batchList}
            </select>
        </div>
    )
}
