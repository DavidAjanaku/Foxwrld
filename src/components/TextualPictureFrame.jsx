import React from 'react';
import { Link } from 'react-router-dom';

export default function TextualPictureFrame(props) {
  return (
    <div className='text-center  relative'> 
      <Link to="/bags">
        <div className="relative">
          <img src={props.img} alt="" className='object-none m-auto'/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
      </Link>
      <div className='m-auto absolute text-white bottom-0 left-0 right-0'>
        <h1 className='text-3xl'>{props.title}</h1>
        <div className='flex justify-center'>
          <p className='m-8'> 
            <Link to="/bags/women" className='text-[14px] underline font-bold hover:text-slate-700 underline-offset-8'>Women</Link>
          </p>
          <p className='m-8'>
            <Link to="/bags/men" className='text-[14px] underline underline-offset-8 hover:text-slate-700 font-bold'>Men</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
