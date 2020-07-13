import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./reducers/index";

// Создаём стор :)
const store = createStore(rootReducer);

// Нашу компоненту нужно обернуть в Provider и будет счастье.
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));


serviceWorker.unregister();
