import React, { useMemo, useState } from 'react';

function SortedList({ list, sortFunc }) {
  console.log('sorted list rendered');
  const sortedList = useMemo(() => {
    console.log('Running sort');
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return <div>{sortedList.join(', ')}</div>;
}

const Callback = () => {
  const [names] = useState(['John', 'Paul', 'George', 'Ringo']);
  const [render, setRender] = useState(true);
  console.log('rendered');

  const sortFunc = (a, b) => a.localeCompare(b) * -1;

  return (
    <div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={(e) => setRender(!render)}>Render again</button>
    </div>
  );
};

export default Callback;
