import React, { useContext } from "react";
import "./TransactionHistory.css";
import { TransContex } from "../TransContex";

const TransactionHistory = () => {
  let [trans, add_trans] = useContext(TransContex);
  function dellItem(ind){
    trans.splice(ind,1)
    add_trans([...trans,trans])
  }
  return (
    <div className="history">
      <h2>Transaction History</h2>
      <hr />
      {trans.map((trans, ind) => {
        if (trans.amount || trans.des !== undefined) {
          return (
            <div key={ind} className="data">
              <h3>{trans.des}</h3>
              <h3>{trans.amount} $</h3>
              <button onClick = {()=>{dellItem(ind)}} className="btn">Delete</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TransactionHistory;
