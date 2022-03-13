import React from 'react'
import './user.css'
import {PermIdentity} from '@material-ui/icons'
export default function User() {
    console.log(window);
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User </h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                    <div className="userShowTop">
                        <img src='https://yt3.ggpht.com/yti/APfAmoEA_NUyY-KJyQbrEUu4J_EfD789uFS0ch6127OA=s88-c-k-c0x00ffffff-no-rj-mo' alt='' className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Bell</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className='userShowTitle'>Account Details</span>
                        <PermIdentity/>
                    </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}
