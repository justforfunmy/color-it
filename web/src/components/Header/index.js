import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { isLight } from '../../util';

const render = ({ value, firstAsBackground }) => {
  const [first, second, , forth] = value;
  if (firstAsBackground) {
    return (
      <div className="header-container" style={{ backgroundColor: `rgb(${first})` }}>
        <div className="header-logo">
          <span style={{ color: `${isLight(first) ? '#111' : '#fff'}` }}>LOGO</span>
        </div>
        <div className="header-desc">
          <span style={{ color: `${isLight(first) ? '#111' : '#fff'}` }}>here is description</span>
        </div>
        <div className="header-nav">
          <div className="header-nav-item">
            <span style={{ color: `${isLight(first) ? '#111' : '#fff'}` }}>导航</span>
          </div>
          <div className="header-nav-item">
            <span style={{ color: `${isLight(first) ? '#111' : '#fff'}` }}>导航</span>
          </div>
          <div className="header-nav-item">
            <span style={{ color: `${isLight(first) ? '#111' : '#fff'}` }}>导航</span>
          </div>
        </div>
        <div className="header-login" style={{ backgroundColor: `rgb(${forth})` }}>
          login
        </div>
      </div>
    );
  }
  return (
    <div className="header-container">
      <div className="header-logo">
        <span style={{ color: `rgb(${first})` }}>LOGO</span>
      </div>
      <div className="header-desc">
        <span style={{ color: `rgb(${second})` }}>here is description</span>
      </div>
      <div className="header-nav">
        <div className="header-nav-item">
          <span style={{ color: `rgb(${first})` }}>导航</span>
        </div>
        <div className="header-nav-item">
          <span style={{ color: `rgb(${first})` }}>导航</span>
        </div>
        <div className="header-nav-item">
          <span style={{ color: `rgb(${first})` }}>导航</span>
        </div>
      </div>
      <div className="header-login" style={{ backgroundColor: `rgb(${forth})` }}>
        login
      </div>
    </div>
  );
};

const Header = (props) => {
  const {
    colors: { value, firstAsBackground }
  } = props;
  return render({ value, firstAsBackground });
};

const mapStateToProps = ({ colors }) => ({ colors });

export default connect(mapStateToProps, null)(React.memo(Header));
