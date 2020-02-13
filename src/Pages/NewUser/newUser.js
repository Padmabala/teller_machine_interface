import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { postDetails } from "../../services/postDetails"
import routes from '../../routes/routes';

import { NEW_USER_API } from '../../constants/serverUrls';

class  NewUser extends Component{
    state={
        custId:"",
        pin:"",
        message:""
    }


     onIdFieldChange=(event)=>{
        this.setState({
            custId:event.target.value
        })
      }
    onPinFieldChange=(event)=>{
        this.setState({
            pin:event.target.value
        })
      }
    validateUser=async(event)=>{
        const {custId,pin}=this.state;
        const requestBody={
          custId,
          pin
        }
        const resp=await postDetails(NEW_USER_API,"POST",requestBody)
        if(resp.status===200){
          this.setState({
            message:"User Registered with minimum balance of 1000 .Please Login with customer id and Pin"
          })
        }
        else{
          this.setState({
            validUser:false,
            message:"Customer Id already exists. Please give any other to register"
          })
        }   
      }
    
    render(){
        const {custId,pin,message}=this.state;
        const divStyle={
            position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'70px',border: '1px solid'
        }
        return(
        
          <div className="form-group" style={divStyle}>
                <label htmlFor={custId}>Customer Id</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text" id={custId} value={custId} required={true} onChange={this.onIdFieldChange} />
                
                <label htmlFor={pin}>PIN No.</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text" id={pin} value={pin} required={true} onChange={this.onPinFieldChange} />
                <br/><br/>
                <button onClick={this.validateUser} align='center'>Submit</button>
                <br/><br/>
                <div align="center">{message}</div>
                <NavLink to={{pathname:routes.welcome,state:{validUser:false}}}>Go to Home Page</NavLink>
            </div>
    )
        }
}

export default NewUser;