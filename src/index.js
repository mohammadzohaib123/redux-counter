import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import CounterApp from './store/CounterReducer';
import Counter from './Component/Counter';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(CounterApp);


ReactDOM.render(<Provider store={store}>
    <Counter />
</Provider>, document.getElementById('root'));
registerServiceWorker();
