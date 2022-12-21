import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="">
      <h2>We couldn't find that page</h2>
      <Link to="/">Return to Homepage</Link>
    </div>
  )
}

export default NoMatch