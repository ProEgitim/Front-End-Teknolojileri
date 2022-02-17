import React,{Component} from "react"

export default class Element extends Component {
    render(){  
        return(
            <div> 
            <h2  style={{
                background:'orange',
                position:"absolute",
                left:"150px",
                top:"150px",
                width:"4rem"
            }}>{this.props.header}</h2>
            {this.props.children}
            </div>
        )
    }
}