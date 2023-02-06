import React from 'react';
import image1 from  "../../../src/assets/image1.jpg"
import "../../../src/App.css"


function Banner() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row  '>
          <div className='col-md-12  ' style={{ padding: '0px' }}>
            <img src={image1} className='images' alt='Responsive image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

