import axios from 'axios';
import {com} from '../../config/API';
import toastMessage from '../../utils/toastMessage';

export const getOrder = () => dispatch => {
  axios
    .get(com.transaction)
    .then(res => {
      dispatch({
        type: 'SET_ORDER',
        value: res?.data?.data?.data,
      });
    })
    .catch(err => {
      console.log('err SET_ORDER', err.response);
      toastMessage('Gagal memuat Transaction');
    });
};

export const getOrderInProgress = () => dispatch => {
  axios
    .all([
      axios.get(com.transactionStatus('PENDING')),
      axios.get(com.transactionStatus('ON_DELIVERY')),
    ])
    .then(
      axios.spread((pending, onDelivery) => {
        const pendingData = pending?.data?.data?.data;
        const onDeliveryData = onDelivery?.data?.data?.data;
        console.log('pendingData', pendingData);
        console.log('onDeliveryData', onDeliveryData);
        dispatch({
          type: 'SET_IN_PROGRESS',
          value: [...pendingData, ...onDeliveryData],
        });
      }),
    )
    .catch(err => {
      console.log('err Inprogress', err.response);
      toastMessage('Gagal memuat InProgress');
    });
};

export const getOrderPastOrders = () => dispatch => {
  axios
    .all([
      axios.get(com.transactionStatus('SUCCESS')),
      axios.get(com.transactionStatus('CANCELLED')),
    ])
    .then(
      axios.spread((success, cancelled) => {
        const successData = success?.data?.data?.data;
        const cancelledData = cancelled?.data?.data?.data;
        console.log('successData', successData);
        console.log('cancelledData', cancelledData);
        dispatch({
          type: 'SET_PAST_ORDERS',
          value: [...successData, ...cancelledData],
        });
      }),
    )
    .catch(err => {
      console.log('err Inprogress', err.response);
      toastMessage('Gagal memuat InProgress');
    });
};
