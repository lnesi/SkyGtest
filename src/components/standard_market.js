import React , { Component } from 'react';

export default class StandardMarket extends Component{
	renderOutcome(outcome){
		let price=outcome.price.decimal;
		if(!this.props.use_decimal) price=outcome.price.num+"/"+outcome.price.den;
		return (
			<tr key={outcome.outcomeId}>
				<td className="text-left">{outcome.name}</td>
				<td>{price}</td>
			</tr>
		)
	}
	render(){
		if(!this.props.outcomes){
			return <div>Loading...</div>
		}
		return(

			<div className="outcome-detail">
				<table className="table table-dark">
					<tbody>
					{this.props.outcomes.map((outcome)=>{
						return this.renderOutcome(outcome);
					})}
					</tbody>
				</table>
			</div>
			)
	}
}