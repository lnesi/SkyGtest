import React, { Component } from 'react';
import WinDrawWin from './win_draw_win';
import CorrectScore from './correct_score';
import StandardMarket from './standard_market';
import { connect } from 'react-redux';
import { fetchOutcome } from '../actions';

class MarketPanel extends Component{
	constructor(props){
		super(props);
		this.onClickPanel=this.onClickPanel.bind(this);
	}
	onClickPanel(marketId){
		document.querySelectorAll(".market-detail").forEach((elm)=>{
			elm.classList.remove('show');
		});
		if(!this.refs[marketId].props.outcomes){
			this.props.fetchOutcome(marketId);
		}
		document.getElementById(marketId).classList.add('show');
	}
	renderOutcomes(){
		switch(this.props.market.type){
			case "win-draw-win":
				return <WinDrawWin ref={this.props.market.marketId} use_decimal={this.props.use_decimal} market={this.props.market} outcomes={this.props.outcomes} />;
			case "correct-score":
				return <CorrectScore ref={this.props.market.marketId} use_decimal={this.props.use_decimal} market={this.props.market} outcomes={this.props.outcomes} />;
			default:
				return <StandardMarket ref={this.props.market.marketId} use_decimal={this.props.use_decimal} market={this.props.market} outcomes={this.props.outcomes} />
		}
		console.log(this.props.market.type);
	}
	render(){
		const market=this.props.market;
		return(
			<div className="card" key={market.marketId}>
			    <div className="card-header" role="tab" id="headingOne" onClick={()=>{this.onClickPanel(market.marketId)}}>
			      <h5 className="mb-0">{market.name}</h5>
			    </div>

			    <div id={market.marketId} className="collapse market-detail"  data-parent="#accordion">
			      <div className="card-body">
			        {this.renderOutcomes()}
			      </div>
			    </div>
			</div>

		)


	}
} 
	

export default connect(null,{fetchOutcome})(MarketPanel);