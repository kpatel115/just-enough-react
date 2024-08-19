import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* Apollo Client Libraries */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

// Configure Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
