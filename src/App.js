import React,{Component} from 'react';
import { Route,Redirect,withRouter} from 'react-router-dom';

import routes from "./routes/routes";
import Home from './Pages/Home/home';

import WithdrawCash from './Pages/WithdrawCash/withdrawCash';
import depositCash from './Pages/DepositCash/depositCash';
import ChangePIN from "./Pages/ChangePIN/changePin"
import checkBalance from './Pages/CheckBalance/checkBalance';
import Login from './Pages/Login/login';
import Logout from './Pages/Logout/logout';
import NewUser from './Pages/NewUser/newUser';
import Welcome from './Pages/WelcomePage/welcome';



class App extends Component{
  state={
    validUser:false,
  }
  componentDidMount(){
    
    if((this.props.location.state!==undefined)&&(this.props.location.state!==null)){
      const {validUser}=this.props.location.state.validUser
      this.setState({
        validUser
      })
    }
    if(this.props.location.pathname==='/'){
      this.props.history.push({pathname:routes.welcome,state:{validUser:this.state.validUser}});
    }
  }
  
  render(){

  const {validUser}=this.state;
  
  return(
    <div className="form-group" >
          
          <Redirect to={{pathname:routes.welcome,state:{validUser:validUser}}}/>       
         
          <Route path={routes.home} component={Home}/>
                <Route path={routes.withdraw} component={WithdrawCash}/>
                <Route path={routes.deposit} component={depositCash}/>
                <Route path={routes.changePIN} component={ChangePIN}/>
                <Route path={routes.checkBalance} component={checkBalance}/>
                <Route path={routes.login} component={Login}/>
                <Route path={routes.newUser} component={NewUser}/>
                <Route path={routes.welcome} component={Welcome}/>
                <Route path={routes.logout} component={Logout}/>
                
      </div>
    );
  }
}
export default withRouter(App);
