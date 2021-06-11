import React,{useContext} from "react";
import "./Balance.css";
import {TransContex} from '../TransContex'

const Balance = () => {
  let [trans,add_trans] = useContext(TransContex)
  var income  = 0;
  var expense =  0;
  var sum = 0 ;

  
  for (let i = 0; i < trans.length; i++) {
    if(parseInt((trans[i].amount), 10) >0 ){
      income+= parseInt((trans[i].amount), 10)
    }
    if(parseInt((trans[i].amount), 10) < 0 ){
      expense+= parseInt((trans[i].amount), 10)
    }
    if(trans[i].amount !== undefined){

      sum+= parseInt((trans[i].amount), 10)
    }
  }
  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <hr />
      <h1 className = "blue">${sum}</h1>
      <div className="income">
        <d1v>
          <h5>Income</h5>
          <h2 className = "green">${income}</h2>
        </d1v>

        <div className = "v1"></div>

        <d1v>
          <h5>Expense</h5>
          <h2 className = "red">${expense}</h2>
        </d1v>
      </div>
    </div>
  );
};

export default Balance;
