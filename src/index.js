import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './mui/theme.js';
import { BrowserRouter } from 'react-router-dom';



const client = new ApolloClient({
uri:process.env.REACT_APP_URL, 
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

</ApolloProvider>
);

