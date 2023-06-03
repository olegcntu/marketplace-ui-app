import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import API_ROUTES from "../api";
export default function Account() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_ROUTES.PRODUCT_SERVICE}/product/product-for-user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="create-product-block">
                <Link to="/create-product">
                    <div className="create-product-button">
                        <span className="plus-sign">+</span>
                    </div>
                </Link>
            </div>
            <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} grid={12}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
