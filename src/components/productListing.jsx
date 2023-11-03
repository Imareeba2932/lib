import React, { useState } from 'react';
import Data from './DummyData';

const ProductListing = ({setCartItems}) => {

    const [productsArray, setProductsArray] = useState(Data);

    const displayproducts = () => {
        return productsArray.map((obj) => (
            <div className="col-md-4 col-6 mb-4">
                <div className="card shadow">
                    <img
                         className="card-img-top mt-2 p-3"
                        src={obj.img}
                        alt=""
                    /> 
                    <div className="card-body">
                        {obj.live ? <h6 className="fw-bold text-muted">Live</h6> : ''}
                        <h5 className="text-center">{obj.name}</h5>
                        <h6 className='text-center'>${obj.price}</h6>
                    </div>
                </div>
            </div>
        ));  
    };
    const searchProduct = (e) => {
        const search = e.target.value;
        let filteredData = Data.filter((productsArray) => {
          return productsArray.name.toLowerCase().includes(search.toLowerCase());
        });
    
        setProductsArray(filteredData);
      };
    return (
        <div>
            <header className="bgimg text-white mt-3  ">
                <div className="container py-3">
                    <h1 className="text text-center text-white"><strong>Browse Product</strong></h1>
                    <hr />
                    <input onChange={searchProduct} type="text" className="form-control w-75 m-auto" />
                </div>
            </header>
            <div className="container">
                <div className="row mt-5">
                    {
                        displayproducts()
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListing