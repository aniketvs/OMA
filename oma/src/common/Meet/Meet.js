import React from 'react'
import './Meet.scss'
import AskContact from './AskContact'

export default function Meet() {
  return (
    <>
      <div className='mb-5 img-div-line' >
        <img src='/images/commonDesign.png' alt='commonDesign.png' width='700px' className='img-line' />
      </div>
      {/* main div */}
      <div className='hero-div ' style={{marginTop:'5rem'}}>
        {/*Header div*/}
        <div className='header-div'>
          <h1 className='heading'>Meet The Doctors</h1>
          <p className='p-1'>With a highly qualified team of doctors and trained support staff, we aim to</p>
          <p className='p-1'>With a highly qualified team of doctors and trained support staff, we</p>
        </div>
        {/*Doctor Main Div*/}
        <div className='d-flex flex-row justify-content-center mt-4 d-main-div '>
          {/*Doctor div*/}
          <div className='d-div'>
            <div className='d-img-b'>
              <div className='d-img-div'></div>
            </div>
            <div className="mt-3" >
              <h4 className='d-head'>Dr. Pankaj Nair</h4>

              <p className='mt-2 p-2'>MBBS,DGO,MD(OBG) Senior Consoltant</p>
              <p className='p-2'> Obestric & Gyancologist</p>
            </div>

          </div>
          <div className='d-div'>
            <div className='d-img-b'>
              <div className='d-img-div'></div>
            </div>
            <div className="mt-3">
              <h4 className='d-head'>Dr. Pankaj Nair</h4>

              <p className='mt-2 p-2'>MBBS,DGO,MD(OBG) Senior Consoltant</p>
              <p className='p-2'> Obestric & Gyancologist</p>
            </div>
          </div>
          <div className='d-div'>
            <div className='d-img-b'>
              <div className='d-img-div'></div>
            </div>
            <div className="mt-3">
              <h4 className='d-head'>Dr. Pankaj Nair</h4>

              <p className='mt-2 p-2'>MBBS,DGO,MD(OBG) Senior Consoltant</p>
              <p className='p-2'> Obestric & Gyancologist</p>
            </div>
          </div>
        </div>

      </div>
      <AskContact />

    </>
  )
}
