import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchFootballLive } from '../actions';
import EventListItem from './eventlist_item';

class FootballLive extends Component{
	componentWillMount(){
		this.props.fetchFootballLive();
	}

	render(){
		const eventList=this.props.events.map((event)=>{
			return <EventListItem {...event} key={event.eventId} />
		});
		return (
			<div className="football-live list-group">
				{eventList}
			</div>
			)
	}
}
function mapStateToProps(state){
	return {events:state.football_live.events};
}
export default connect(mapStateToProps,{fetchFootballLive})(FootballLive)