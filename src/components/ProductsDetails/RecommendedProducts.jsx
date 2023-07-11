import React from 'react'
import ProductCard from './ProductCard'
import jacket1 from '../../assets/jacket1.jpeg';
import jacket2 from '../../assets/jacket2.jpeg';

export default function RecommendedProducts() {
  return (
    <div className='my-28'>
        <div className='text-center p-10'>
            <p className='uppercase fontBold '>We recommend</p>
        </div>
        <div className='flex overflow-x-scroll w-[100vw] '>
        <ProductCard image={jacket1} alternateImage={jacket2} title={"Varsanol Casual Leather"} color={"3"} />
        <ProductCard image={jacket1} alternateImage={jacket2} title={"Varsanol Casual Leather"} color={"3"} />
        <ProductCard image={jacket1} alternateImage={jacket2} title={"Varsanol Casual Leather"} color={"3"} />
        <ProductCard image={jacket1} alternateImage={jacket2} title={"Varsanol Casual Leather"} color={"3"} />



        </div>
    </div>
  )
}
