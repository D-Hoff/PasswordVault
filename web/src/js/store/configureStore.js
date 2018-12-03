import { createStore, combineReducers } from 'redux';

import filtersReducer from '../reducers/filters';
import headerReducer from '../reducers/header';
import shelfsReducer from '../reducers/shelfs';
import passwordReducer from '../reducers/password';

const reducer = combineReducers({
    isCollapsed: headerReducer,
    
    filters: filtersReducer,
    
    shelfs: shelfsReducer,

    password: passwordReducer,
});

export default () => {
    const store = createStore(
        reducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    });

    return store;
}