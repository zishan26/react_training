import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 3 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },

        ]
    }
    handleDelete = () => { 
        console.log("Event Handler Called");
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counters =>
                    <Counter key={counters.id}
                        value={counters.value}
                        selected={true}
                        onDelete={this.handleDelete}
                    >
                    </Counter>)
                }                
            </div>
        );
    }
}
export default Counters;