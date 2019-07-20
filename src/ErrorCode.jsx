import React from 'react';
import NavBar from './components/navbar/navbar';
import { Link } from 'react-router-dom';

const ErrorCode = (props) =>{

	const linkStyle = {
		textDecoration:"none",
		fontFamily:`
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			"Fira Sans",
			"Droid Sans",
			"Helvetica Neue",
			sans-serif`,
	}

	return(
		<>
			<NavBar page="nav-blog"/>
			<div style={{ height:"100vh",backgroundColor:"rgba(0,0,0,.5)", width:"100%"}}>
				<div style={{height:"100%", display:"grid",justifyItems:"center", alignItems:"center",}}>
					<div>
						<h1 style={{color:"#DF054F"}}> {props.code} </h1>
						<p>{props.message}</p>
						<br/>
						<Link to="/" style={linkStyle}> Home Page</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ErrorCode;