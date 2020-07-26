import React, { useEffect } from 'react';
import './index.scss';
import BetterScroll from 'better-scroll';
import data from '../../assets/mock/data.json';
import ColorItem from './ColorItem';

const ColorPicker = () => {
  const ref = React.createRef();
  const initScroll = () => {
    // eslint-disable-next-line no-unused-vars
    const bs = new BetterScroll(ref.current, {
      click: true,
      scrollX: true
    });
  };
  useEffect(() => {
    initScroll();
  }, []);
  return (
    <div className="picker-container">
      <div className="picker-title">
        <span>Pick Your Colors</span>
      </div>
      <div className="picker-list" ref={ref}>
        <div className="picker-list-in">
          {data.map((item) => (
            <ColorItem code={item.code} key={item.code} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ColorPicker);
