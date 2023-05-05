import React from 'react'
import {Link} from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'

const Checkout = () => {
    return <>
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Dev Corner</h3>
                            <nav style={{"--bs-breadcrumb-divider:": ">"}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item total-price">
                                        <Link className="text-dark" to="/cart">Cart</Link>
                                    </li>
                                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                                    <li className="breadcrumb-item active total-price">
                                        Shipping
                                    </li>
                                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title total"> Contact Information </h4>
                            <p className="user-details total">Oleg Krasavin (oleg.krasavcik.41@gmail.com)</p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                <div className="w-100">
                                    <select
                                        name=""
                                        className="form-control form-select"
                                    >
                                        <option value="" selected disabled>Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="First Name" className="form-control"/>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Lat Name" className="form-control"/>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Address" className="form-control"/>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Appartment, suit, etc(optional)"
                                           className="form-control"/>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="City" className="form-control"/>
                                </div>
                                <div className="flex-grow-1">
                                    <select
                                        name=""
                                        className="form-control form-select"
                                    >
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Zip Code" className="form-control"/>
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link className="text-dark" to="/cart"><BiArrowBack className="me-2"/>Return to
                                            Card</Link>
                                        <Link className="button" to="/cart">Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span style={{top: "-10px", right: "2px"}}
                                              className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                            1
                                        </span>
                                        <img className="img-fluid"
                                             src="/images/product/1.jpg"
                                             alt=""/>
                                    </div>
                                    <div>
                                        <h5 className="total-price">sdfgh</h5>
                                        <p className="total-price">s / #ghjk</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="total">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">SubTotal</p>
                                <p className="total-price">$1000</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Shipping</p>
                                <p className="mb-0 total-price">$1000</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">$1000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Checkout
