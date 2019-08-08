import React from 'react';
import FilterItem from './filterItem';

const Filter = (props) => {
    
    const { languages, frameworks } = props.categories;
    console.log(languages);
    
    return (
        <div className="filter">
            <h4>Filters</h4>
            <FilterItem 
                className="filter-item active"
                item="Show all"
                arg
            />
            <h4>Languages</h4>
            {languages.map((categorie, index) => (
                <FilterItem
                    key = {index}
                    className="filter-item"
                    item={categorie.name}
                />
            ))}
            <h4>Frameworks</h4>
            {frameworks.map((categorie, index) => (
                <FilterItem
                    key={index}
                    className="filter-item"
                    item={categorie.name}
                />
            ))}
        </div>
    )
}

export default Filter;