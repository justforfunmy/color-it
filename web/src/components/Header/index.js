import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { isLight } from '../../util';

const render = ({ value, firstAsBackground }) => {
	const [first, second, , forth] = value;
  return (
    <div className={`header-container ${firstAsBackground ? 'first-bg' : ''}`}>
      <div className="header-logo">
        <span>Color IT</span>
      </div>
      <div className="header-desc">
        <span>here is description</span>
      </div>
      <div className="header-nav">
        <div className="header-nav-item">
          <span>导航</span>
        </div>
        <div className="header-nav-item">
          <span>导航</span>
        </div>
        <div className="header-nav-item">
          <span>导航</span>
        </div>
      </div>
      <div className="header-login">login</div>
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
