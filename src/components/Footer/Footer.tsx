import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px' }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Muhammad Hariz</p>
    </footer>
  );
};

export default Footer;
