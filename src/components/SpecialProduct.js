import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

export const SpecialProduct = ({
                                   imageSrc,
                                   brand,
                                   title,
                                   rating,
                                   price,
                                   discountDays,
                                   productCount,
                                   progressValue,
                               }) => {
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className="img-fluid" src={imageSrc} alt="product image" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">{brand}</h5>
                        <h6 className="title">{title}</h6>
                        <ReactStars count={5} size={24} value={rating} edit={false} activeColor="#ffd700" />
                        <p className="price">
                            <span className="red-p">${price}</span>&nbsp;
                            <strike>${price * 2}</strike>
                        </p>
                        <div className="discount-title d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>{discountDays}</b> days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                <span className="badge rounded-circle p-3 bg-danger">1</span>
                            </div>
                        </div>
                        <div className="prod-count my-3">
                            <p>Products: {productCount}</p>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${progressValue}%` }}
                                    aria-valuenow={progressValue}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <Link className="button">Add to Card</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
