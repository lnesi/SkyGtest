import { combineReducers } from 'redux';
import FootballLiveReducer from './footballlive_reducer';
import EventReducer from './event_reducer';
import UnitReducer from './unit_reducer';
const rootReducer = combineReducers({
  football_live:  FootballLiveReducer,
  current_event: EventReducer,
  use_decimal:UnitReducer
});

export default rootReducer;
