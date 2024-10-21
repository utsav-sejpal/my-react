    import React,{Component} from "react"
    // import Fourclass from "./FourClass.js"

    // class ThreeClass extends Component{
    //     render(){
    //         return (    
    //             <>
    //             <div><h1>class Component 3</h1></div>
    //             <Fourclass />
    //             </>
    //         );
    //     }
    // }

    // export default ThreeClass;

    export default class ThreeClass extends Component {
        constructor(props) {
            super()
        }
    
        render() {
            return (
                <>
                    <h1>Class Component 2</h1>
                    {this.props.number}
                </>
            )
        }
    }