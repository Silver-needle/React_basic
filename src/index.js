import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const el = <h1>Hello!</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el,
  document.getElementById('root')
);

