import { https } from './configServ';

export const orderTableServ = {
  addOrderTable: (data) => {
    return https.post('/user/order-table', data);
  },
};
