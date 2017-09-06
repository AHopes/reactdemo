import React from 'react'
import {render} from 'react-dom'
import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'

import RouteMap from './route'

const store = configureStore();

let root = document.createElement("div");
root.id = 'root';
document.body.appendChild(root);

render ( 
    <Provider store={store}>
        <RouteMap />
    </Provider>,
    document.getElementById('root')
)
