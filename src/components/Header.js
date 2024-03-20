import React, { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';



class Header extends Component {

	render() {
		return (
			<header id="header">
				<Navbar onMenuClick={this.props.onMenuClick} onAboutClick={this.props.onAboutClick} />
				<div className='date' style={{marginTop: '5rem'}}>{this.props.time && this.props.time.slice(0, 15)}</div>
				<div className='time'>{this.props.time && this.props.time.slice(16)}</div>
				<Form onSubmit={this.props.onSubmit} />
			</header>
		);
	}
}


export default Header;