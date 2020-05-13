import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom'
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Field, reduxForm,reducer as formReducer } from 'redux-form'

import ContainerApp from './containers/container_app'

import componentReducer from './reducers/componentReducer'

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

const rootReducer = combineReducers({
    component:componentReducer,
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
  })

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <ContainerApp />
    </Provider>,
    document.getElementById('root')
)