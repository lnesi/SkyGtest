import React , { Component } from 'react';
import numeral from 'numeral';
export default class StandardMarket extends Component{
	renderOutcome(outcome){
		let price=numeral(outcome.price.decimal).format('0.00');
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