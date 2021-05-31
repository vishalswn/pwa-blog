import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
export default function Home() {
    const [status, setStatus] = React.useState(true)
    const [name,setName] = useState("")
    const [tnc,setTnc] = useState(false)
    const [interest,setInterest] = useState("")
    function getFormData(e){
        e.preventDefault()  
       // console.warn({name,tnc,interest});
        let data = [{name,tnc,interest}];
        console.warn(data);
        if (localStorage.getItem("item") === null) {
            localStorage.setItem('item',JSON.stringify(data));
        }else{
           // var localDatas = localStorage.getItem('item');

             let items = [];
             items = JSON.parse(localStorage.getItem('item'));
             items.push(data);
             localStorage.setItem('item',JSON.stringify(items));
        }
         
        
    }
    return (
        <div>
            {
                status ? <h1>welcome to home componenet</h1> : null
            }

            {/* <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> */}
            <button onClick={() => setStatus(!status)}>Toggle</button><br/><br/>
            <Form onSubmit={getFormData}>
                <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="enter name"/><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select option</option>
                    <option>mp</option>
                    <option>rajsthan</option>
                    <option>gujrat</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and condition</span><br/><br/>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    )
}