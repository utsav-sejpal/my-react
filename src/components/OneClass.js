import React, { Component } from "react"
import TwoClass from "./TwoClass.js"

// class OneClass extends Component{
//     render(){
//         return (
//             <>
//             <div><h1>one class </h1></div>
//             <TwoClass />
//             </>
//         );
//     }
// }

// export default OneClass;





export default class OneClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            showComponent: false
        }
        console.log('constructor');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1,
            showComponent: !this.state.showComponent
        });
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.increaseCount()}>Increase Count</button>
                <TwoClass count={this.state.count} />
            </>
        )
    }
}



