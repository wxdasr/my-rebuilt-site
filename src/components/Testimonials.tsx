import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useCallback, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

import testimonial1 from '@/assets/testimonial-1.png';
import testimonial2 from '@/assets/testimonial-2.png';
import testimonial3 from '@/assets/testimonial-3.png';
import testimonial4 from '@/assets/testimonial-4.png';

const testimonials = [
  { id: 1, image: testimonial1, alt: 'Depoimento de Marco Abbondanza' },
  { id: 2, image: testimonial2, alt: 'Depoimento de Sandro Martins' },
  { id: 3, image: testimonial3, alt: 'Depoimento de Marcelo Luiz' },
  { id: 4, image: testimonial4, alt: 'Depoimento de Gleuson' },
];

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const [api, setApi] = useState<CarouselApi>();
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const handleClick = useCallback(() => {
    if (autoplayPlugin.current) {
      autoplayPlugin.current.stop();
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className={`animate-on-scroll text-center mb-12 ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            MAIS DE <span className="gradient-text">50.000 CLIENTES</span> SATISFEITOS
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre o acesso premium da OpTech.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full"
          onClick={handleClick}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem 
                key={testimonial.id} 
                className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[35%]"
              >
                <div className="p-1">
                  <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-lg hover:border-zinc-700 transition-colors">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="w-2 h-2 rounded-full bg-zinc-700 hover:bg-primary transition-colors"
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
