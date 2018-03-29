import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import NumericInput from 'react-numeric-input';

class _orderitemheader extends React.Component{
    render(){
        return(
            <div>
                <h3>Item name &emsp;  &emsp;
                 Unit Price  &emsp; &emsp;
                 Quantity &emsp;   
                 Sub Total </h3>
            </div>
        )
    }
}

export default _orderitemheader;