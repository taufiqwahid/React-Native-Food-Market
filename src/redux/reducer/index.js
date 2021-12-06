import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';

const rootReducer = combineReducers({
  globalReducer,
  registerReducer,
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
