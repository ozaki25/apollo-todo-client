import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../graphql/query';

function TodoList() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>TodoList</h2>
      {data.todos.map(todo => (
        <p key={todo.id}>
          ID: {todo.id}, Todo: {todo.type}
        </p>
      ))}
    </div>
  );
}

export default TodoList;
