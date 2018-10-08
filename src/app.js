import React from 'react';
import ReactDOM from 'react-dom';

// Container to run app
import IndecisionApp from './components/IndecisionApp';

// normalize is used to break default values down so app
// looks the same in all browsers
import 'normalize.css/normalize.css';
import './styles/styles.scss'; // <- custom scss files

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));