import React, {useState} from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import {Link} from "react-router-dom";
import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import Container from "../components/Container";

function SingleProduct() {
    const props = {
        width: 600,
        height: 500,
        zoomWidth: 500,
        img: "https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/watch/r/n/h/1-boy-s-exclusive-men03-blue-daniel-jubile-boys-original-imagf9uuzyrg9x6b.jpeg?q=70"
    }
    const [orderedProduct, setOrderedProduct] = useState(true)
    return (
        <>
            <Meta title={"Product Name"}/>
            <BreadCrumb title="Product Name"/>
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom{...props}/>
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img className="img-fluid"
                                      src="https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/watch/r/n/h/1-boy-s-exclusive-men03-blue-daniel-jubile-boys-original-imagf9uuzyrg9x6b.jpeg?q=70"
                                      alt=""/></div>
                            <div><img className="img-fluid"
                                      src="https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/watch/r/n/h/1-boy-s-exclusive-men03-blue-daniel-jubile-boys-original-imagf9uuzyrg9x6b.jpeg?q=70"
                                      alt=""/></div>
                            <div><img className="img-fluid"
                                      src="https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/watch/r/n/h/1-boy-s-exclusive-men03-blue-daniel-jubile-boys-original-imagf9uuzyrg9x6b.jpeg?q=70"
                                      alt=""/></div>
                            <div><img className="img-fluid"
                                      src="https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/watch/r/n/h/1-boy-s-exclusive-men03-blue-daniel-jubile-boys-original-imagf9uuzyrg9x6b.jpeg?q=70"
                                      alt=""/></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Kids Headphones Bulk 10 Pack Multi Colored
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0">(2 rewiews)</p>
                                </div>
                                <a className="review-btn" href="#reviews">Write a Reviews</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Type :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Brand :</h3>
                                    <p className="product-data">Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Category :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tags :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Availability :</h3>
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Size :</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                            <span
                                                className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span
                                            className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span
                                            className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span
                                            className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Color :</h3>
                                    <Color/>
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Quantity :</h3>
                                    <div className="">
                                        <input
                                            className="form-control"
                                            style={{width: "70px"}}
                                            type="number"
                                            min={1}
                                            max={10}
                                            name=""
                                            id=""></input>
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className="button border-0" type="submit">Add to Card</button>
                                        <button className="button signup">Buy It Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href=""><TbGitCompare className="fs-5 me-2"/>Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href=""><AiOutlineHeart className="fs-5 me-2"/>Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">Shipping & Returns :</h3>
                                    <p className="product-data">Free shipping and returns avalibal rge efs;wf </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    qf erfcerv iu[ dj f[ mkobf[oc fv[ nfob nfgo[ nf grj gjfsd oj eor djo rr jgf fo
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container id="reviews" class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0 t-review">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (<div>
                                            <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                                        </div>)
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>
                                        <h4 className="mb-2">Write a reviews</h4>
                                    </h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="comments"
                                                name="" id=""
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="4">

                                            </textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review mt-4">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">wrfhwrfojnfjkofkfjkjksjkdfjksdfjkjklsdff wrfiowsfjg
                                            owrjfo </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex gap-10">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleProduct
