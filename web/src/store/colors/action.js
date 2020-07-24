import { SETVALUE, TRIGGERBG } from './constant';

// eslint-disable-next-line import/prefer-default-export
export const setValue = (payload) => ({
  type: SETVALUE,
  payload
});

export const triggerBg = (payload) => ({
  type: TRIGGERBG,
  payload
});
