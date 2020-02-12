import React,{Component} from 'react';
import { Route,Redirect } from 'react-router-dom';

import routes from "./routes/routes";
import Home from './Pages/Home/home';

import WithdrawCash from './Pages/WithdrawCash/withdrawCash';
import depositCash from './Pages/DepositCash/depositCash';
import ChangePIN from "./Pages/ChangePIN/changePin"
import checkBalance from './Pages/CheckBalance/checkBalance';
import Login from './Pages/Login/login';
import Logout from './Pages/Logout/logout';


class App extends Component{
  state={
    validUser:true,
    message:""
  }
  
  IsValidUser=(isValid,message)=>{
    this.setState({
      validUser:isValid,
      message
    })
  }
  render(){
    const {validUser,message}=this.state;
   
  return(
      <div className="form-group">
          {

            validUser
            ?
            <Redirect to={routes.home}/>
            
            :

            <Login message={message} IsValidUser={this.IsValidUser}/>
          }
          <Route path={routes.home} component={Home}/>
                <Route path={routes.withdraw} component={WithdrawCash}/>
                <Route path={routes.deposit} component={depositCash}/>
                <Route path={routes.changePIN} component={ChangePIN}/>
                <Route path={routes.checkBalance} component={checkBalance}/>
                <Route path={routes.login} component={Login}/>
                
      </div>
    );
  }
}
export default App;
