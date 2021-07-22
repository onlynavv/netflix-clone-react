import React,{useEffect} from "react";
import Home from "./Home";
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import {auth} from './firebase'
import {useGlobalContext} from './context'

function App() {

  const {dispatch,user} = useGlobalContext()

  useEffect(() => {
    const activeUser = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        dispatch({type:'ADD_USER',payload:userAuth})
      }else{
        dispatch({type:'SET_USER'})
      }
    })
    return activeUser
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        {!user ? <Login /> : (
            <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/profile'>
                  <Profile />
                </Route>
            </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
