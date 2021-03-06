import React from 'react';
import ReactDOM from 'react-dom';
import './styles/colors.scss';
import './styles/typography.scss';
import './styles/common.scss';
import './styles/spacing.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Components from './components';
import * as Icons from './icons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { Components, Icons }