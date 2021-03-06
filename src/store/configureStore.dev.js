//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import focusApp from 'reducers';

export default function configureStore(initialState) {
  let store = createStore(
    focusApp, 
    initialState, 
    composeWithDevTools(),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
