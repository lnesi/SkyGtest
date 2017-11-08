import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchEvent } from '../actions';
import moment from 'moment';
import MarketPanel from './market_panel';

class FootballDetail extends Component{
	
	componentDidMount(){
		const {eventId} =this.props.match.params;
		this.props.fetchEvent(eventId);
		
	}

	
	render(){
		if(!this.props.event_data){
			return (
				<div>Loading</div>
				)
		}
		const markets=this.props.event_data.markets[this.props.event_data.event.eventId];
		
		return (
			<div className="football-details">
				
				<div className="text-center row ">
					<div className="col col-sm-12">
						{this.props.event_data.event.linkedEventTypeName}
					</div>
				</div>
				<div className="text-center row ">
					 <div className="col col-sm-5 text-right h2">{this.props.event_data.event.competitors[0].name}</div>
					 <div className="col col-sm-2 text-center h1">VS</div>
					 <div className="col col-sm-5 text-left h2">{this.props.event_data.event.competitors[1].name}</div>
				</div>

				<div className="score row">
					<div className="col col-sm-5 text-right h4">{this.props.event_data.event.scores.home}</div>
					<div className="col col-sm-2 text-center h3">-</div>
					<div className="col col-sm-5 text-left h4">{this.props.event_data.event.scores.away}</div>
				</div>
				<div className="text-center row ">
					<div className="col col-sm-12">
					{this.props.event_data.event.typeName} - {moment(this.props.event_data.event.startTime).format('MMMM Do YYYY, h:mm:ss a')}
					</div>
				</div>
				<hr/>
				<div className="text-center row ">
					<div className="col col-sm-12">
						<div id="accordion" role="tablist">
 							{markets.map((market)=>{
 								return (<MarketPanel  use_decimal={this.props.use_decimal} market={market} outcomes={this.props.event_data.outcomes[market.marketId]} key={market.marketId} />)
 							})}
						</div>
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {event_data:state.current_event,use_decimal:state.use_decimal};
}
export default connect(mapStateToProps,{fetchEvent})(FootballDetail)