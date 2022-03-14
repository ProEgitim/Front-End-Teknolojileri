import React from 'react'
import "./newuser.css"
export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1> 
      <form className='newUserForm'>
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='john'/>
        </div>
        <div className="newUserItem">
            <label>Full name</label>
            <input type="text" placeholder='Jon Smith'/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='jon@gmail.com'/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='passoword'/>
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder='+1 123 456'/>
        </div>
        <div className="newUserItem">
            <label>Adress</label>
            <input type="text" placeholder='New York | USA'/>
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <input type="radio" name='gender' id='male' value="male" />
        </div>
      </form>
    </div>
  )
}
