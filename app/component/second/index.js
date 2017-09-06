import React from 'react'
import './index.css'
class Second extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick() {
        console.log(this.props);
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="box" onClick={this.handleClick.bind(this)}>2221111222</div>
        )
    }
    componentDidMount() {
        // let [, , third] = ["foo","bar","baz"];
        // console.log(typeof third);
        // let [head, ...tail] = [1,2,3,4];
        // console.log(head, Object.prototype.toString.call(tail).substr(8,5))
        // let [x, , y] = [1,2,3];
        // console.log(x,y)
        let [x, y, ...z] = ['a'];
        console.log(x,y,z)
        console.log(2)
        console.log(2)
        console.log(2)
        console.log(1)
    }
}

export default Second