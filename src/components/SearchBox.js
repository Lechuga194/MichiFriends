import React from 'react'
import 'tachyons'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="tc pa2 ">
            <input className="pa3 ba br4 b--green bg-lightest-green" 
            type="search" 
            placeholder="Busca al michi"
            onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;