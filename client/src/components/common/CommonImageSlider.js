import React from 'react';
import { Carousel } from 'antd';

const CommonImageSlider = (props) => {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, idx) => (
          <div key={idx}>
            <img
              alt={image}
              style={{ width: '100%', height: '180px', maxHeight: '200px' }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CommonImageSlider;
