import { SETVALUE, TRIGGERBG } from './constant';

const initialState = {
  value: ['22,36,71', '31,64,104', '27,27,47', '228,63,90'],
  firstAsBackground: false
};

export default function colors(state = initialState, action) {
  switch (action.type) {
    case SETVALUE:
      return {
        ...state,
        value: action.payload
      };
    case TRIGGERBG:
      return {
        ...state,
        firstAsBackground: !state.firstAsBackground
      };
    default:
      return state;
  }
}
