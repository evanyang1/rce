import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';

ReactDOM.render(<Homepage />, document.getElementById('app'));
