import React,{useEffect} from "react";
import Home from "./Home";
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import {auth} from './firebase'
import {useGlobalContext} from './context'
import Spinner from 'react-spinkit'

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

  if(!user){
    return(
      <div className='loader-container'>
        <div className='loader-content'>
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="netflix-clone" />
          <Spinner name='ball-spin-fade-loader' color='#E50914' fadeIn='none'></Spinner>
        </div>
      </div>
    )
  }

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
