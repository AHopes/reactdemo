import React from 'react'
import {render} from 'react-dom'
import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'
import { browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import RouteMap from './route'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let root = document.createElement("div");
root.id = 'root';
root.style.width = '100%'
root.style.height = '100%'
document.body.appendChild(root);

render ( 
    <Provider store={store}>
        {RouteMap(history)}
    </Provider>,
    document.getElementById('root')
)
