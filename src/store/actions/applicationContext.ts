import { StandardAction } from '../common';

export const APPLICATION_CONTEXT_ACTION = 'APPLICATION_CONTEXT_ACTION';

export const requestApplicationContext = (oktaAuth: any): StandardAction => {
  return {
    type: APPLICATION_CONTEXT_ACTION,
    payload: oktaAuth,
  };
};
