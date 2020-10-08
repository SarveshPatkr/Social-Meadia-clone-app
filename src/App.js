import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import Header from './Header';
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue}  from './StateProvider';


function App() {
  const [ { user }, dispach] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (<Login/>):( 
      <>
      < Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets/>
        
      </div>
      </>
      )}
    </div>
  );
}

export default App;
