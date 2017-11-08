import numeral from 'numeral';
import React from 'react';
export function formatOutCome(outecome,use_decimals=true){
	if(outecome){
		if(outecome.status.suspended) return <strong className="text-danger">Susp</strong>;
		if(!use_decimals){
			return outecome.price.num+"/"+outecome.price.den;
		}
		return numeral(outecome.price.decimal).format('0.00');
	}
	return '-';
}