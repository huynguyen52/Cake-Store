import React from 'react'
import { Link } from 'react-router-dom';

import './BreadCrumb.scss';

function BreadCrumb() {
    return (
        <nav className="bread-crumb">
            <span><Link to="/">Home</Link></span>
            &nbsp; / &nbsp;
            <span><Link to="/">dark chocolate</Link></span>
            &nbsp; / &nbsp;
            <span><Link to="/">Choco Chips</Link></span>
            &nbsp; / &nbsp;
            <span><Link to="/">Pellentesque augue just</Link></span>
        </nav>
    )
}

export default BreadCrumb
