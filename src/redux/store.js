import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import persistedReducer from './reducer';

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
