import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hello</h1>
    </ApolloProvider>
  );
}

export default App;
