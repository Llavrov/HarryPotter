import {combineReducers } from 'redux';
import films from './films';

const rootReducer = combineReducers({
    films: films,
});

export default rootReducer;