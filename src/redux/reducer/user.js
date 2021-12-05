const initialReducer = {
  access_token: '',
  token_type: '',
  user: {},
};

export const userReducer = (state = initialReducer, action) => {
  console.log('action', action);
  if (action.type === 'SET_USER') {
    return {
      ...state,
      ...action.value,
    };
  }
  return state;
};
