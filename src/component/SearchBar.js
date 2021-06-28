import React from 'react'

export default function SearchBar({value, onChange}) {
    return (
        <div>
            <input
                type={"text"}
                size={"25"}
                className={"input-sm"} 
                placeholder={"Search"}
                value = {value}
                onChange={onChange}
            />
        </div>
    )
}
