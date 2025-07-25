import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'
import { IMAGES } from '../../../../public/assets'

const AboutUsHero = () => {
  return (
     <div className=" relative h-[470px] overflow-hidden bg-neutral-35 font-Satoshi">
      <div className="pt-[112px]">
        <Container>
          <h1 className="text-[64px] font-black leading-20 text-white text-center">
            About Us
          </h1>
          <p className="text-neutral-50 text-[28px] leading-8 mt-5 text-center">
            So, who are we exactly?
          </p>
        </Container>
      </div>
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute -top-20 w-full"
      />
    </div>
  )
}

export default AboutUsHero