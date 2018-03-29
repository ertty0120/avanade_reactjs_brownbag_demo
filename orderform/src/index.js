import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import OrderForm from './components/orderform.js';


ReactDOM.render(<div>
    <OrderForm/>
</div>, document.getElementById('root'));

registerServiceWorker();
