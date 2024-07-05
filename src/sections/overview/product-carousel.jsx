import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShopProductCard from '../products/product-card';

export default function ProductCarousel({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} style={{  margin: '105px', padding: '105px' }}>
          <ShopProductCard product={product} style={{ margin: '105px', padding: '105px' }}/>
        </div>
      ))}
    </Slider>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
