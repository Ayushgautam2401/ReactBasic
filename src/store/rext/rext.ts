import { createRext, IRext } from 'store/baseProvider/rext';
import { getBaseUrl, getToken } from 'store/selectors';


export const testRext: IRext = createRext({
  identity: 'testRext',
  getBaseUrl: getBaseUrl,
  getToken: getToken,
  transformation: (data: any) => {
    return data;
  },
});
