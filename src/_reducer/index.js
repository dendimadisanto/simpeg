
import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { pegawai } from './pegawai.reducer';

const rootReducer = combineReducers({
  users,
  pegawai
});

export default rootReducer;