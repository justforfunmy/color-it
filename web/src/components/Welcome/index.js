import React from 'react';
import './index.scss';

const Welcome = () => (
  <div className="welcome-container">
    <div className="welcome-title">
      <span>Welcome</span>
    </div>
    <div className="welcome-desc">
      <span>Pick your colors ,and then the theme will change.</span>
    </div>
    <div className="welcome-start">
      <span>quick start</span>
    </div>
  </div>
);

export default React.memo(Welcome);
