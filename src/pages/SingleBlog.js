import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import {Link} from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";
import Container from "../components/Container";

function SingleBlog() {
    return (
        <>
            <Meta title={"Dynamic Blog Name"}/>
            <BreadCrumb title="Dynamic Blog Name"/>
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-5"/>Go back to Blogs
                            </Link>
                            <h3 className="title">A Beautiful Morning Renasince</h3>
                            <img src="/images/blog/blog-1.jpg"
                                 className="img-fluid w-100 my-4"
                                 alt="blog"/>
                            <p>wf'ac wrfkjo ewrovnoi wiorvnodn sa;kvopeffvn iodfnv odifv diofvbbneoisv
                                siofvnbefrvn</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog
