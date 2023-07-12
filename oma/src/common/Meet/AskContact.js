import React from 'react'

export default function AskContact() {
  return (
    <>
        <div className='d-flex flex-row'>
            <div className='img-div-line'>
            <img src='/images/commonDesign.png' alt='commonDesign.png' width='700px' className='img-line'/>
            </div>
            <div className='d-flex flex-row  m-auto ask-div' >
                <h4 className='h-4-ask'>Any Question ? Feel Free To Ask</h4>
                <button className='btn  btn-outline'>Contact Us</button>
            </div>
        </div>
    </>
  )
}
