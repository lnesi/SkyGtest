import React , { Component } from 'react';
import numeral from 'numeral';
import { formatOutCome } from '../utils';
export default class StandardMarket extends Component{
	renderOutcome(outcome){
		let price=formatOutCome(outcome,this.props.use_decimal);
		
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