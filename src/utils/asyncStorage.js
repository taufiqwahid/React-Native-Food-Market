import AsyncStorage from '@react-native-async-storage/async-storage';
import toastMessage from './toastMessage';

const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    toastMessage('Gagal menyimpan data dari localstorage');
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    toastMessage('Gagal mengambil data dari localstorage');
  }
};
export {getData, storeData};
