import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hello</h1>
      <TodoList />
      <Todo />
      <AddTodo />
    </ApolloProvider>
  );
}

export default App;
