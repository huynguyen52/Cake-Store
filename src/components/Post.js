import React from 'react'
import { Link } from 'react-router-dom';
import{ FaUser, FaCalendarAlt, FaSearch, FaComments} from 'react-icons/fa';
import {HiLink} from 'react-icons/hi';

import './Post.scss';

function Post({id, image, postBy, postDate, name, desc}) {
    return (
        <article className="post">
            <figure className="post__img">
                <img src={image} alt={name} />
                <div className="post__over-lay">
                    <Link to="/"><FaSearch/></Link>
                    <Link to="/"><HiLink/></Link>
                </div>
            </figure>
            <div className="post__author">
                <FaUser className="post__icon"/>
                {postBy}
                <div className="post__date">
                    <FaCalendarAlt className="post__icon"/>
                    {postDate}
                </div>
            </div>
            <aside className="post__content">
                <div className="post__title">
                    <Link to="/">{name}</Link>
                </div>
                <p className="post__desc">{desc}</p>
                <Link to="/" className="post__footer">
                    <FaComments/>
                    Leave a comment</Link>
            </aside>
        </article>
    )
}

export default Post
