import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POINT, DEDUCTION } from '../redux/hooks/constant';

const Hooks = () => {
  const { score } = useSelector((state) => state.hooks);
  const dispatch = useDispatch();

  const onDispatch = (type, points) => dispatch({ type, payload: points });
  return (
    <div>
      <p>Your score: {score}</p>
      <button onClick={() => onDispatch(ADD_POINT, 2)}>2 point</button>
      <button onClick={() => onDispatch(ADD_POINT, 3)}>3 point</button>
      <button onClick={() => onDispatch(DEDUCTION, 1)}>Deduction</button>
    </div>
  );
};

export default Hooks;
