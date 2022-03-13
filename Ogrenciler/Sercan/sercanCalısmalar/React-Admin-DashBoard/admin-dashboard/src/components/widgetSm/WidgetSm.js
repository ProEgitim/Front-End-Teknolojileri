import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kevin Smae</span>
            <span className="widgetSmUserTitle">Software Devoloper</span>
          </div>
          <button className="widgetSmButton">
              <Visibility className='widgetSmIcon' />
              Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Business Analisyt</span>
          </div>
          <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jon Wigamh</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
              <Visibility className='widgetSmIcon' />
              Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Simon Wall</span>
            <span className="widgetSmUserTitle">Frontend Engineer</span>
          </div>
          <button className="widgetSmButton">
              <Visibility className='widgetSmIcon' />
              Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Alexander Minange</span>
            <span className="widgetSmUserTitle">Human Resources</span>
          </div>
          <button className="widgetSmButton">
              <Visibility className='widgetSmIcon' />
              Display
          </button>
        </li>
      </ul>
    </div>
  )
}
