import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
export default function Users() {
    const [data, setData] = useState([])
    const [mode,setMode]= useState('online')
    const [name,setName]=useState("")
    const [id,setId]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")

    function updateData(e){
        e.preventDefault();
        console.warn(id,name,email,city);
    }

    function userDelete(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("delete",resp);
               // debugger
            })
        })
    }

    function updateUser(id){
        alert(id-1);
        console.warn(data[id-1]);
        let items = data[id-1];
        
        //setData(data);
        setName(items.name);
        setId(items.id);
        setEmail(items.email);
        setCity(items.address.city);
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        //     method:'DELETE'
        // }).then((result)=>{
        //     result.json().then((resp)=>{
        //         console.warn("delete",resp);
        //        // debugger
        //     })
        // })
    }

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log(result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result));
            })
        }).catch(err=>{
            let collection = localStorage.getItem("users");
            setData(JSON.parse(collection));
            setMode('offline');
        })
    }, [])
    return (
        <div>
            <div>
            <Form onSubmit={updateData}>
                <input type="number" value={id} placeholder="id"/><br/><br/>
                <input type="text" value={name} placeholder="name"/><br/><br/>
                <input type="email" value={email} placeholder="email"/><br/><br/>
                <input type="text" value={city} placeholder="street"/><br/><br/>
                <Button variant="primary" type="submit">
                    Update
            </Button>
            </Form>
            </div><br/><br/>
            <div>
                {
                    mode==='offline'?
                    <div class="alert alert-warning" role="alert">you are in offline mode</div>
                    :null
                }
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {     
                                   
                       data.map((item) => (
                           <tr>
                                 <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td> 
                                <td><button onClick={()=>userDelete(item.id)}>Delete</button></td>
                                <td><button onClick={()=>updateUser(item.id)}>Update</button></td>
                           </tr>   
                     ))
                    } 
                </tbody>

            </Table>
        </div>
    )
}