export const setLoading = value => {
  return {type: 'SET_LOADING', value: value};
};

export const setError = (isError, message) => {
  return {
    type: 'SET_ERROR',
    value: {
      isError: isError,
      message: message,
    },
  };
};
