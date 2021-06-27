import React from 'react'
import './SelectCategory.css'
import SelectLineButton from './SelectButton/SelectLineButton'
import SelectBatchButton from './SelectButton/SelectBatchButton'

export default function SelectCategory({selectLine, selectBatch, onSelectLine, onSelectBatch}) {

    return (
        <div className="SelectCategory">
            <SelectLineButton
                selectLine={selectLine}
                onSelectLine={onSelectLine}
            />
            <SelectBatchButton
                selectBatch={selectBatch}
                onSelectBatch={onSelectBatch}
            />
        </div>
    )
}
