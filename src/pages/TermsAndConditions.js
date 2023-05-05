import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

function TermsAndConditions() {
    return (
        <>
            <Meta title={"Terms And Conditions"}/>
            <BreadCrumb title="Terms And Conditions"/>
            <Container className="policy-wrapper py-5 home-wrapper-2">
                    <div className="col-12">
                        <div className="policy">

                        </div>
                    </div>
            </Container>
        </>
    )
}

export default TermsAndConditions
