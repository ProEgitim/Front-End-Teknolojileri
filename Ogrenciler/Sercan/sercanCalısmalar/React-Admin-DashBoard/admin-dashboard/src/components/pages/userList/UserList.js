import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlined } from '@material-ui/icons';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete =(id)=>{
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
  { field: 'id', headerName: 'ID', width: 100},
  { field: 'user', headerName: 'User', width: 200 , renderCell(params){
    return(
      <div className='userListUser'>
        <img className='userListImg'  src={params.row.avatar} alt="" />
        {params.row.username}
      </div>
    )
  }},
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 250,
    
  },
  { field: 'action', headerName: 'Action', width: 150, renderCell:(params)=>{
    return(
      <>
      <Link to={`/user/${params.row.id}`}>
      <button className='userListEdit'>Edit</button>
      </Link>
      <DeleteOutlined onClick={()=>handleDelete(params.row.id)} className='userListDelete'/>
      </>
    )
  }},
];


  return (
    <div className='userList'>

<DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

    </div>
  )
}
