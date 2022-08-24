import {createStore,compose} from 'redux';
import reducer from './reducer/rootReducer';
import { isDev } from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = isDev 
? createStore(reducer,composeEnhancers())
: createStore(reducer);
export default store