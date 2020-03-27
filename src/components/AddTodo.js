import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../graphql/mutation';

function AddTodo() {
  const inputRef = useRef(null);
  const [addTodo, { loading, error, data }] = useMutation(ADD_TODO);

  return (
    <div>
      <h2>AddTodo</h2>
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
      <p>
        <input ref={inputRef} />
        <button
          onClick={() =>
            addTodo({
              variables: { type: inputRef.current.value },
            })
          }
        >
          ADD
        </button>
      </p>
    </div>
  );
}

export default AddTodo;
