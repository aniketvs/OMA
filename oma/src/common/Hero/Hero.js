import React from 'react'
import './Hero.scss'

const Hero = ({ imgSrc, header, headLine, descOne, desctwo, height }) => {
  return (
    <main className='hero'>
        <div className='hero__content'>

        </div>
        <div className='hero__image'>
            <img 
                src={imgSrc}
                alt={header}
            />
        </div>
    </main>
  )
}

export default Hero