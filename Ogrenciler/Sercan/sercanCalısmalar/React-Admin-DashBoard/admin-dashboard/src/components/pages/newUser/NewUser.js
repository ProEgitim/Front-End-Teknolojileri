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
          <div className="newUserGender">
            <input type="radio" name='gender' id='Male' value="male" />
            <label for="Male">Male</label>
            <input type="radio" name='gender' id='Female' value="female" />
            <label for="Female">Female</label>
            <input type="radio" name='gender' id='Other' value="other" />
            <label for="Other">Other</label>
          </div>

        </div>
        <div className="newUserItem">
        <label>Active</label>
        <select  name="active" id="active" className="newUserSelect">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
