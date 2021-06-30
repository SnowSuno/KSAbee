import React from 'react'
import './SearchBar.css'

export default function SearchBar({value, onChange}) {
    return (
        <div className="searchBar">
            <input
                type={"text"}
                size={"25"}
                className={"searchInput"} 
                placeholder={"Search"}
                value = {value}
                onChange={onChange}
            />
        </div>
    )
}
