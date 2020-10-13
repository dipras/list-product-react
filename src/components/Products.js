import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss'
import { getProducts } from '../api/products.api';

const useStyles = createUseStyles({
    header: {
        background: "#233750",
        color: "white",
        marginBottom: "50px"
    },
    inputHeader: {
        height: "50%",
        borderRadius: "20px",
        outline: "none",
        width: "465px",
        paddingLeft: "10px"
    },
    buttonHeader: {
        background: "#FF6600",
        color: "white",
        height: "42%",
        bottom: "0%",
        borderRadius: '18px',
        fontSize: "16px",
        fontWeight: "bold",
        '&:hover': {
            color: "white"
        }
    }
})

const Products = () => {
    const classes = useStyles()
    const [category, setcategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(price, category)
            .then(res => setProducts(res))
    }, [category, price])

    const header = () => (
        <div className={`${classes.header}`}>
            <div className={`container d-flex justify-content-between`} style={{ height: "100px" }}>
                <div className={`d-flex align-items-center`} >
                    <img src="./img/logo-header.svg" />
                    <input type="text" className={`${classes.inputHeader} d-none d-lg-block`} placeholder="what are you looking for?" />
                </div>
                <div className={`d-flex align-items-center`} >
                    <img src="./img/bell.svg" alt="" className="mr-3" />
                    <img src="./img/cart.svg" alt="" />
                    <div style={{ width: "1px", background: "white", height: "42%", margin: "0 20px" }} className={`d-none d-sm-block`}></div>
                    <button className={`btn ${classes.buttonHeader} d-none d-sm-block`} style={{ position: "relative" }}>Login / Register</button>
                    <i className="fas fa-user d-block d-sm-none ml-3"></i>
                </div>
            </div>
            <div style={{ height: "1px", background: "black", width: "100%" }}></div>
            <div className={`d-block d-lg-none container`} style={{ height: "60px" }} >
                <input type="text" className={`${classes.inputHeader} mt-1`} placeholder="what are you looking for?" style={{ width: "100%", height: "50px" }} />
            </div>
            <div className={`container d-flex justify-content-between align-items-center`} style={{ height: "50px" }} >
                <select className="custom-select" style={{ width: "150px", height: "80%" }} onChange={({ target }) => setcategory(target.value == "def" ? null : target.value)}>
                    <option value="def">category</option>
                    <option value={113}>Spices</option>
                    <option value={119}>Seafood</option>
                    <option value={140}>Coffee Beans</option>
                    <option value={141}>Fruits</option>
                    <option value={143}>Vegetables</option>
                    <option value={144}>Tea</option>
                </select>
                <select className="custom-select" style={{ width: "150px", height: "80%" }} onChange={({ target }) => setPrice(target.value == "def" ? null : target.value)}>
                    <option value="def">price range</option>
                    <option>0-50</option>
                    <option>50-100</option>
                </select>
            </div>
        </div>
    )

    const listProduct = () => {
        return (
            <div className={`container`}>
                <div className={`row`}>
                    {products.map((val, i) => (
                        <div className={`col-xl-4 col-md-4 col-md-6 col-sm-12 mb-5 d-flex flex-row justify-content-center`} key={i}>
                            <div className="card" style={{ width: "80%" }}>
                                <img className="card-img-top" src="./img/produk.jpg" alt="Card image cap" height="286" />
                                <div className="card-body">
                                    <p style={{ color: "#939393", margin: 0 }}>{val.SpreeStore.store_name}</p>
                                    <h5 className="card-title" >{val.name}</h5>
                                    <p className="card-text" style={{ display: "inline", color: "orange", fontSize: "20px" }}>${val.sell_price}</p>
                                    <p className="card-text" style={{ display: "inline", color: "#939393" }}> /{val.unit_measure}</p>
                                    <a href="#" className="btn btn-primary d-block">Detail</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            {header()}
            {listProduct()}
        </>
    )
}

export default Products;