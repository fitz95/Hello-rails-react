// components/Greeting.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../actions/actions';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting.content}</p>
    </div>
  );
}

export default Greeting;
