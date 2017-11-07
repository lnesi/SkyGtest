import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
export default class EventListItem extends Component{
	render(){
		const url="/football/"+this.props.eventId;
		return (

				<Link to={url} className="list-group-item list-group-item-action flex-column align-items-start">
				    <div className="d-flex w-100 justify-content-between">
				      <h5 className="mb-1">{this.props.competitors[0].name} VS {this.props.competitors[1].name}</h5>
				      <small>{this.props.scores.home} - {this.props.scores.away}</small>
				    </div>
				    <p className="mb-1">{this.props.linkedEventTypeName}</p>

				    <small>{moment(this.props.startTime).format('MMMM Do YYYY, h:mm:ss a')}</small>
				  </Link>
			)
	}
}