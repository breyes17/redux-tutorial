import * as constants from './constants';

export const addAction = () => {
  return {
    type: constants.ADD,
  };
};

export const minusAction = () => {
  return {
    type: constants.MINUS,
  };
};
