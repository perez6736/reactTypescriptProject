import { combineReducers } from 'redux';
import repoReducers from './repoReducer';

const reducers = combineReducers({
  repos: repoReducers,
});

export default reducers;
