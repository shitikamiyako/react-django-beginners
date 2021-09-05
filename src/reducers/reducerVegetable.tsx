import { ACTIONTYPE, SELL_VEGETABLE } from "./actionTypes";

const initialState = { numOfVegetable: 0 };

const reducerVegetable = (state = initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case SELL_VEGETABLE:
      return {
        ...state,
        numOfVegetable: state.numOfVegetable - 1,
      };
    default:
      return state;
  }
};

export default reducerVegetable;
