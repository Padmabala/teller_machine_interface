import React,{Component} from 'react';
import {NavLink,Redirect} from 'react-router-dom';
import routes from '../../routes/routes';
import fetchData from "../../services/fetchDetails"
import { GET_BALANCE_API } from '../../constants/serverUrls';
class checkBalance extends Component{
    state={
        message:"",
        reLogin:false
    }

    constructor(props){
        super(props);
        this.getBalance();
    }

    async getBalance(){
        const response =await fetchData(GET_BALANCE_API,"GET");
        if(response.status===440){
            this.setState({
                reLogin:true
            })
        }
        else if(response.status===200){
            const data=await response.json();
            this.setState({
                message:"Your Balance is "+data
            })
        }
        else{
            this.setState({
                message:"Something went wrong. Try again later"
            })
        }        
    }

    render(){
        const {message,reLogin}=this.state;
        const divStyle={
            position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'70px',border: '1px solid'
        }
        return(
            <div>
                {
                reLogin
                ?
                <Redirect to={{
                    pathname:routes.login,
                    state:{validUser:false,message:"Your Session has expired ! Please Login again"}}}/>
                :
                <div className="form-group" style={divStyle}>    
            
                {message}

                <br/><br/><br/>
                <NavLink to={{pathname:routes.home,
                                state:{validUser:true}}}>Go to Home Page</NavLink>

                </div>
                }

            </div>
            
            
        )
    }
}
// checkBalance.propTypes={
//     amount:PropTypes.numb
// }
export default checkBalance;
