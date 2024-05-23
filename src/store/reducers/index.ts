import { combineReducers } from 'redux';
import applicationContextReducer, {
  ApplicationContextState,
} from './applicationContext';
import { IRextReducer } from 'store/baseProvider/rext';
import { testRext } from 'store/rext';

export interface ApplicationState {
  applicationContext: ApplicationContextState;
  testRextState: IRextReducer;
}

const rootReducer = () =>
  combineReducers<ApplicationState>({
    applicationContext: applicationContextReducer,
    testRextState: testRext.reducers,
  });

export default rootReducer;
