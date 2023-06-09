const initialState = {
    greeting: '',
    loading: false,
    error: null
  };
  
  const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RANDOM_GREETING_SUCCESS':
        return {
          ...state,
          greeting: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_RANDOM_GREETING_FAILURE':
        return {
          ...state,
          greeting: '',
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default greetingReducer;
  