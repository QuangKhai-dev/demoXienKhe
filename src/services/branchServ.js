import { https } from './configServ';

export const branchServ = {
  getAllBranch: () => {
    return https.get('/branch/get-all');
  },
  getCategory: () => {
    return https.get('/category-food');
  },
};
