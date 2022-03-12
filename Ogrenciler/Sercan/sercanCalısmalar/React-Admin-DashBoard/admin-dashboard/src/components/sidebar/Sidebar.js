import React from 'react'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, InfoSharp, AllInboxOutlined , Person, MonetizationOn ,WorkOutline, Equalizer, MailOutline, DynamicFeed, ForumOutlined } from '@material-ui/icons'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <AllInboxOutlined className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <MonetizationOn className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Equalizer className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ForumOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Range
                    </li>
                    <li className="sidebarListItem">
                        <InfoSharp className='sidebarIcon'/>
                        Info
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
