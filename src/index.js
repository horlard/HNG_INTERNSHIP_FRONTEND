import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import History from './components/history';
import * as serviceWorker from './serviceWorker';
import './index.css';

const app = (
 <Router history={History}>
  <App />
 </Router>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
