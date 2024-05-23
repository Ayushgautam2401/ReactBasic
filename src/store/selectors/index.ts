import { IRextState, getRextState } from 'store/baseProvider/rext';
import { ApplicationState } from 'store/reducers';

export function getToken(state: ApplicationState): string {
  const { okatAuth } = state.applicationContext;
  if (okatAuth) {
    return `Bearer ${okatAuth.getAccessToken()!}`;
  }
  return '';
}

export function getBaseUrl(state: ApplicationState): string {
  return process.env.REACT_APP_API_URL!;
};


export function getTestRextState(state: ApplicationState): IRextState {
  return getRextState(state.testRextState,  {});
}

