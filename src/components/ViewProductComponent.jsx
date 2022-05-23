import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/ProductService'

const ViewProductComponent = () => {

    const [prodId, setProdId] = useState('');
    const [prodCode, setProdCode] = useState('');
    const [prodCost, setProdCost] = useState('');
    const [prodDiscount, setProdDiscount] = useState('');
    const [prodGst, setProdGst] = useState('');

    const { id } = useParams();

    useEffect(() => {
        ProductService.getOneProduct(id).then(res => {
            setProdId(res.data.prodId)
            setProdCode(res.data.prodCode)
            setProdCost(res.data.prodCost)
            setProdDiscount(res.data.prodDiscount)
            setProdGst(res.data.prodGst)
        });
    }, [])


    return (
        <div><br/>
            {/* <h1>View Product Component</h1>
        <h1>Product-Id : {prodId}</h1>
        <h1>Product-Code : {prodCode}</h1>
        <h1>Product-Cost : {prodCost}</h1>
        <h1>Product-Discount : {prodDiscount}</h1>
        <h1>Product-Gst : {prodGst}</h1> */}

            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                <h1 className='hdrView'>View Product Component</h1>
                    <table className='table table-bordered table-hover tblData'>
                        <thead>
                            <tr>
                                <th>Product-Id</th>
                                <td>{prodId}</td>
                            </tr>

                            <tr>
                                <th>Product-Code</th>
                                <td>{prodCode}</td>
                            </tr>

                            <tr>
                                <th>Product-Cost</th>
                                <td>{prodCost}</td>
                            </tr>

                            <tr>
                                <th>Discount</th>
                                <td>{prodDiscount}</td>
                            </tr>

                            <tr>
                                <th>Product-Gst</th>
                                <td>{prodGst}</td>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default ViewProductComponent