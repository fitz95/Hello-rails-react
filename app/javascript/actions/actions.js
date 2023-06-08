import axios from 'axios';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/greetings/random');
      const randomGreeting = response.data;
      dispatch({ type: 'FETCH_RANDOM_GREETING_SUCCESS', payload: randomGreeting });
    } catch (error) {
      dispatch({ type: 'FETCH_RANDOM_GREETING_FAILURE', payload: error.message });
    }
  };
};

