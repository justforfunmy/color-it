import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { formatColorCode, hex2rgb } from '../../../util';
import { setValue } from '../../../store/colors/action';

const ColorItem = (props) => {
  const { code, setColorValue } = props;
  const result = formatColorCode(code);
  const rgbs = result.map((item) => hex2rgb(`#${item}`));
  const handlePick = () => {
    document.body.style.setProperty('--first', `rgb(${rgbs[0]})`);
    document.body.style.setProperty('--second', `rgb(${rgbs[1]})`);
    document.body.style.setProperty('--third', `rgb(${rgbs[2]})`);
    document.body.style.setProperty('--forth', `rgb(${rgbs[3]})`);
    setColorValue(rgbs);
  };
  return (
    // eslint-disable-next-line
    <div className="item-container" onClick={handlePick} role="pick">
      {rgbs.map((item) => (
        <div className="item-block" key={item} style={{ backgroundColor: `rgb(${item})` }} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispath) => ({
  setColorValue: (payload) => dispath(setValue(payload))
});

export default connect(null, mapDispatchToProps)(React.memo(ColorItem));
