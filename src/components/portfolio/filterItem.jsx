import React from 'react';

class FilterItem extends React.Component {
    constructor(props){
        super();
        this.state = {item:props.isFiltered};
    }

    filterSelection = (filter, button) => {
        const projects = document.getElementsByClassName('project');

        const btns = document.getElementsByClassName('filter-item');

        for (const btn of btns) {
            btn.classList.remove('active');
        }
        button.classList.toggle('active', true);

        if (!filter) {            
            for (const project of projects){
                project.classList.add("show")
            }
            return;
        }

        for (const project of projects) {
            project.classList.remove("show");
            if (project.classList.contains(filter)) project.classList.add("show");
        }
    }

    render(){

        return (
            <span 
                className={this.props.className}
                onClick={(event) => this.filterSelection(this.props.arg ? '':event.target.innerHTML, event.target)}
            >{this.props.item}
            </span>
        );
    }
}

export default FilterItem;