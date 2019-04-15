import { combineReducers } from 'redux';

import modal from './modal';
import developers from './developers';

export default combineReducers({
  modal,
  developers,
});
