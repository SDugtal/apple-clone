import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { rightImg, watchImg } from '../utils';
import VedioCarousel from './VedioCarousel';

function Highlights() {
    useEffect(() => {
        gsap.to('#title', { opacity: 1, y: 0, duration: 1 });
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }, []);

    return (
        <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full flex items-center justify-between'>
                    <h1 id='title' className='section-heading'>Get the highlight</h1>
                    <div className='flex items-center gap-5'>
                        <p className='link flex items-center'>
                            watch the film <img src={watchImg} alt="watch" className='ml-2' />
                        </p>
                        <p className='link flex items-center'>
                            watch the event <img src={rightImg} alt="right" className='ml-2' />
                        </p>
                    </div>
                </div>
                <VedioCarousel/>

            </div>
        </section>
    );
}

export default Highlights;
