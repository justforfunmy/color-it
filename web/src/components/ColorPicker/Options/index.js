// eslint-disable

import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { triggerBg } from '../../../store/colors/action';

const Options = (props) => {
  const {
    colors: { firstAsBackground },
    trigger
  } = props;
  const handleClick = () => {
    trigger();
  };
  return (
    <div className="option-container">
      <div
        className={`${firstAsBackground ? 'option-item-active' : 'option-item'}`}
        onClick={handleClick}
      >
        <span>主色调作为背景色</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  trigger: () => dispatch(triggerBg())
});

const mapStateToProps = ({ colors }) => ({ colors });

export default connect(mapStateToProps, mapDispatchToProps)(Options);
