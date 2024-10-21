import React,{Component} from "react"
import ThreeClass from "./ThreeClass.js"

// class TwoClass extends Component{
//     render(){
//         return(    
//             <>
//             <div><h1>class Component 2</h1></div>
//             <ThreeClass />
//             </>
//         );
//     }
// }

// export default TwoClass;





export default class TwoClass extends Component {
    constructor(props) {
        super()
        this.state = {
            number: props.count
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <br />
                {/* Data: {this.state.number} */}
                Data: {this.props.count}
                {/* <h1>Class Component 1</h1> */}
                {/* <ClassComponent2 number={this.state.number} /> */}
                <ThreeClass number={this.props.count} />
            </>
        )
    }
}
