import React from 'react'
import './Widgets.css'
import SidebarRow from './SidebarRow';

function Widgets() {
    return (
        <div className="widgets">
            <SidebarRow title="Other Projects"/>
            <iframe
                src='https://todoapp-cece5.web.app/'
                title="Other Projects"
                width='300px'
                height='400px'
                scrolling='yes'
            
            ></iframe>
        </div>
    )
}

export default Widgets
