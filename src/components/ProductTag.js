import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

import './ProductTag.scss';

function ProductTag() {
    const {categories} = useGlobalContext();
    return (
        <aside className="product-tag">
            <h2 className="widget-title">product tags</h2>
            <div className="product-tag__wrapper">
                {
                    categories.map((item, index) => {
                        // const {name, children} = item;
                        return <Link to={`/product-tag/${item.name}`} className="tag" key={index}>{item.name}</Link>
                    })
                }
                
            </div>
        </aside>
    )
}

export default ProductTag
