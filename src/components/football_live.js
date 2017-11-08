import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchFootballLive } from '../actions';
import EventListItem from './eventlist_item';

class FootballLive extends Component{
	componentWillMount(){
		this.props.fetchFootballLive();
	}

	render(){
		const eventList=this.props.football_live.events.map((event)=>{
			let market=null;
			if(this.props.football_live.markets[event.eventId]) market = this.props.football_live.markets[event.eventId][0];
			let outcomes=[];
			if(market){
				if(this.props.football_live.outcomes[market.marketId]) outcomes = this.props.football_live.outcomes[market.marketId];
			}
			return <EventListItem event={event} use_decimal={this.props.use_decimal} market={market} key={event.eventId} outcomes={outcomes} />
		});
		return (
			<div className="football-live list-group">
				{eventList}
			</div>
			)
	}
}
function mapStateToProps(state){
	return {football_live:state.football_live,use_decimal:state.use_decimal};
}
export default connect(mapStateToProps,{fetchFootballLive})(FootballLive)