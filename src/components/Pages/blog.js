import React from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="">
      <h2>Blog</h2>

      <div>
          <Link to="/about-me">Read more about me</Link>
      </div>
    </div>
  )
}

export default Blog