import React from 'react'
import './portfolio.css';
import ProjectGrid from './ProjectGrid'
import Filter from './filter';

const projects = [
	{
		id:0,
		title:"Personal Portfolio & Blog",
		description:"",
		code:"https://github.com/metruzanca/zbest.dev",
		live:"http://zbest.dev/",
		tags:['javascript', 'reactjs', 'expressjs']
	},
	{
		id:4,
		title:"Personal Finance Tools",
		description:"",
		code:"",
		live:"http://zbest.dev/financetracker",
		tags:['javascript', 'reactjs', 'expressjs']
	},
	{
		id:1,
		title:"Discord Bot",
		description:"placeholder placeholder placeholder placeholder placeholder",
		code:"",
		live:"",
		tags: ['nodejs', 'discordjs']
	},
	{
		id:2,
		title:"Process Manager",
		description:"placeholder placeholder placeholder placeholder placeholder",
		code:"",
		live:"",
		tags: ['javascript', 'nodejs', 'express']
	},
	{
		id:3,
		title:"placeholder",
		description:"placeholder placeholder placeholder placeholder placeholder",
		code:"",
		live:"",
		tags: ['javascript']
	}
]

const categories = {
	Languages: [
		{
			name: 'nodejs',
			icon: ''
		},
		{
			name: 'javascript',
			icon: ''
		},
		// {
		// 	name: 'java',
		// 	icon: ''
		// },
		// {
		// 	name: 'python',
		// 	icon: ''
		// }
	],
	Frameworks: [
		{
			name: 'reactjs',
			icon: ''
		},
		{
			name: 'discordjs',
			icon: ''
		},
		{
			name: 'expressjs',
			icon: ''
		}
	]
}

const portfolio = () => {	
	
	return (
		<>
		<h1>Portfolio</h1>
		<div className="portfolio">
		<Filter categories={categories}/>
		<ProjectGrid projects={projects}/>
		</div>
		</>
		)
	}
	export default portfolio;