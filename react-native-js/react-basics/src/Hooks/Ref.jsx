import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: 'John' },
    { id: idRef.current++, name: 'Jane' },
  ]);

  const onAddNames = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]); //unconrtolled input
    inputRef.current.value = '';
  };

  console.log('id:', idRef.current);
  return (
    <div>
      {names.map((name) => (
        <div key={name.id}>
          {name.id} - {name.name}
        </div>
      ))}

      <input type="text" ref={inputRef} />
      <button onClick={onAddNames}>Add Names</button>
    </div>
  );
};

export default Ref;
