import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';

const reducer = combineReducers({
  globalReducer,
  registerReducer,
  userReducer,
});

export default reducer;