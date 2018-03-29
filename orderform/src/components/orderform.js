import React from 'react';
import ReactDOM from 'react-dom';
import _orderitem from './orderitem.js';
import _orderitemheader from './orderitemheader.js';
import _ordersubheader from './ordersubheader.js';
import _orderbutton from './orderbutton.js';
class OrderForm extends React.Component{
    constructor() {
        super();
        this.state = {
            curitemindex: 0
            ,curuomindex:0
            ,curquantity:0
        };
        this.itemoptions=['book','water','friend'];
        this.itemprices=[500,20,5000];
        this.calculatedprices=[0,0,0];
        this.itemquantity=[0,0,0];
        


      }
      getIndex(value, arr) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === value) {
                return i;
            }
        }
        return -1; //to handle the case where the value doesn't exist
    }

      updateQuantity=(quantity,index)=>{
          this.setState({
            curquantity:quantity
            ,curuomindex:index
          })
          this.itemquantity[index] = quantity;
          this.calculatedprices[index] = quantity*this.itemprices[index];
      }

          
    
    render(){
        var lis = [];
        for (var i=0; i<this.itemoptions.length; i++) {
            
            lis.push(<li><_orderitem itemindex={i} onchangequantity={this.updateQuantity} itemname = {this.itemoptions[i]} itemprice={this.itemprices[i]}/></li>);
        }
        
        return(
            
            <div >

                    <_orderitemheader/>
                    <ul >

                    {lis}

                    </ul>
                    <_ordersubheader arr={this.calculatedprices}/>
                   <object align="middle"> <_orderbutton size={5} leftname="submit order" rightname="cancel"/></object>

            </div>
        )
    }
}
export default OrderForm;