import { useMemo, useState } from 'react';

const Memo = () => {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);

  const [render, setRender] = useState(true);
  const total = useMemo(() => {
    console.log(
      'Memo ran only when total is changed after adding random number to array'
    );
    return numbers.reduce((acc, number) => acc + number, 0);
  }, [numbers]);

  // const total = () => {
  //   console.log('This will run on every render');
  //   return numbers.reduce((acc, num) => acc + num, 0);
  // };

  console.log(
    'component re-rendered after render state changed from true to false'
  );

  return (
    <div>
      <h1>{total}</h1>
      <button
        onClick={(e) =>
          setNumbers([...numbers, Math.floor(Math.random() * 100)])
        }
      >
        Add random number
      </button>
      <button onClick={(e) => setRender(!render)}>Render again</button>
      <h3>Open console to check re-renders</h3>
    </div>
  );
};

export default Memo;
