import React from 'react';
import ReactDOM from 'react-dom';
import _buttonholder from './buttonholder.js';
class _orderbutton extends _buttonholder{
    
        onSubmitButtonClick(e){
            alert("Order submitted!");
        }
        onCancelButtonClick(e){
            
        }
    
    }

    export default _orderbutton;