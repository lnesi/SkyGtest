import React , { Component } from 'react';
import { formatOutCome } from '../utils';

export default class WinDrawWin extends Component{
	renderOutcome(outcome){
		console.log(outcome)
		
	}

	render(){
		let homeWinPrice = formatOutCome(this.props.outcomes[0],this.props.use_decimal);
		let drawPrice = formatOutCome(this.props.outcomes[1],this.props.use_decimal);
		let awayWinPrice = formatOutCome(this.props.outcomes[2],this.props.use_decimal);
		return(
			<div className="outcome-detail">
				<table className="table table-dark">
				<tbody>
					<tr>
						<td>WIN: {homeWinPrice}</td>
						<td>DRAW: {drawPrice}</td>
						<td>WIN: {awayWinPrice}</td>
					</tr>
				</tbody>
				</table>
			</div>
			)
	}
}