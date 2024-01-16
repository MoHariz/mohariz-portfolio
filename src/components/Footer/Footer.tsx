import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px', backgroundColor: '#f0f0f0' }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
