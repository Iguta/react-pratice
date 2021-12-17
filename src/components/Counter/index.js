import React, {useState, useEffect} from 'react';
const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  function increment() {
    console.log('I have been clicked...');
    setCounter(counter + 1);
  };
  //useEffect -> for side effect functions of the component
  // -> Runs when the component is rendered, and every time the component is updated
  useEffect (() => {
    alert(`You have clicked ${counter} times`)
  }, [counter])
  return (
    <div>
      <div>
        <h1>Hello {props.name}</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div>
        <h3>You have clicked {counter} times </h3>
        <button onClick={increment}>Click me</button>
      </div>
    </div>
  );
}

export default Counter;