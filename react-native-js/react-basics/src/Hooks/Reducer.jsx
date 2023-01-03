import { useReducer } from 'react';

const Reducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_NAME':
          return { ...state, name: action.payload };

        case 'ADD_NAME':
          return { ...state, names: [...state.names, state.name], name: '' };
      }
    },
    { names: [], name: '' }
  );

  return (
    <div>
      {state.names.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'SET_NAME', payload: e.target.value })
        }
      />
      <h1>Name = {state.name}</h1>
      <button onClick={() => dispatch({ type: 'ADD_NAME' })}>Add Name</button>
      <UserForm />
    </div>
  );
};

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: '',
      last: '',
    }
  );

  return (
    <lastiv>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>
        First Name: {state.first}
        <br />
        Last Name: {state.last}
      </div>
    </lastiv>
  );
};

export default Reducer;
