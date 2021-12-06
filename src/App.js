import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from './components';
import store, {persistor} from './redux/store';
import Router from './router';

const MainApp = () => {
  const isLoading = useSelector(state => state.globalReducer.isLoading);
  const userReducer = useSelector(state => state.userReducer);

  // LOCAL API http://127.0.0.1:8000/api/'
  axios.defaults.baseURL = 'http://foodmarket-backend.buildwithangga.id/api/';
  axios.defaults.headers.common[
    'Authorization'
  ] = `${userReducer.token_type} ${userReducer.access_token}`;
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
