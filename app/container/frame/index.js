import React from 'react'
// import './index.css'
class Frame extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Frame