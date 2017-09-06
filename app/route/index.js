import React from 'react'
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom'

import Home from '../home'
import Second from '../second'
import Third from '../third'

class RouteMap extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
            <BrowserRouter>
                <div>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/second" component={Second}></Route>
                    <Route path="/third" component={Third}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouteMap