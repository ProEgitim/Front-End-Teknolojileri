import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import LineChart from '../../chart/Chart'
import { productData} from '../../../dummyData'
import { Publish } from '@material-ui/icons'
export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <LineChart data={productData} dataKey="Sales" title="Sales Performanse"  />
            </div> 
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/10/fiyat-farkinda-deger-mi-apple-airpods-pro-vs-airpods-3.jpg?fit=1280%2C720&ssl=1" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom" >
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">In Stock:</span>
                        <span className="productInfoValue">No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                   <label >Product Name</label> 
                   <input type="text" placeholder="Apple Airpod"/>
                   <label >In Stock</label>
                   <select name="inStock" id="inStock">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
                   <label >Active</label>
                   <select name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/10/fiyat-farkinda-deger-mi-apple-airpods-pro-vs-airpods-3.jpg?fit=1280%2C720&ssl=1" alt="" className="productUploadImg" />
                        <label for="file" >
                            <Publish/>
                         </label>
                         <input type="file" id='file' style={{display:"none"}}/>

                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>

    </div>
  )
}
