import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ProductService from '../services/ProductService';

const ListProductsComponent = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        listProductsData();
    }, [])

    const listProductsData = () => {
        ProductService.getAllProducts().then((res) => {
            setProducts(res.data);
            console.log(res.data)
        });
    }

    const deleteProduct = (prodId) => {
        ProductService.deleteProduct(prodId).then((res)=>{
            console.log(res.data);
            listProductsData();
        });
        //console.log(prodId)
    }

    const updateProduct = () => {
        navigate('/edit-product')
    }



    return (
        <div>
            <h1 className='hdr'> Products List Data</h1>
            <table className='table table-bordered table-hover text-center'>
                <thead className='tblHdr'>
                    <tr>
                        <th>PROD-ID</th>
                        <th>PROD-NAME</th>
                        <th>PROD-COST</th>
                        <th>DISCOUNT</th>
                        <th>GST</th>
                        <th colSpan='3'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className='tblBdy'>
                    {
                        products.map(prod =>
                            <tr key={prod.prodId}>
                                <td>{prod.prodId}</td>
                                <td>{prod.prodCode}</td>
                                <td>{prod.prodCost}</td>
                                <td>{prod.prodDiscount}</td>
                                <td>{prod.prodGst}</td>
                                <td>
                                    <button onClick={()=>deleteProduct(prod.prodId)} className='btn btn-danger'>DELETE</button>
                                </td>
                                <td>
                                    <Link to={`/update-product/${prod.prodId}`} className='btn btn-primary'>EDIT</Link>
                                </td>
                                <td>
                                    <Link to={`/view-product/${prod.prodId}`} className='btn btn-info'>VIEW</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* <h1>{JSON.stringify(products)}</h1> */}
        </div>
    )
}

export default ListProductsComponent