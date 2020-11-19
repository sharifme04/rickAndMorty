import React from 'react';
import {ApolloProvider} from '@apollo/client';
import StackNavigator from './app/navigation/StackNavigator';
import client from './app/apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StackNavigator />
    </ApolloProvider>
  );
};
export default App;
