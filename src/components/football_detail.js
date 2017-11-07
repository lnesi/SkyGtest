import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchEvent } from '../actions';
import moment from 'moment';
import MarketsTable from './markets_table';

class FootballDetail extends Component{
	constructor(props){
		super(props);
		this.onClickPanel=this.onClickPanel.bind(this);
	}
	componentDidMount(){
		const {eventId} =this.props.match.params;
		this.props.fetchEvent(eventId);
	}
	onClickPanel(marketId){
		document.querySelectorAll(".market-detail").forEach((elm)=>{
			elm.classList.remove('show');
		});
		document.getElementById(marketId).classList.add('show');
	}
	renderMarket(market){
		return(
			<div className="card" key={market.marketId}>
			    <div className="card-header" role="tab" id="headingOne" onClick={()=>{this.onClickPanel(market.marketId)}}>
			      <h5 className="mb-0">{market.name}</h5>
			    </div>

			    <div id={market.marketId} className="collapse market-detail"  data-parent="#accordion">
			      <div className="card-body">
			        
			      </div>
			    </div>
			  </div>
			)
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
					{moment(this.props.event_data.event.startTime).format('MMMM Do YYYY, h:mm:ss a')}
					</div>
				</div>
				<hr/>
				<div className="text-center row ">
					<div className="col col-sm-12">
						<div id="accordion" role="tablist">
 							{markets.map((market)=>{
 								return this.renderMarket(market)
 							})}
						</div>
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {event_data:state.current_event};
}
export default connect(mapStateToProps,{fetchEvent})(FootballDetail)