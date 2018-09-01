import { createStore } from 'redux';
import reducer from './reducer'

// create store which gets passed to index.js and fed to the provider
export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());