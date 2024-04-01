import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import {setupStore} from "../store/store";
import '../styles/main.scss';

const store = setupStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App users={[]} posts={[]} albums={[]}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);