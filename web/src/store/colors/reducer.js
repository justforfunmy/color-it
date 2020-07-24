import { SETVALUE, TRIGGERBG } from './constant';

const initialState = {
  value: ['14,154,167', '61,164,171', '246,205,97', '254,138,113'],
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
