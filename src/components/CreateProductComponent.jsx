import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../services/ProductService';

const CreateProductComponent = () => {

    const [prodId, setProdId] = useState("");
    const [prodCode, setProdCode] = useState("");
    const [prodCost, setProdCost] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        const product = { prodId, prodCode, prodCost }

        if (id) {
            ProductService.updateProduct(id, product).then(res => {
                navigate("/")
            })
        } else {
            ProductService.addProduct(product).then((res) => {
                navigate("/")
            });
        }

        console.log(product);
    }

    useEffect(() => {
        ProductService.getOneProduct(id).then(res => {
            setProdId(res.data.prodId)
            setProdCode(res.data.prodCode)
            setProdCost(res.data.prodCost)
        });
    }, [])

    const title = () => {
        if (id) {
            return <h2 className='updateData'>Update Employee</h2>
        }
        else {
            return <h2 className='createData'>Create Employee</h2>
        }
    }

    return (
        <div><br />
            <div className='card col-md-4 offset-md-4 offset-md-4'>
                <div className='card-body'>

                    {
                        title()
                    }

                    <form onSubmit={submitHandler}>

                        <div className='form-group'>
                            <label className='dataLbl'>Product Name</label>
                            <div>
                                <input type='text' value={prodCode} name='prodCode' onChange={(e) => setProdCode(e.target.value)} className='form-control dataInput' />
                            </div>
                        </div><br />

                        <div className='form-group'>
                            <label className='dataLbl'>Product Name</label>
                            <div>
                                <input type='text' value={prodCost} name='prodCost' onChange={(e) => setProdCost(e.target.value)} className='form-control dataInput' />
                            </div>
                        </div><br />

                        <input type='submit' name='REGISTER' className='btn btn-primary form-control' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProductComponent