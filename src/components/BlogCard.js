import React, {Component} from 'react'
import {Link} from "react-router-dom";

export class BlogCard extends Component {
    render() {
        return (
                <div className="blog-card">
                    <div className="card-image">
                        <img src="/images/blog/blog-1.jpg" className="img-fluid w-100" alt=""/>
                    </div>
                    <div className="blog-content">
                        <p className="date">11 Dec, 2022</p>
                        <h5 className="title">A buatifute cho-to tam</h5>
                        <p className="desc">tfyguhwijrf ergferg etgt werge wrgwrgt wrtgfwrg wrg rw w r gfwrg r yuuyk,uk tyer;welgkr egf</p>
                        <Link to="/blog/:id" className="button">Read More</Link>
                    </div>
                </div>

        )
    }
}

export default BlogCard
