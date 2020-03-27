import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hello</h1>
      <TodoList />
      <Todo />
    </ApolloProvider>
  );
}

export default App;
