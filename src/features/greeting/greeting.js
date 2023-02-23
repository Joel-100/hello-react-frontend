import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGreeting } from './greeting_slice';

function Greeting() {
  const greetingMessage = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>
        A random greeting:
        {greetingMessage}
      </h1>
    </div>
  );
}

export default Greeting;
