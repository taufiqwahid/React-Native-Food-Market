import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';
import {foodReducer} from './food';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const appReducer = combineReducers({
  globalReducer,
  registerReducer,
  userReducer,
  foodReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // for all keys defined in your persistConfig(s)
    AsyncStorage.removeItem('persist:root');
    // storage.removeItem('persist:otherKey')

    state = undefined;

    const navigation = action.value;

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
