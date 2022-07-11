import { DEDUCTION, ADD_POINT } from './constant';

export const addPoint = (point) => ({
  type: ADD_POINT,
  payload: point,
});

export const deduction = (point) => ({ type: DEDUCTION, payload: point });
