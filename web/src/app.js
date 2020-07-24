// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import './app.scss';
import MainContainer from './components/MainContainer';
import ColorPicker from './components/ColorPicker';

import { add, minus, asyncAdd } from './store/count/action';

function App() {
  return (
    <>
      <MainContainer />
      <ColorPicker />
    </>
  );
}

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  asyncAdd: () => dispatch(asyncAdd())
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
