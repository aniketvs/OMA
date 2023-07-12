import React from 'react'
import './Gallery.css'
export default function Gallery() {
  return (
    <>
      <div className='container mt-5 cont-bot'>
        <div className='text-align-center '>
          <h4 className='h-1'>Advance Facitlity & Sterlized Enviorment</h4>

        </div>
        <div className='d-flex flex-row justify-content-center img-main-div container'>
          <div className='img-div img-2'>
            <img src='/images/BlogCard1.png' className="img-1 "alt='/images/BlogCard1.png' />
          </div>
          <div className='img-div img-3'>
            <img src='/images/BlogCard5.png' className="img-1 "alt='/images/BlogCard2.png' />

          </div>
          <div className='img-div img-4'>
            <img src='/images/BlogCard6.png' className="img-1"alt='/images/BlogCard3.png' />
          </div>
        </div>
        <div>
         <p className='mt-2 mb-5 lorem-p'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since<br/> the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

        </div>
      </div>
    </>
  )
}
