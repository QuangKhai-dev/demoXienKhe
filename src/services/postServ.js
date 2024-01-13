import { https } from './configServ';

export const postServ = {
  getAllPost: () => {
    return https.get('/post');
  },
};
