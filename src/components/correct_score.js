import React , { Component } from 'react';
import _ from 'lodash';
export default class CorrectScore extends Component{
	renderRows(){
		console.log(this.props.outcomes)
		const homes=_.filter(this.props.outcomes,'type','home');
		const draws=_.filter(this.props.outcomes,'type','draw');
		const aways=_.filter(this.props.outcomes,'type','away');
		const rows=homes.map((v,i)=>{
			let homeValue='-';
			let drawValue='-';
			let awayValue='-';
			let scoreHome='';
			let scoreDraw='';
			let scoreAway='';
			if(homes[i]){
				scoreHome="("+homes[i].score.home+" - "+homes[i].score.away+")"
				homeValue=this.formatValue(homes[i].price);
			} 
			if(draws[i]){
				scoreDraw="("+draws[i].score.home+" - "+draws[i].score.away+")"
				drawValue=this.formatValue(draws[i].price);
			} 
			if(aways[i]){
				scoreAway="("+aways[i].score.home+" - "+aways[i].score.away+")"
				 awayValue=this.formatValue(aways[i].price);
			}
			
			return (
				<tr key={i}>
					<td><span className="text-danger">{scoreHome}</span> {homeValue}</td>
					<td><span className="text-danger">{scoreDraw}</span> {drawValue}</td>
					<td><span className="text-danger">{scoreAway}</span> {awayValue}</td>
				</tr>
			)
		});
		return rows;
	}
	formatValue(price){
		if(!this.props.use_decimal) return price.num+"/"+price.den;
		return price.decimal;
	}
	render(){

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