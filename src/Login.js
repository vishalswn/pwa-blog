import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
export default function Login() {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [userErr,setUserErr] = useState(false)
    const [passwordErr,setPasswordErr] = useState(false)
    function getFormData(e){
        e.preventDefault()  
        if(user.length<3 || password.length<8){
            alert("type correct values");
        }else{
            alert("all good");
        }
    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true);
        }else{
            setUserErr(false); 
        }
        setUser(item);
    }
    function passwordHandler(e){
        let item = e.target.value;
        if(item.length<8){
            setPasswordErr(true);
        }else{
            setPasswordErr(false); 
        }
        setPassword(item);
    }
    return (
        <div>
            login<br/>
            <Form onSubmit={getFormData}>
                <input type="text" onChange={userHandler}  placeholder="enter id"/>{userErr?<span>User Not Valid</span>:null}<br/><br/>
                <input type="password" onChange={passwordHandler} placeholder="enter password"/>{passwordErr?<span>password Not Valid</span>:null}<br/><br/>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    )
}