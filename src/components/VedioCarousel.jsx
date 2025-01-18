import React from 'react'
import { hightlightsSlides } from '../constants'

function VedioCarousel() {
  return (
    <>
    <div className='flex items-center'>
        {hightlightsSlides.map(list,i)=>(
            <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                <div className='vedio-carousel_container'></div>
            </div>
        )}
    </div>
    </>
  )
}

export default VedioCarousel