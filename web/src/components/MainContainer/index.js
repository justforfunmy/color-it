import React from 'react';
import './index.scss';
import Header from '../Header';

// eslint-disable-next-line react/destructuring-assignment
const MainContainer = () => (
  <div className="main-container">
    <Header />
  </div>
);

export default React.memo(MainContainer);
