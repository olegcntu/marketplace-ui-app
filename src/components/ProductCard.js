import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link, useLocation} from 'react-router-dom';

const ProductCard = ({product, grid}) => {
    const {_id, title, slug, description, price, brand, ratings, images} = product;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
                <Link to={`/${_id}`} className="product-card position-relative">
                    <div className="wishlist-ico position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src="/images/ico/wishlist.png" alt="wishlist"/>
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={images[0]?.url || '/images/product/1.jpg'} alt="product image"/>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">{brand}</h6>
                        <h5 className="product-title">{title}</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={ratings[0]?.star || 0}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>{description}</p>
                        <p className="price">${price.toFixed(2)}</p>
                    </div>
                    {console.log(description)}
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
    );
};

export default ProductCard;
