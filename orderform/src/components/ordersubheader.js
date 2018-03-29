import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import NumericInput from 'react-numeric-input';

class _ordersubheader extends React.Component{
    findTotal(){
        var total=0;
        for (var i=0; i<this.props.arr.length; i++) {
            total += this.props.arr[i];
        }
        return total;
    }
    render(){
        return(
            <div>
                <h3>Total Amount &emsp;  &emsp;
                 {this.findTotal()}  &emsp; &emsp;
                  </h3>
            </div>
        )
    }
}
export default _ordersubheader;
