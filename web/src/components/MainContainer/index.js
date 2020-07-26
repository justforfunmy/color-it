import React from 'react';
import './index.scss';
import Header from '../Header';
import Welcome from '../Welcome';

// eslint-disable-next-line react/destructuring-assignment
const MainContainer = () => (
  <div className="main-container">
    <Header />
    <div className="main-content">
      <Welcome />
    </div>
  </div>
);

export default React.memo(MainContainer);
