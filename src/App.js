import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import React from 'react'
import './App.css';
import Glossary from './components/Glossary';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1 style={{backgroundColor: "red"}}>Glossary App</h1>
      <Glossary />
    </div>
    </ApolloProvider>
  );
}

export default App;
