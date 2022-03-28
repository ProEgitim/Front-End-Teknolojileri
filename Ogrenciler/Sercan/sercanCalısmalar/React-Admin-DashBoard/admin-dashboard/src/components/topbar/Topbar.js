import React from 'react'
import './topbar.css'

import {Dashboard, NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'> <Dashboard/></span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>                   
                </div>
                <div className="topbarIconContainer">
                    <Settings/>                  
                </div>

                <img className='topAvatar' src="https://lh3.googleusercontent.com/ogw/ADea4I6YRUQshg-Dg5w-4N1EI3c7rYYVlc2dqzYPAQRj=s32-c-mo" alt="" />

            </div>
        </div>
    </div>
  )
}
