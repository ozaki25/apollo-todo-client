import React, { useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_TODO } from '../graphql/query';

function Todo() {
  const inputRef = useRef(null);
  const [getTodo, { loading, error, data }] = useLazyQuery(GET_TODO);

  return (
    <div>
      <h2>Todo</h2>
      <div>
        <p>
          <input ref={inputRef} />
          <button
            onClick={() =>
              getTodo({ variables: { id: inputRef.current.value } })
            }
          >
            GET
          </button>
        </p>
        {loading && <p>...loading</p>}
        {error && <p>{error.message}</p>}
        {data && (
          <p>
            ID: {data.todo.id}, Todo: {data.todo.type}
          </p>
        )}
      </div>
    </div>
  );
}

export default Todo;
