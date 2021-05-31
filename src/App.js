//import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users' ;
import User from './User' ;
import Profile from './Profile';
import Login from './Login';
import Member from './Member';
function App() {

  function getData(){
    alert("hello from apps");
  }
  function parentAlert(dataname){
    console.warn(dataname);
  }
  // let data="parent send a name vishal to child"

  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" variant="dark">
        {/* <Container> */}
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link to="about">About</Link></Nav.Link>
            <Nav.Link ><Link to="users">Users</Link></Nav.Link>
            <Nav.Link ><Link to="profile">Profile</Link></Nav.Link>
            <Nav.Link ><Link to="login">Login</Link></Nav.Link>
            <Nav.Link ><Link to="parenttochild">Parent To Child</Link></Nav.Link>
          </Nav>
        {/* </Container> */}
      </Navbar>
      <Switch>
      
      <Route component={About} path="/about"></Route>
       <Route component={Users} path="/users"></Route>
       <Route component={Profile} path="/profile"></Route>
       <Route component={Login} path="/login"></Route>
       <Route component={User} path="/parenttochild"></Route>
       <Route component={Home} path="/"></Route>
      </Switch>
      </Router><br/>
      <div>
        <Member data={getData} /><br/><br/>
      </div>
      <div>
        <User alert={parentAlert}/>
      </div>
    </div>
  );
}

export default App;
