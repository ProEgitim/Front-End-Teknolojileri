import React from 'react'
import './widgetLg.css'
export default function WidgetLg() {

  const Button = ({type})=> {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg" alt="" className='widgetLgImg' />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$122,09</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg" alt="" className='widgetLgImg' />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$122,09</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg" alt="" className='widgetLgImg' />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$122,09</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg" alt="" className='widgetLgImg' />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">12 Mar 2022</td>
          <td className="widgetLgAmount">$122,09</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>

        </tr>
      </table>
    </div>
  )
}
