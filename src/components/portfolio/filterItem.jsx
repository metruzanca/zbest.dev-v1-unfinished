import React from 'react';

/**
* Might be better to use a ul>li
*/


class FilterItem extends React.Component {
    constructor(props){
        super();
        this.state = {item:props.isFiltered};
    }

    render(){

        return (
            <>
            {/* <p 
                className="filter-item"
                isfiltered={this.props.isFiltered ? 'true' : undefined}
                onClick={(e) => this.props.handleClick(e, this.props.item)}
            >
                {this.props.item}
            </p>
            {' '} */}
                <div /*className={this.props.isFiltered ? 'added' : ''}*/>
                <span 
                    className={`filter-item ${this.props.isFiltered ? 'added' : ''}`}
                    onClick={(e) => this.props.handleClick(e, this.props.item)}
                    >
                    {this.props.item}
                </span>
            </div>
            {' '}
            </>
        );
    }
}

export default FilterItem;