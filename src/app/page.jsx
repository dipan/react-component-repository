'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:2000})])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <div className="embla border mt-0 max-w-full mx-auto h-56" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex text-center justify-center">Slide 1</div>
        <div className="embla__slide flex text-center justify-center">Slide 2</div>
        <div className="embla__slide flex text-center justify-center">Slide 3</div>
      </div>
    </div>
  )
}
