import { CHANGE_UNIT } from '../actions/types';


export default function(state=true,action){
	switch(action.type){
		case CHANGE_UNIT:
			return !state;
		default:
			return state;
	}
}