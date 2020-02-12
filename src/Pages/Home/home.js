import React,{Component} from 'react';
import {NavLink,Route,Redirect} from 'react-router-dom';

import routes from '../../routes/routes';
import "bootstrap/dist/css/bootstrap.min.css";
import fetchData from '../../services/fetchDetails';
import { LOGOUT_API } from '../../constants/serverUrls';



class Home extends Component{

    state={
        islogOut:false
    }
    logout=()=>{
        fetchData(LOGOUT_API,"GET")
        .then((result)=>{
            console.log("successfully Logged out");
            this.setState({
                islogOut:true
            })
        })
    }

    render(){
        const {islogOut}=this.state;
        return(
            islogOut
            ?
            <Redirect to={routes.login}></Redirect>
            :
            <div className="mx-auto" text-align='center' >
                <NavLink className="nav-link" activeClassName="active" to={routes.withdraw}>Withdraw Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.deposit}>Deposit Cash</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.changePIN}>Change PIN</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.checkBalance}>Check Current Balance</NavLink>
                
                
            </div>
        )
    }
}
export default Home;