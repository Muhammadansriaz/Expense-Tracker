import React, { useState,useContext } from "react";
import {TransContex} from '../TransContex'
import "./NewTransaction.css";

const NewTransaction = () => {
  let [des, set_des] = useState("");
  let [amount, set_amount] = useState("");
  let [trans,add_trans] = useContext(TransContex)

function Handlechange(e){
  e.preventDefault()
  if(des  || amount !== ""){
    add_trans([...trans,{
      des : des ,
      amount : amount
    }]);
  }
 

    set_des("")
    set_amount("")
  
  
}

  return (
    <div className="new">
      <h2>Add New Transaction</h2>
      <hr />
      <div className="farm">
        <h3>Description</h3>
        <form onSubmit = {(e)=>{Handlechange(e)}}>
          <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              value={des}
              onChange={(e) => {
                set_des(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Description"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <h3>Transaction Amount</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                set_amount(e.target.value);
              }}
              className="form-control"
              placeholder="Enter Amount"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <h5>(Add Income As +ve and Expense As -ve)</h5>
          <button type = "submit" className="butn">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default NewTransaction;
