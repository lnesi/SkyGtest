import React , { Component } from 'react';

export default class WinDrawWin extends Component{
	renderOutcome(outcome){
		console.log(outcome)
		
	}

	render(){
		let homeWinPrice = this.props.outcomes[0].price.decimal
		let drawPrice = this.props.outcomes[1].price.decimal
		let awayWinPrice = this.props.outcomes[2].price.decimal
		if(!this.props.use_decimal){
			homeWinPrice = this.props.outcomes[0].price.num+"/"+this.props.outcomes[0].price.den
			drawPrice = this.props.outcomes[1].price.num+"/"+this.props.outcomes[1].price.den
			awayWinPrice = this.props.outcomes[2].price.num+"/"+this.props.outcomes[2].price.den
		}
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