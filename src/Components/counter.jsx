import React, { Component } from "react";
class Counter extends Component{
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
        
    };
    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */
    handleIncrement = product => {
        //console.log(product);
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        //console.log("props", this.props);
        let classes = this.changeIcon();
        
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={(product) => this.handleIncrement(product)}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button
                    onClick={this.props.onDelete}
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
                
                
            </div>
        );
    }
    changeIcon() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
export default Counter;