import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cross from "../images/ico/cross.png"
import Container from "../components/Container";

const WishList = () => {
    return (
        <>
            <Meta title={"WishList"}/>
            <BreadCrumb title="WishList"/>
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src={cross}
                                alt="cross"
                                className="position-absolute cross img-fluid"/>
                            <div className="wishlist-card-image">
                                <img
                                    src="/images/product/1.jpg"
                                    className="img-fluid w-100"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Honor T-1 7.01 GB RAM 8GB ROM 7</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src={cross}
                                alt="cross"
                                className="position-absolute cross img-fluid"/>
                            <div className="wishlist-card-image">
                                <img
                                    src="/images/product/1.jpg"
                                    className="img-fluid w-100"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Honor T-1 7.01 GB RAM 8GB ROM 7</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default WishList
