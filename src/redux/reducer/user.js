const initialReducer = {
  access_token: '',
  token_type: '',
  user: {},
};

export const userReducer = (state = initialReducer, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      ...action.value,
    };
  }

  if (action.type === 'SET_UPLOAD_AVATAR') {
    console.log('upload avatar', action.value);
    return {
      ...state,
      user: {
        ...state.user,
        profile_photo_url: action.value.profile_photo_url,
      },
    };
  }

  return state;
};
