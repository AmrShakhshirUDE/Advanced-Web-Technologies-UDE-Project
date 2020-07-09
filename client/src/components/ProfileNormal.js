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
            'newImage':'',
            secondimage:'',
            Open:false,
            msg:'',
            'file':decoded.identity.file,
            uri:'',
            'serverUrl': UrlContext._currentValue
        }
    }
    

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            email: decoded.identity.email,
            image:this.state.newImage
        })
        this.getImage(this.state.file)
    }

    //     getFile(e) {
    //     console.log('getfile')
    //     const urlFile =this.state.serverUrl +'file/'+e
    //     console.log(urlFile)
    //     axios({
    //       url: urlFile, //your url
    //       method: 'Get',
    //       responseType: 'blob',
    //       data:{
    //         "file":  e
    //       } // important
    //     }).then((response) => {
    //        const url = window.URL.createObjectURL(new Blob([response.data]));
    //        const link = document.createElement('a');
    //        this.setState({
    //            uri:urlFile
    //        })
    //        //link.href = url;
    //        //link.setAttribute('download',fName); //or any other extension
    //        //document.body.appendChild(link);
    //       // link.click();
    //     });
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
        },(e)=>this.imageUpload(e));
    }

    imageUpload(e){
        let email = this.state.email
        let  file = this.state.file
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
            this.getImage(file.name)                        
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
                {/* <button onClick={this.imageUpload()}>upload</button> */}

                {/* <button onClick={()=>this.fileInput.click()}>Choose pictures</button><br/> */}
               <br></br>
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
                            <Button className="btn btn-primary mt-2" size="md" onClick={this.props.clickMe}>update</Button>
                          </td>
                        </tr>
                        </tbody>
                  </table>
                

                
            </div>
        )
    }

}
