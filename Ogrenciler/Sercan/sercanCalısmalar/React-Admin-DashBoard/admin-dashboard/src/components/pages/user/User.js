import React from 'react'
import './user.css'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons'
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
export default function User() {
    
   const [user] =  userRows.filter(user=> user.id == window.location.pathname[window.location.pathname.length-1] )
 
   return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User </h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                    <div className="userShowTop">
                        <img src={user.avatar} alt='' className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className='userShowTitle'>Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">{user.username}-{user.id}</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">{user.date}</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 325 365 57</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">{user.city}</span>
                        </div>
                    </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>User Name</label>
                            <input type="text" placeholder={`${user.username} - ${user.id}`} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder={user.username} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder={user.email} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+1 365 968' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>City</label>
                            <input type="text" placeholder={user.city} className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' src={user.avatar} alt=""  />
                            <label htmlFor="file"> <Publish className='userUpdateIcon'/> </label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
