// import { OktaAuth } from "@okta/okta-auth-js";
import {
  StandardAction,
  DEFAULT_INITIAL_ACTION_STATE
} from 'store/common';

import {
  APPLICATION_CONTEXT_ACTION
} from "store/actions"
export interface ApplicationContextState {
  baseUrl: string;
  okatAuth: any; //OktaAuth;
}

const INITIAL_STATE: ApplicationContextState = {
  baseUrl: ``,
  okatAuth: undefined!,
};

const applicationContextReducer = (
  state: ApplicationContextState = INITIAL_STATE,
  action: StandardAction = DEFAULT_INITIAL_ACTION_STATE,
): ApplicationContextState => {
  const { type, payload } = action;
  if (type === APPLICATION_CONTEXT_ACTION) {
    return { ...state, okatAuth: payload };
  } else {
    return state;
  }
};

export default applicationContextReducer;
