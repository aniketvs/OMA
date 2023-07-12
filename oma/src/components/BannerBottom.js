import React from 'react'
import './BannerBottom.scss'
export default function BannerBottom() {
    return (
        <>
            <div className='container' style={{marginTop:'-105px'}}>
                <div className='d-flex flex-row justify-content-start'>
                    <div >
                        <h4 className='text-h'>Why OMA?</h4>
                    </div>
                    <div className='img-12-main-div mmm'>
                    <div className='img-12-div'>
                        <img src='/images/withPrescription1.png' className='img-12' alt='/images/withPrescription1.png' />
                       
                    </div>
                    <p className='p-53'>Expectation Hospitality</p>
                    </div>
                    <div className='img-12-main-div'>
                    <div  className='img-12-div'>
                        <img src='/images/withPrescription2.png' className='img-12' alt='/images/withPrescription2.png' />

                    </div>
                        <p className='p-53'>Advance Tratment <br/> Approach</p>
                    </div>
                     <div className='img-12-main-div'>
                     <div  className='img-12-div'>
                        <img src='/images/withPrescription3.png' className='img-12' alt='/images/withPrescription3.png' />
                    </div>
                        <p className='p-53'>Complete <br/> Woman Care</p>

                     </div>
                   

                </div>
            </div>
        </>
    )
}
