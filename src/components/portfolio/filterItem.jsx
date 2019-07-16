import React from 'react';

/**
 * Might be better to use a ul>li
 */

const FilterItem = (props) =>{
    return (
        <>
            <span className="filter-item" key={props.index}>{props.item}</span> {' '}
        </>
    );
}

export default FilterItem;