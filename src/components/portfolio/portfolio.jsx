import React from 'react'
import './portfolio.css';
import ProjectGrid from './ProjectGrid'
import Filter from './filter';

const projects = [
{
	id:0,
	title:"Personal Finance Tools",
	description:"",
	repository:"",
	live:"http://zbest.dev/financetracker"
},
{
	id:1,
	title:"Discorc Bot",
	description:"placeholder placeholder placeholder placeholder placeholder",
	repository:"",
	live:""
},
{
	id:2,
	title:"Process Manager",
	description:"placeholder placeholder placeholder placeholder placeholder",
	repository:"",
	live:""
},
{
	id:3,
	title:"placeholder",
	description:"placeholder placeholder placeholder placeholder placeholder",
	repository:"",
	live:""
}
]

const portfolio = () => {

    return (
        <>
            <h1>Portfolio</h1>
            <div className="portfolio">
                <Filter/>
                <ProjectGrid projects={projects}/>
            </div>
        </>
    )
}
export default portfolio;