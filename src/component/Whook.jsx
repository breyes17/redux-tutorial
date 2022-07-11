import React from 'react';
import { connect } from 'react-redux';
import { addAction, minusAction } from '../redux/whook/action';

const Whook = (props) => {
  // Whook means Without hook
  return (
    <>
      <p>Number for click {props.number}</p>
      <button onClick={props.addOne}>Add one</button>
      <button onClick={props.minusOne}>Minus one</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.whook.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addAction()),
    minusOne: () => dispatch(minusAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Whook);
