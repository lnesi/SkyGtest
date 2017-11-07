import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { changeUnit } from '../actions';
class Header extends Component{
	
	useFraction(status){
		this.props.changeUnit()
	}
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link className="navbar-brand" to="/">Test</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <Link className="nav-link" to="/football/live">Football Live </Link>
			      </li>
			   
			    
			    </ul>

			      	<div className="btn-group" >
					  <label className="btn btn-secondary ">
					    <input type="radio" name="options" checked={this.props.use_decimal} onChange={this.useFraction.bind(this)} /> Decimal
					  </label>
					  <label className="btn btn-secondary">
					    <input type="radio" name="options" checked={!this.props.use_decimal} onChange={this.useFraction.bind(this)} /> Fraction
					  </label>
					</div>

			  </div>
			</nav>
			)
	}
}

function mapStateToProps({use_decimal}){
	return {use_decimal};
}

export default connect(mapStateToProps,{changeUnit})(Header);