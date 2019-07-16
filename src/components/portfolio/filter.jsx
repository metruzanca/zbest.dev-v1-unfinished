import React from 'react';
import FilterItem from './filterItem';

/**
 * Todo: Based on props foreach generate filteritems
 */

// Temp
const text = ['nodejs', 'javascript', 'java', 'react'];


const Filter = () => {
    return (
        <>
            {text.map((item, index) => (
                <FilterItem key={index} item={item }/>
            ))}
            <span className="filter-item added">Added Item Test</span>

        </>
    );
}

export default Filter;