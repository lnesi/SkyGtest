import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { formatOutCome } from '../utils';

export default class EventListItem extends Component{
	renderMarket(){
		if(this.props.outcomes){
		
		let homeWinPrice = formatOutCome(this.props.outcomes[0],this.props.use_decimal);
		let drawPrice	 = formatOutCome(this.props.outcomes[1],this.props.use_decimal);
		let awayWinPrice = formatOutCome(this.props.outcomes[2],this.props.use_decimal);

			return(
				<table className="table ">
			    	<thead>
				    	<tr>
				    		<th>WIN</th>
				    		<th>DRAW</th>
				    		<th>WIN</th>
				    	</tr>
				    </thead>
			    	<tbody>
				    	<tr>
				    		<td>{homeWinPrice}</td>
				    		<td>{drawPrice}</td>
				    		<td>{awayWinPrice}</td>
				    	</tr>
			    	</tbody>
			    	
			    </table>

			)
		}
	}
	
	render(){
		const url="/football/"+this.props.event.eventId;
		return (

				<Link to={url} className="list-group-item list-group-item-action flex-column align-items-start">
				    <div className="d-flex w-100 justify-content-between">
				      <h5 className="mb-1">{this.props.event.competitors[0].name} VS {this.props.event.competitors[1].name}</h5>
				      <small>{this.props.event.scores.home} - {this.props.event.scores.away}</small>
				    </div>
				    <p className="mb-1">{this.props.event.linkedEventTypeName}</p>

				    <small>{moment(this.props.event.startTime).format('MMMM Do YYYY, h:mm:ss a')}</small>
				    {this.renderMarket()}
				  </Link>
			)
	}
}