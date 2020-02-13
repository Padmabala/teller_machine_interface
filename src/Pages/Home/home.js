import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import routes from '../../routes/routes';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component{
    render(){
        const divStyle={
            position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'10px',border: '1px solid'
        }
        return(                       
            <div className="mx-auto" style={divStyle} >
                <NavLink className="nav-link" activeClassName="active" to={routes.withdraw}>Withdraw Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.deposit}>Deposit Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.changePIN}>Change PIN</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.checkBalance}>Check Current Balance</NavLink>         
                <NavLink className="nav-link" activeClassName="active" to={routes.logout}>Logout</NavLink>
            </div>
            
        )
    }
}
export default withRouter(Home);