import React,{Component} from "react";

export default class Counter extends Component{
    
    state = {
        count :0
    };
    
   
    render(){  
        return(
        <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>);
    }


    getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

}