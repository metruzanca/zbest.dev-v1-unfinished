import React from 'react'
import './portfolio.css';
import ProjectGrid from './ProjectGrid'
import Filter from './filter';


const portfolio = () => {

    return (
        <>
        <h1>Portfolio</h1>
        <Filter/>
        <ProjectGrid/>
        </>
    )
}
export default portfolio;