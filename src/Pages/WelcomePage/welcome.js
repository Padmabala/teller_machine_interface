import React from 'react';
import {NavLink} from 'react-router-dom';

import routes from '../../routes/routes';


const Welcome=(props)=>{
    const divStyle={
        position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'right',padding:'10px',border: '1px solid'
    }
    let loggedIn;
    if(props.location.state.validUser===undefined){
        loggedIn=false;
    }
    else{
        const {validUser}=props.location.state;
        loggedIn=validUser
    }
    return(
        <div className="form-group" style={divStyle}>
            {
                loggedIn
                ?
                <NavLink className="nav-link" activeClassName="active" to={routes.logout}>Logout</NavLink>
                :
                <>
                
                <NavLink className="nav-link" activeClassName="active" to={routes.login}>Login</NavLink>
                <NavLink className="nav-link" activeClassName="active" to={routes.newUser}>New User</NavLink>
                <div class="alert alert-success">Welcome to the Automated Teller machine Interface</div>
                </>
            }
              
          </div>
        );
}
export default Welcome;
