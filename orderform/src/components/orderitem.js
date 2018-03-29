import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import NumericInput from 'react-numeric-input';

//order item contains itemname, quantity, price, and total price
class _orderitem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemquantity: 0
            ,totalprice:0
            ,itemindex:this.props.itemindex
        };

    }
    updateQuantity(newquantity){
        this.props.onchangequantity(newquantity,this.state.itemindex);
    }
    getSubTotal(){
        return this.state.totalprice;
    }
    onQuantityChange(e){
        this.setState({
            itemquantity:e,
            totalprice:e*this.props.itemprice
        })
        this.updateQuantity(e);
    }

    render(){
        return(
            <div>

                 <h3>{this.props.itemname} &emsp;  &emsp;&emsp;&emsp;
                 {this.props.itemprice}  &emsp; &emsp;&emsp;
                 <NumericInput size={2} min={0} max={100} value={this.state.itemquantity} onChange={this.onQuantityChange.bind(this)}/> &emsp;   &emsp;
                 {this.state.totalprice} </h3>
                               
            </div>
        )
    }
}


export default _orderitem;