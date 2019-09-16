import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const app = (
 <BrowserRouter basename="/HNG_INTERNSHIP_FRONTEND">
  <App />
 </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
