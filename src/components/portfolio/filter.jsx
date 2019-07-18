import React from 'react';
import FilterItem from './filterItem';

/**
 * Todo: Based on props foreach generate filteritems
 */

// Temp

class Filter extends React.Component{
    constructor(){
        super();
        this.state = {
            isFiltered: {
                'nodejs': false,
                'javascript': false,
                'java': false,
                'react': false,
            }
        }
    }

    handleClick = (e, id) =>{
        this.setState((state, props) =>{
            state.isFiltered[id] = !this.state.isFiltered[id];
            return state;
        });
    }
    render(){
        const items = Object.keys(this.state.isFiltered)
        return (
            <div className="filter">
                {items.map((item, index) => (
                    <FilterItem
                        key = {index}
                        item = {item}
                        handleClick = {(e, id) => this.handleClick(e, id)}
                        isFiltered={this.state.isFiltered[item]}
                    />
                ))}
            </div>
        );
    }
}

export default Filter;