import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import AppWrapper from './components/AppWrapper';

const store = configureStore();

render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();
