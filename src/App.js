import React,{Component} from 'react';
import { Route,Redirect } from 'react-router-dom';

import routes from "./routes/routes";
import Home from './Pages/Home/home';
import CustomInputField from './CommonComponents/CustomInputField';
import WithdrawCash from './Pages/WithdrawCash/withdrawCash';
import depositCash from './Pages/DepositCash/depositCash';
import ChangePIN from "./Pages/ChangePIN/changePin"
import checkBalance from './Pages/CheckBalance/checkBalance';

class App extends Component{
  state={
    customerId:"",
    validUser:true,
    message:""
  }
  onFieldChange=(event,targetField)=>{
    this.setState({
      [targetField]:event.target.value
    })
  }
  validateUser=(event)=>{
    this.setState({
      message:"Incorrect Customer Id/PIN",
      validUser:false
    })
    // this.setState({
    //   validUser:true
    // })
    
  }
  
  render(){
    const {customerId,validUser,message}=this.state;
    return (
      <div className="App">
          {

            validUser
            ?
            <Redirect to={routes.home}/>
            :
            <CustomInputField id={"customerId"} customInputLabel={"Your Customer Id"} value={customerId} 
                              message={message} onFieldChange={this.onFieldChange} onSubmit={this.validateUser}></CustomInputField>
          }
          <Route path={routes.home} component={Home}/>
                <Route path={routes.withdraw} component={WithdrawCash}/>
                <Route path={routes.deposit} component={depositCash}/>
                <Route path={routes.changePIN} component={ChangePIN}/>
                <Route path={routes.checkBalance} component={checkBalance}/>
      </div>
    );
  }
}
export default App;
