export const com = {
  login: 'login',
  register: 'register',
  logout: 'logout',
  uploadPhoto: 'user/photo',
  updateUser: 'user',
  food: 'food',
  foodType: types => `food?types=${types}`,
  checkout: 'checkout',
  transaction: 'transaction',
  transactionStatus: status => `transaction?status=${status}`,
  transactionUpdate: id => `transaction/${id}`,
};
