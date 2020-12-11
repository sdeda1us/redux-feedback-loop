import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingStore = (state=0, action) => {
    if(action.type==='ADD_FEELING'){
        return action.payload;
    }
    if(action.type==='CLEAR_FIELDS'){
        return [];
    }
    return state;
}

const understandingStore = (state=0, action) => {
    if(action.type==='ADD_UNDERSTAND'){
        return action.payload;
    }
    if(action.type==='CLEAR_FIELDS'){
        return [];
    }
    return state;
}

const supportedStore = (state=0, action) => {
    if(action.type==='ADD_SUPPORTED'){
        return action.payload;
    }
    if(action.type==='CLEAR_FIELDS'){
        return [];
    }
    return state;
}

const commentsStore = (state='', action) => {
    if(action.type==='ADD_COMMENTS'){
        return action.payload;
    }
    if(action.type==='CLEAR_FIELDS'){
        return [];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            feelingStore,
            understandingStore,
            supportedStore,
            commentsStore
        }
    ), 
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
