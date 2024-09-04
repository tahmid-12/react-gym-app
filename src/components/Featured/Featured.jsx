import React from 'react';
import './Featured.css';
import Heading from '../../common/Heading/Heading';
import FeaturedCard from '../../common/FeaturedCard/FeaturedCard';

const Featured = () => {
  return (
    <>
      <div className='featured background'>
        <div className="container">
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.'/>
          <FeaturedCard />
        </div>
      </div>
    </>
  )
}

export default Featured