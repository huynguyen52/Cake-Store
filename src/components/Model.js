import React, { useRef } from 'react'
import {Link} from 'react-router-dom';
import cake1 from '../assets/images/4-300x300.png';
import { useGlobalContext } from '../context';
import './Model.scss';

function Model() {
    const {modelProduct, setModelProduct} = useGlobalContext();
    const overLay = useRef();

    // const closeModel = e => {
    //   if(overLay.current === e.target){
    //     setModelProduct(null);
    //   }
    // }
    
    return (
        <div ref={overLay} className={modelProduct ? 'over-lay show' : 'over-lay'} onClick={()=>setModelProduct(null)}>
          <div className="model" onClick={e => e.stopPropagation()}>
            <section className="product">
              <figure className="product__thumbnail">
                <img src={cake1} alt="cake1" />
              </figure>
              <aside className="summary">
                <div className="summary__content">
                  <h2 className="product__title">Nunc adipiscing</h2>
                  <span className="price">
                    <del>$777.00</del>
                    $555.00
                  </span>
                  <p className="product__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repudiandae qui ipsam architecto aut ex obcaecati culpa dolores iste a voluptatem? Corrupti, commodi harum. Hic vitae perspiciatis excepturi non quidem.Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus.
                  </p>
                  <form action="#" className="add-to-cart">
                    <input type="number" id="quantity" />
                    <button className="btn btn--primary--light btn--small">Add to cart</button>
                  </form>
                  <span className="category">
                    Categories:
                    <Link to="/">Brownie</Link>,
                    <Link to="/">Choco Chip</Link>,
                    <Link to="/">Dark chocolate</Link>,
                    <Link to="/">Uncategorized</Link>
                  </span>
                  <span className="tags">
                    Tags:
                    <Link to="/">adipiscing</Link>,
                    <Link to="/">augue</Link>,
                    <Link to="/">Fierent</Link>,
                    <Link to="/">Honestatis</Link>,
                    <Link to="/">Nunc</Link>
                  </span>
                </div>
              </aside>
            </section>
          </div>
        </div>
    )
}

export default Model
