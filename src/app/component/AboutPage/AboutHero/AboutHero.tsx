import React from 'react'
import Image from 'next/image';
import aboutHeroImg from '@/../public/images/About-images/Frame 3.png'

const  AboutHero = () => {
  return (
    <section className='w-[100%] h-[270px] sm:min-h-[600px] flex items-center justify-center'>
    <Image src={aboutHeroImg} alt="Hero" width={100000} height={10000} className='w-[98%] h-[90%] rounded-[60px]' />
    </section>
  )
}

export default AboutHero;