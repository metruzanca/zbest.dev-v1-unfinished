import React from 'react'
import './portfolio.css';
import ProjectGrid from './ProjectGrid'
import Filter from './filter';


const portfolio = () => {

    return (
        <div className="content">
            <h1>Portfolio</h1>
            <ProjectGrid/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Filter/>
        </div>
    )
}
export default portfolio;