import React from 'react'
import './header.css'

const HeaderComponent = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export const Header = React.memo(HeaderComponent);