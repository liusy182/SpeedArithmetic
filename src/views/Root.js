'use strict';

import React , { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from '../reducers';
import App from './App';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware)
// );

// export default class Root extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//   }
// }

export default class Root extends Component {
  render() {
    return (
        <App />
    );
  }
}