import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title, link }) {
    return (
        <div className='sidebarrow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            {title && <h3>{title}</h3>}
            {link && <a href={link}>Sarvesh</a>}

        </div>
    )
}

export default SidebarRow;
