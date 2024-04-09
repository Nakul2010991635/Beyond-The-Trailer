import React, { Component } from 'react';
import Logo from './PageLogo.js';
import { Info} from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';
const handleLogout = () => {
	localStorage.removeItem("token");
	window.location.reload();
};

class Navbar extends Component {
	

	render() {
		return (
			<div className='nav-logo'>
				<div className='nav-link'
					onClick={this.props.onProfileClick}
				>
					<div className='nav-link-icon'>
						<AccountCircleIcon size='large' style={{ filter: 'url(#shadow)' }} />
					</div>
					<span className='nav-link-text'>Profile</span>
				</div>
				<div className='nav-link'
					onClick={this.props.onMenuClick}
				>
					<div className='nav-link-icon'>
						<HistoryIcon size='large' style={{ filter: 'url(#shadow)' }} />
					</div>
					<span className='nav-link-text'>History</span>
				</div>
				<Logo />
				<div 
					className='nav-link'
					onClick={this.props.onAboutClick}
				>
					<div className='nav-link-icon'>
						<Info size='large' />
					</div>
					<span className='nav-link-text'>ABOUT</span>
					
				</div>
				<div 
					className='nav-link'
					onClick={handleLogout}
				>
					<div className='nav-link-icon'>
						<ExitToAppIcon size='large' />
					</div>
					<span className='nav-link-text'>LOGOUT</span>
					
				</div>
			</div>
		);
	}
}


export default Navbar;