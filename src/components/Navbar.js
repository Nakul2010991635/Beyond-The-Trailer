import React, { Component } from 'react';
import Logo from './PageLogo.js';
import { Info } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';
import Profile from './Profile'; // Import the Profile component

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
}

class Navbar extends Component {
  state = {
    showProfile: false,
  };

  handleProfileClick = () => {
    this.setState((prevState) => ({ showProfile: !prevState.showProfile }));
  };

  handleProfileClose = () => {
    this.setState({ showProfile: false });
  };

  render() {
    const { showProfile } = this.state;

    return (
      <div>
        <div className='nav-logo'>
          <div className='nav-link' onClick={this.handleProfileClick}>
            <div className='nav-link-icon'>
              <AccountCircleIcon size='large' style={{ filter: 'url(#shadow)' }} />
            </div>
            <span className='nav-link-text'>Profile</span>
          </div>
          <div className='nav-link' onClick={this.props.onMenuClick}>
            <div className='nav-link-icon'>
              <HistoryIcon size='large' style={{ filter: 'url(#shadow)' }} />
            </div>
            <span className='nav-link-text'>History</span>
          </div>
          <Logo />
          <div className='nav-link' onClick={this.props.onAboutClick}>
            <div className='nav-link-icon'>
              <Info size='large' />
            </div>
            <span className='nav-link-text'>ABOUT</span>
          </div>
          <div className='nav-link' onClick={handleLogout}>
            <div className='nav-link-icon'>
              <ExitToAppIcon size='large' />
            </div>
            <span className='nav-link-text'>LOGOUT</span>
          </div>
        </div>
        {/* Render the Profile component */}
        <Profile show={showProfile} onClose={this.handleProfileClose} />
      </div>
    );
  }
}

export default Navbar;