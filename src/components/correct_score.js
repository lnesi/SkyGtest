import React , { Component } from 'react';
import _ from 'lodash';
import { formatOutCome } from '../utils';

export default class CorrectScore extends Component{
	renderRows(){
		let rows=[];
		const homes=_.filter(this.props.outcomes,'type','home');
		const draws=_.filter(this.props.outcomes,'type','draw');
		const aways=_.filter(this.props.outcomes,'type','away');
		
		for(var i=0;i<this.props.outcomes.length;i++){
			let homeValue='-';
			let drawValue='-';
			let awayValue='-';
			let scoreHome='';
			let scoreDraw='';
			let scoreAway='';
			if(homes[i]){
				scoreHome="("+homes[i].score.home+" - "+homes[i].score.away+")"
				homeValue=formatOutCome(homes[i],this.props.use_decimal);
			} 
			if(draws[i]){
				scoreDraw="("+draws[i].score.home+" - "+draws[i].score.away+")"
				drawValue=formatOutCome(draws[i],this.props.use_decimal);
			} 
			if(aways[i]){
				scoreAway="("+aways[i].score.home+" - "+aways[i].score.away+")"
				awayValue=formatOutCome(aways[i],this.props.use_decimal);
			}
			if(homeValue!="-" || drawValue!="-" || awayValue!="-"){
				rows.push(
					<tr key={i}>
						<td><span className="text-danger">{scoreHome}</span> {homeValue}</td>
						<td><span className="text-danger">{scoreDraw}</span> {drawValue}</td>
						<td><span className="text-danger">{scoreAway}</span> {awayValue}</td>
					</tr>
				)
			}
		};
		return rows;
	}
	
	render(){
		if(!this.props.outcomes){
			return <div>Loading</div>
		}

		return(
			<div>
				<table className="table table-dark">	
					<thead>
						<tr>
							<th>Home</th>
							<th>Draw</th>
							<th>Away</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
			)
	}
}