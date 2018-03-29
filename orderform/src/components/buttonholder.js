import React from 'react';
import ReactDOM from 'react-dom';
class _buttonholder extends React.Component{
    constructor(props) {
        super(props);


    }
    onSubmitButtonClick(e){
        super.onSubmitButtonClick(e);
    }
    onCancelButtonClick(e){
        super.onCancelButtonClick(e);
    }
    render(){
        return(
            <div>
                <button onClick={this.onSubmitButtonClick.bind(this)}> {this.props.leftname} </button>
                <button onClick={this.onCancelButtonClick.bind(this)}> {this.props.rightname} </button>
                
            </div>
        )
    }
}

export default _buttonholder;