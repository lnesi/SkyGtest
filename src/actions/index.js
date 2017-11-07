import axios from 'axios'
import _ from 'lodash';
import { 
	FETCH_FOOTBALL_LIVE,
	FETCH_EVENT 
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