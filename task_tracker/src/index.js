import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider 
  domain="task-motivator.us.auth0.com"
  clientId="kxviTQGErwGaBkPt7KQEekwhlm7fws9C"
  redirectUri={'http://localhost:3001/tasks'}
  audience="https://quickstarts/api"
  scope="read:current_user update:current_user_metadata"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
