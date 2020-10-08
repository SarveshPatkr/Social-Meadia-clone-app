import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';


function sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow title="Developer's Details"/>
            <div className="Profile__box">
            <SidebarRow src='https://avatars3.githubusercontent.com/u/54939371?s=400&u=3c3a3c243f9a8fa765d2219f206675fe4ba509d7&v=4'
            title='SarveshPatkar' />
            <SidebarRow title="Github Profile:" link="https://github.com/SarveshPatkr"/></div>
        </div>
    )
}

export default sidebar
