import { combineReducers } from 'redux';
import repoReducers from './repoReducer';

// this is gonna be the state of the application.
const reducers = combineReducers({
  repos: repoReducers,
});

export default reducers;

// this creates a type RootState that is eestentially whatever the reducer returns
export type RootState = ReturnType<typeof reducers>;
