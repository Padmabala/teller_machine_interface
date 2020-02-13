import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import fetchData from '../../services/fetchDetails';
import { LOGOUT_API } from '../../constants/serverUrls';
import routes from '../../routes/routes';

class Logout extends Component{
    constructor(props){
        super(props);
        this.clearSession();
    }
    clearSession=async()=>{
        fetchData(LOGOUT_API,"GET")
        .then((result)=>{
            console.log(result);
        })
    }
    render(){
        return(
            <Redirect to={{pathname:routes.welcome,state:{validUser:false}}}/>
        )
    }
}
export default Logout;