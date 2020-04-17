import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

//list the imports for the reducers to combine

import {reducer as notifications} from 'react-notification-system-redux'


export default (history) => combineReducers({ 
  router: connectRouter(history),
  notifications,
  //list here the reducers files to combine
});