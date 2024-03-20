import React from 'react';

const MIN_LOGO_WIDTH = 400; // Adjust this value to your desired minimum width

const Logo = () => {
  const logoStyle = {
    fontSize: '2.580rem',
    userSelect: 'none',
    minWidth: MIN_LOGO_WIDTH, // Apply minimum width here
  };

  return (
    <div className='page-logo'>
      <a className='logo-container link-alike' style={logoStyle} href='/'>
        <span className='' style={{ fontFamily: 'Abril Fatface', ...textStyles }}>
          Beyond
        </span>
        <span className='' style={{ fontFamily: 'Abril Fatface', ...textStyles }}>
          The
        </span>
        <span className='' style={{ fontFamily: 'Abril Fatface', ...textStyles }}>
          Trailer
        </span>
      </a>
    </div>
  );
};

const textStyles = {
  color: '#0a0a14',
  backgroundColor: '#fbff00',
  padding: '1px 8px',
};

export default Logo;
