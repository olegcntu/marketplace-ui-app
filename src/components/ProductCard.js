import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from "react-router-dom";

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id"className="product-card position-relative">
                    <div className="wishlist-ico position-absolute">
                        <button className="border-0 bg-transparent"><img src="/images/ico/wishlist.png" alt="wishlist"/></button>
                    </div>
                    <div className="product-image">
                        <img src="/images/product/1.jpg" alt="product image"/>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bluck 10 pack multi colored student
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            many text for description product fosfv dfslsv lkoefs,dvk kefvefvm
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src="/images/ico/compare.png" alt="compare"/>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src="/images/ico/view.png" alt="view"/>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src="/images/ico/addcard.png" alt="addcard"/>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ProductCard
