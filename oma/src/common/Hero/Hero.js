import React from 'react'
import './Hero.scss'

const Hero = ({ imgSrc, header, headLine, descOne, desctwo, fullHeight }) => {
  return (
    <main className='hero'>
        <div className='hero__content'>
            <h2 className='hero__header'>
                {header}
            </h2>
            <h1 className='hero__headline'>
                {headLine}
            </h1>
            <p className='hero__description'>{descOne}</p>
            <p className='hero__description'>{desctwo}</p>
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