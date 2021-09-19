import React from 'react'
import { Link } from 'react-router-dom';

import './TopRateProduct.scss';
import cake1 from '../assets/images/12-145x145.png';

function TopRateProduct() {
    return (
        <aside className="top-rate-product">
            <h2 className="widget-title">top rated products</h2>
            <ul className="product-list">
                <li className="product-item">
                    <Link to="/" className="product-img">
                        <img src={cake1} alt="cake 1" />
                        <div className="product-detail">
                            <span className="product-title"> massa quam</span>
                            <span className="price">£999.00</span>
                        </div>
                    </Link>
                </li>
                <li className="product-item">
                    <Link to="/" className="product-img">
                        <img src={cake1} alt="cake 1" />
                        <div className="product-detail">
                            <span className="product-title"> massa quam</span>
                            <span className="price">£999.00</span>
                        </div>
                    </Link>
                </li>
                <li className="product-item">
                    <Link to="/" className="product-img">
                        <img src={cake1} alt="cake 1" />
                        <div className="product-detail">
                            <span className="product-title"> massa quam</span>
                            <span className="price">£999.00</span>
                        </div>
                    </Link>
                </li>
                <li className="product-item">
                    <Link to="/" className="product-img">
                        <img src={cake1} alt="cake 1" />
                        <div className="product-detail">
                            <span className="product-title"> massa quam</span>
                            <span className="price">£999.00</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default TopRateProduct
