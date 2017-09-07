import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import Frame from '../container/frame'
import Login from '../container/login'
import Homepage from '../container/homepage'

const RouteMap = browserHistory => (
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Login} />
            <Route path="/login" component={Login}></Route>
            <Route path="/index" component={Homepage}></Route>
        </Route>
    </Router>
)
            

export default RouteMap