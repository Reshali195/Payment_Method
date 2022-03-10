import React from "react";
import {Link} from "react-router-dom";

import "../styles/styles.css";

class First extends React.Component {
   constructor(props) {
    super(props);
    this.state = {purpose: '',amount:'',isSubmit:false,formErrors:""};
    this.handleChangePurpose= this.handleChangePurpose.bind(this);
     this.handleChangeAmount= this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     // this.handleClick = this.handleClick.bind(this);
  }
handleChangePurpose(event) {
    this.setState({
     purpose:event.target.value
      
    });
  }
  handleChangeAmount(event) {
    this.setState({
     amount:event.target.value
      
    });
  }
  handleSubmit(event) {
      event.preventDefault();
      this.setState({isSubmit:false,formErrors:"Please Enter an Amount"}); 
      console.log(this.amount);
    
  }
//   handleClick(){
//     this.setState({isSubmit:true})
//   }
  
 
  render() {
   
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <div className="label-input"><label>Purpose of payment</label>
      <input type="text" name="purpose" id="purpose" value={this.state.purpose} onChange={this.handleChangePurpose}/> 
      </div>
      <div className="label-input">
        <label>Amount</label>
        <input type="number" name="amount" id="amount" value={this.state.amount} onChange={this.handleChangeAmount}/>
        {!this.isSubmit && !this.state.amount ?<span style={{color: 'brown'}}>
                {this.state.formErrors}
            </span>:<div></div>}  
        
        </div>
        {!this.isSubmit && this.state.amount<10 ?<div><input  type="submit" value="Pay" id="btn"/></div>:
          <Link to={{pathname:"/details",amount:this.amount}}><input type="submit" value="Pay" id="btn"/></Link>} 

               
    </form>
       
      </>
    );
  }
}

export default First;