import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import {useStateValue}  from './StateProvider';
import { actionType } from './reducer';
function Login() {
    const [ state, dispach] = useStateValue();
    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispach({
                type:actionType.SET_USER,
                user:result.user,
            })
            
        }).catch((error) =>alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://img.icons8.com/nolan/64/target-weld.png' />
            </div>
            <div className='login__name'>
                <h2>Social Media</h2>
            </div>
            <Button  type='submit' onClick={signIn}>Log In</Button>
            
        </div>
    )
}
export default Login;
