import { FETCH_FOOTBALL_LIVE } from '../actions/types';
const initialState={events:[],markers:{},outcomes:{}};

export default function(state=initialState,action){
	
	switch(action.type){
		case FETCH_FOOTBALL_LIVE:
			return action.payload.data;
		default:
			return state;
	}
}