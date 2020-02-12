import React,{Component,useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { postDetails } from "../../services/postDetails"

import routes from "../../routes/routes";
import { LOGIN_API } from '../../constants/serverUrls';

class  Login extends Component{
    constructor(props){
        super(props);
        //const {IsValidUser,message}=this.props;
    }
    state={
        custId:"",
        pin:""
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
        const resp=await postDetails(LOGIN_API,"POST",requestBody)
        if(resp.status===200){
          this.props.IsValidUser(true);
        }
        else{
            this.props.IsValidUser(false,"Incorrect Customer Id/PIN");
        }   
      }
    
    render(){
        const {custId,pin}=this.state;
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
                <div align="center">{this.props.message}</div>
                <NavLink to={routes.home}>Go to Home Page</NavLink>
            </div>
    )
        }
}

export default Login;