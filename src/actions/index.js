import axios from 'axios'
import _ from 'lodash';
import { 
	FETCH_FOOTBALL_LIVE,
	FETCH_EVENT,
	CHANGE_UNIT,
	FETCH_OUTCOME,
	UPDATE_EVENT
} from './types';

const API_URL="http://localhost:8888";

export function fetchFootballLive(){
	const url=`${API_URL}/football/live?primaryMarkets=true`;
	const request=axios.get(url);
	return {type:FETCH_FOOTBALL_LIVE,payload:request};
}


export function fetchEvent(eventId){
	const url=`${API_URL}/sportsbook/event/${eventId}`;
	const request=axios.get(url);
	return {type:FETCH_EVENT,payload:request};
	
}

export function changeUnit(){
	return {type:CHANGE_UNIT,payload:null};

}

export function fetchOutcome(marketId){
	return function(dispatch,getState){
		const currentState=getState();
		const newEvent={...currentState.current_event};
		const url=`${API_URL}/sportsbook/market/${marketId}`;
		const request=axios.get(url);
		request.then(response=>{
			newEvent.outcomes={...newEvent.outcomes,...response.data.outcomes}
			dispatch({type:UPDATE_EVENT,payload:newEvent});
		});
	}
	

	
}