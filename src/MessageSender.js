import { Avatar, colors } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useStateValue }from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{ user }, dispach] =useStateValue();
    const [input, setinput] = React.useState(React.initialState);
    const [img, setimg] = React.useState(React.initialState);

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            
            username: user.displayName,
            image: img,

        });




        
        setimg("");
        setinput("");
    }
    return (
        <div className='messagesender'>
            <div className='messagesender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input type='text'
                        value={input}
                        onChange={(e)=>setinput(e.target.value)}
                        placeholder={user.displayName+ " say it here."}
                        className='messagesender__input' />
                    <input placeholder='Image url' 
                        value={img}
                        onChange={(e)=>setimg(e.target.value)}/>
                    <button onClick={handleSubmit} type='submit'></button>
                </form>
            </div>
            <hr/>
            <div className='messagesender__bottom'>
                <div className='messagesender__option'>
                    <VideoCallIcon style={{ color: 'red' }} />
                    <h3>Go Live</h3>
                </div>
                <div className='messagesender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messagesender__option'>
                    <MoodIcon style={{ color: 'yellow' }} />
                    <h3>Mood</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
