import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductCategory.scss';

function ProductCategory({categories}) {
    const [isExpand, setIsExpand] = useState(false);

    const handleClick = () => {
        setIsExpand(!isExpand);
    }

    return (
        <aside className="tree-view">
            <h2 className="widget-title">product categories</h2>
            <ul className="tree-view__list">
                {
                    categories.map((item, index) => {
                        const {name, children} = item;
                        if(children.length === 0){
                            return (
                                <li className="tree-view__item" key={index}>
                                    <Link to={`/product/${name}`}>{name}</Link>
                                </li>
                            )
                        }
                        return (
                            <li className="tree-view__item" key={index} onClick={handleClick}>
                                <span className={`${isExpand ? 'toggle active' : 'toggle'}`}>{name}</span>
                                <ul className="tree-view__list">
                                    {
                                        children.map((child, index) => {
                                            return (
                                                <li className="tree-view__item" key={index}>
                                                    <Link to={`/product/${child.name}`}>{child.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* <li className="tree-view__item">
                                        <Link to="/">Choco Chips</Link>
                                    </li> */}
                                </ul>
                            </li>
                        )
                    })
                }
                {/* <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li>
                <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li>
                <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li>
                <li className="tree-view__item">
                    <span className="toggle">dark chocolate</span>
                    <ul className="tree-view__list">
                        <li className="tree-view__item">
                            <Link to="/">Choco Chips</Link>
                        </li>
                    </ul>
                </li>
                <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li>
                <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li>
                <li className="tree-view__item">
                    <Link to="/">Books and Media</Link>
                </li> */}
            </ul>
        </aside>
    )
}

export default ProductCategory
