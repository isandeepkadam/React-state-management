import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
};

export default State;
