import { ADD, MINUS } from './constants';

const initialState = {
  number: 0,
};

const whookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default whookReducer;
