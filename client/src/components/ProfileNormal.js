import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import {Modal, ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import axios from 'axios';
import { UrlContext } from '../contexts/urlContext';


export default class ProfileNormal extends Component{
    constructor(props) {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        super(props)
        this.state = {
            'username':decoded.identity.username,
            'email': decoded.identity.email,
            'image':decoded.identity.file,
            secondimage:'',
            Open:false,
            msg:'',
            'file':decoded.identity.file,
            uri:'',
            'serverUrl': UrlContext._currentValue,
            "result":"",
            "resToken":"",
            "mounted":false,
        }
    }
    

    componentDidMount () {
        // this.logOut()
        // const user = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // this.login(user)
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            email: decoded.identity.email,
            file:decoded.identity.file
        },()=>this.getImage(this.state.file), console.log(this.state.file))
        
    }

    // logOut (e) {     
    //     e.preventDefault()
    //     localStorage.removeItem('usertoken')
    //     this.props.history.push(`/login`)
    // }
    


    // login = user => {
    //     if (this.state.mounted){
    //         this.logOut()
    //     }
    //     return axios
    //         .post("users/login", {
    //             email: user.email,
    //             password: user.password
    //         })
    //         .then(response => {
    //             this.setState({
    //                 "result":response.data.msg
    //             })
    //             localStorage.setItem('usertoken', response.data.token)
    //             return response.data.token
                
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }



    getImage(file){
        if(this.state.file!=='images/Propic1.png'){
            this.setState({
                image: this.state.serverUrl +'file/'+ file
            })
         }
         else{
            this.setState({
                image: this.state.image
            })
         }
    }

  
    handleFile = (e) => {
        const newFile =e.target.files[0]
        this.setState({
            file:newFile,
        // },(e)=>this.imageUpload(e));
        },(e)=>this.getImage(this.state.file.name));
    }

    imageUpload(e,file){
        let email = this.state.email
        // let  file = this.state.file
        console.log(file)
        let formdata = new FormData()
        formdata.append('file',file)
        formdata.append('email',email)
        axios({
            url: this.state.serverUrl +'profileUpload',
            method: 'POST',
            headers:{
                authorization:'usertoken'
            },
            data:formdata

        }).then(response => {
            
            this.setState({
                // "result":response.data.msg,
                // "mounted":true,
            })
            //  this.logOut(e)                       
        })
    }
   
    render() {
        return (
            <div>
                <div className="col-sm-8 mx-auto">
                    <h2 className="text-center">{this.state.username}</h2>
                </div>
                
                <div className="font-weight-bold text-success">{this.state.msg}</div>

                <div className="col-sm-8 mx-auto" style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    <img src={this.state.image} style={{ "width":'40%',"height":'auto', "border":'solid 1px lightgrey', "borderRadius": "25%"}} title={this.state.username}/> 
                </div>  
                

                <div className="" style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    {/* <label>Chane Image</label><br/> */}
                    <input className="my-2 btn btn-secondary btn-xs" 
                    type="file" name="file"
                    accept="image/png, image/jpeg" onChange={(e)=>this.handleFile(e)}/>
                    {/* Change Image</button> */}
                </div>
                <div  style={{"display":"flex", "justifyContent": "center", "alignItems": "center"}}>
                    <button className="btn btn-primary mt-2" onClick={(e)=>this.imageUpload(e,this.state.file)}>update Image</button>                        
                </div>

                {/* <button onClick={()=>this.fileInput.click()}>Choose pictures</button><br/> */}
               <br></br>
               <div className="">
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Username</td>
                            <td onChange={this.change}>{this.state.username} </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td onChange={this.change}>{this.state.email} </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button className="btn btn-primary mt-2" size="lg" onClick={this.props.clickMe}>update</Button>
                            </td>
                            </tr>
                            </tbody>
                    </table>
               </div>
                

                
            </div>
        )
    }

}
