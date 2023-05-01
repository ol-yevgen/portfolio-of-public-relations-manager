import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { memo } from 'react';

import store from './redux/store';
import App from './App';

import './styles/index.scss';
const MemoApp = memo(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        
    // </React.StrictMode>
    <Provider store={store} >
            <MemoApp />
        </Provider>
);