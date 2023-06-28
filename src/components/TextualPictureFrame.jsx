import React from 'react';
import { Link } from 'react-router-dom';
import bag from '../assets/gucci.jpeg';

export default function TextualPictureFrame() {
  return (
    <div className='text-center'> 
      <Link to="/bags">
        <div>
          <img src={bag} alt=""  className='w-96 m-auto'/>
       
        </div>
      </Link>
      <div className='m-auto'>
            <h1>Bags</h1>
            <div className='flex justify-center'>
              <p className='m-8'> 
                <Link to="/bags/women">Women Bag</Link>
              </p>
              <p className='m-8'>
                <Link to="/bags/men">Men Bag</Link>
              </p>
            </div>
          </div>
    </div>
  );
}
