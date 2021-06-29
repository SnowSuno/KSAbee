import React from 'react'

export default function SearchBar({value, onChange}) {
    return (
        <div>
            <input
                type={"text"}
                size={"25"}
                className={"searchBar"} 
                placeholder={"Search"}
                value = {value}
                onChange={onChange}
            />
        </div>
    )
}
