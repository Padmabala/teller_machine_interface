import React,{Component} from 'react';
import { postDetails } from '../../services/postDetails';
import { CHANGE_PIN_API } from '../../constants/serverUrls';
import {NavLink,Redirect} from 'react-router-dom';
import routes from '../../routes/routes';
class ChangePIN extends Component
{
    state={
        oldPin:"",
        newPin:"",
        isValid:false,
        message:"",
        reLogin:false
    }
    onOldPinFieldChange=(event)=>{
        this.setState({
          oldPin:event.target.value
        })
      }
      onNewPinFieldChange=(event)=>{
        this.setState({
          newPin:event.target.value
        })
      }
    validate=async(event)=>{
        const {oldPin,newPin}=this.state;
            const requestBody = {
                oldPin,
                newPin
            };
            const resp = await postDetails(CHANGE_PIN_API, "POST", requestBody);
            if(resp.status===200){
                this.setState({message:"Your Pin has been updated"})
            }
            else if(resp.status===440){
                this.setState({
                    reLogin:true
                })
            }
            else{
                this.setState({message:"Incorrect Old Pin or something went wrong."})
            }
            this.clear(); 
    }
    clear=()=>{
        this.setState({
            oldPin:"",
            newPin:""
        })
    }
    render(){
        const {oldPin,newPin,message,reLogin}=this.state;
        const divStyle={
            position:'fixed',top:'20%',left: '30%',width:'30em',height:'18em','text-align':'center',padding:'70px',border: '1px solid'
        }
        return(
            <div className="form-group" style={divStyle}>   
                {
                reLogin
                ?
                <Redirect to={{
                    pathname:routes.login,
                    state:{validUser:false,message:"Your Session has expired ! Please Login again"}}}/>
                :
                <> 
                <label htmlFor="oldPin">Enter the Old Pin</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text" id={oldPin} value={oldPin} required={true} onChange={this.onOldPinFieldChange} />
                
                <label htmlFor="newPin">Enter the New Pin</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text" id={newPin} value={newPin} required={true} onChange={this.onNewPinFieldChange} />

                <br/><br/>
                   <button onClick={this.validate} align='center'>Submit</button>
                <br/><br/>
                <div align="center">{message}</div>
                <NavLink to={{pathname:routes.home,
                                state:{validUser:true}}}>Go to Home Page</NavLink>
                </>
                }
            </div>
        )
    }
}
export default ChangePIN;