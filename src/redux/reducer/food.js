const initialFood = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const foodReducer = (state = initialFood, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      return {
        ...state,
        food: action.value,
      };

    case 'GET_NEWTASTE':
      return {
        ...state,
        newTaste: action.value,
      };

    case 'GET_POPULAR':
      return {
        ...state,
        popular: action.value,
      };

    case 'GET_RECOMMENDED':
      return {
        ...state,
        recommended: action.value,
      };

    default:
      return state;
  }
};
