import React from 'react';
import FilterItem from './filterItem';

const Filter = (props) => {
    
    const categories = props.categories;
    
    return (
        <div className="filter">
            <h4>Filters</h4>
            <FilterItem 
                className="filter-item active"
                item="Show all"
                arg
            />

            {Object.keys(categories).map( key => {
                return (
                    <>
                        <h4>{key}</h4>
                        {categories[key].map((category, index) =>
                            <>
                                <FilterItem
                                    key={index}
                                    className="filter-item"
                                    item={category.name}
                                />
                                <br />
                            </>
                        )}
                    </>
                )
            })}
        </div>
    )
}

export default Filter;