import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


function post({  Profilepic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post__top'>
                <div className='pic'>
                    <Avatar className='post__avatar' src={Profilepic} />
                </div>

                <div className='post__topinfo'>
                    <h4>{username}</h4>
                    <p className='timestamp'>  {new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>

            </div>
            <div className='post__image'>
                <img src={image} alt="" />

            </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineRoundedIcon />
                    <p>comments</p>
                </div>
                <div className='post__option'>
                    <SendRoundedIcon />
                    <p>share</p>
                </div>
            </div>


        </div>
    )
}

export default post
