import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
export default function Users() {
    const [data, setData] = useState([])
    const [mode,setMode]= useState('online')
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
                                <td>{item.address.street}</td>
                                <td><Link to={"/user/"+item.id}><h6>{item.name}</h6></Link></td>
                           </tr>   
                     ))
                    } 
                </tbody>

            </Table>
        </div>
    )
}