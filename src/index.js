import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase'

ReactDOM.render(
<FirebaseContext.Provider value={{ firebase, FieldValue }}>
  <h1>Hello Snappy</h1>
</FirebaseContext.Provider>,
  document.getElementById('root')
);