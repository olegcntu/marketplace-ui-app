import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import cross from "../images/ico/cross.png"
import Container from "../components/Container";

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Products"}/>
            <BreadCrumb title="Compare Products"/>
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img
                                src={cross}
                                alt="cross"
                                className="position-absolute cross img-fluid"/>
                            <div className="product-card-image">
                                <img src="../images/product/1.jpg" alt="watch"></img>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T-1 7.01 GB RAM 8GB ROM 7</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In stock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img
                                src={cross}
                                alt="cross"
                                className="position-absolute cross img-fluid"/>
                            <div className="product-card-image">
                                <img src="/images/product/1.jpg" alt="watch"></img>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T-1 7.01 GB RAM 8GB ROM 7</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In stock</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default CompareProduct
