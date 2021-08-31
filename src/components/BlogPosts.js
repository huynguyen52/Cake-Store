import React from 'react'


import Post from './Post';
import './BlogPosts.scss';
import SliderCarousel from './SliderCarousel';
import { useGlobalContext } from '../context';

function BlogPosts() {
  const {posts} = useGlobalContext();
    return (
        <section className="blog-posts">
              <div className="short-title horizontal-tabs__list " >
                <div className="horizontal-tabs__item">
                  <h3 className="blog-posts__title">blog post</h3>
                </div>
              </div>
              <SliderCarousel itemsToShow={3}>
                {
                  posts.map(post => {
                    return <Post {...post} key={post.id}/>;
                  })
                }
                {/* <Post/> */}
              </SliderCarousel>
            </section>
    )
}

export default BlogPosts
