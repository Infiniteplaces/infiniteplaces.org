import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import status from 'state/reducers/status';
import global from 'state/reducers/global';
import pages from 'state/reducers/pages';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    global,
    status,
    pages,
  });

export default createRootReducer;
