import React, {useEffect, useState} from 'react'
import BreadCrumb from "../components/BreadCrumb";
import {Helmet} from "react-helmet";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import API_ROUTES from "../api";
import RandomProduct from "../components/RandomProduct";

const Orders = () => {

    return (
        <>
            <Meta title={"Our Store"}/>
            <BreadCrumb title="Our Store"/>
            <Container class1="store-wrapper home-wrapper-2 py-5">

            </Container>
        </>
    )
}
export default Orders
