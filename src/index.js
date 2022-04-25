import React from 'react';
// import ReactDOM from 'react-dom/client'; esto es la version react 18 y se hace con el const root
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
