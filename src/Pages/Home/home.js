import React,{Component} from 'react';
import {NavLink,Route,Redirect} from 'react-router-dom';

import routes from '../../routes/routes';
import "bootstrap/dist/css/bootstrap.min.css";



class Home extends Component{

    render(){
        
        return(
            <div className="mx-auto" text-align='center' >
                <NavLink className="nav-link" activeClassName="active" to={routes.withdraw}>Withdraw Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.deposit}>Deposit Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.changePIN}>Change PIN</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.checkBalance}>Check Balance</NavLink>                
            </div>
        )
    }
}
export default Home;