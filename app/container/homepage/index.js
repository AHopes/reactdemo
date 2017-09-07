import React from 'react'
import {connect} from 'react-redux'

import './index.css'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: ''
        }
    }
    handleClick() {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="box">
                <span>{this.state.nick}</span>
                <span>退出</span>
            </div>
        )
    }
    componentDidMount() {
        if(!!this.props.userInfo.nick) {
            this.setState({
                nick: this.props.userInfo.nick
            })
        }
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.user,
    }
}
function mapDispatchToProps(dispatch) {
    return {
       
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);