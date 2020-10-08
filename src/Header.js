import React from 'react';
import {useStateValue }from './StateProvider';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {

    const [{ user }, dispach] =useStateValue();
    
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://img.icons8.com/nolan/64/target-weld.png" />
                <div className='header__input'>
                    
                    <SearchIcon />
                    <input id='input' type='text' placeholder="Search" />
                </div>

            </div>
            <div className='header__middle'>
            
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <PeopleIcon fontSize='large' />
                </div>


            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default Header;
