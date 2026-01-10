import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className={`animate-on-scroll text-center ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            MAIS DE <span className="gradient-text">50.000 CLIENTES</span> SATISFEITOS
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre o acesso premium da OpTech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
