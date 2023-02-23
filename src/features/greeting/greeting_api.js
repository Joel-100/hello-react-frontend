async function fetchRandomGreeting() {
  const response = await fetch('http://localhost:3000/greetings');
  const data = await response.json();
  return data.message;
}

export default fetchRandomGreeting;
