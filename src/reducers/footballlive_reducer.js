import { FETCH_FOOTBALL_LIVE,SOCKET_PRICE_CHANGE,SOCKET_OUTCOME_STATUS } from '../actions/types';
const initialState={events:[],markers:{},outcomes:{}};
import _ from 'lodash';

export default function(state=initialState,action){
	
	switch(action.type){
		case FETCH_FOOTBALL_LIVE:
			return action.payload.data;
		case SOCKET_PRICE_CHANGE:
		case SOCKET_OUTCOME_STATUS:
			if(state.outcomes[action.payload.marketId]){
				console.log(action.type)
				let newState={...state};
				const event=_.filter(state.events,'eventId',action.payload.eventId)[0];
				console.log(event.name);
				const outcome=_.filter(newState.outcomes[action.payload.marketId],'outcomeId',action.payload.outcomeId)[0];
				console.log('CURRENT OUTCOME',outcome.name,outcome.price);
				
				const newOutcome={...outcome,...action.payload};
				newState.outcomes[action.payload.marketId]=newState.outcomes[action.payload.marketId].map(function(v,i){
					if(v.outcomeId==newOutcome.outcomeId){
						v={...v,...newOutcome};
					}
					return v;
				});
				console.log('NEW OUTECOME',newOutcome.name,newOutcome.price);
				return newState;
			}else{
				return state;
			}
		
		default:
			return state;
	}
}