
function User(props){
    const data ={name:"vishal",email:"v@123"}
    return(
        <div>
            {/* <h1>Parent to child communication:{props.name}</h1> */}
            <button onClick={()=>props.alert(data)}>child to parent </button>
        </div>    
    )
}
export default User;