import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPoint, deduction } from '../redux/hooks/action';

const Hooks = () => {
  const { score } = useSelector((state) => state.hooks);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Your score: {score}</p>
      <button onClick={() => dispatch(addPoint(2))}>2 point</button>
      <button onClick={() => dispatch(addPoint(3))}>3 point</button>
      <button onClick={() => dispatch(deduction(1))}>Deduction</button>
    </div>
  );
};

export default Hooks;
