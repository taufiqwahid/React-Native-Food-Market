import axios from 'axios';
import {com} from '../../config/API';
import toastMessage from '../../utils/toastMessage';

export const getFood = () => dispatch => {
  axios
    .get(com.food)
    .then(res => {
      dispatch({type: 'SET_FOOD', value: res?.data?.data?.data});
    })
    .catch(err => toastMessage('Gagal memuat Food'));
};

export const getFoodType = types => dispatch => {
  axios
    .get(com.foodType(types))
    .then(res => {
      if (types === 'new_food') {
        dispatch({type: 'SET_NEWTASTE', value: res?.data?.data?.data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res?.data?.data?.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res?.data?.data?.data});
      }
    })
    .catch(err => toastMessage('Gagal memuat Food Popular'));
};
