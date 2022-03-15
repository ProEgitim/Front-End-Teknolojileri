import React from 'react'
import './productlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlined } from '@material-ui/icons';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
    const [data, setData]=useState(productRows)

    const handleDelete =(id)=>{
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
  { field: 'id', headerName: 'ID', width: 100},
  { field: 'product', headerName: 'Product', width: 200 , renderCell(params){
    return(
      <div className='productListItem'>
        <img className='productListImg'  src={params.row.img} alt="" />
        {params.row.name}
      </div>
    )
  }},
  { field: 'stock', headerName: 'Stock', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 250,
    
  },
  { field: 'action', headerName: 'Action', width: 150, renderCell:(params)=>{
    return(
      <>
      <Link to={`/product/${params.row.id}`}>
      <button className='productListEdit'>Edit</button>
      </Link>
      <DeleteOutlined onClick={()=>handleDelete(params.row.id)} className='productListDelete'/>
      </> 
    )
  }},
];

  return (
    <div className='productList'>
    
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
