import { DEDUCTION, ADD_POINT } from './constant';

const initialStore = { score: 0 };

const pointReducer = (init = initialStore, action) => {
  switch (action.type) {
    case ADD_POINT:
      return { score: init.score + action.payload };
    case DEDUCTION:
      return { score: init.score - action.payload };
    default:
      return init;
  }
};

export default pointReducer;
