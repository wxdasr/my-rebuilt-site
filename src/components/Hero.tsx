import { useEffect, useRef } from 'react';

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        glowRef.current.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
      <div 
        ref={glowRef}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bg-glow-animated"
      ></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="hero-badge inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
          <span className="text-pink-400 text-sm font-medium pulse-badge">🔥 Oferta por tempo limitado</span>
        </div>
        
        <h1 className="hero-title text-4xl md:text-6xl font-black leading-tight mb-6">
          Chega de pagar <span className="gradient-text">mensalidade</span> pra criar
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-zinc-400 mb-8">
          Acesso completo ao pacote Adobe. <span className="text-white font-semibold">Uma vez. Para sempre.</span>
        </p>
        
        <div className="hero-card bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-8 mb-8 card-glow">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-zinc-500 line-through text-2xl">R$ 97,00</span>
            <span className="bg-green-500/20 text-green-400 text-sm font-bold px-3 py-1 rounded-full">-82% OFF</span>
          </div>
          <div className="text-6xl md:text-7xl font-black gradient-text mb-4 price-highlight">R$ 17,90</div>
          
          <a 
            href="#oferta" 
            onClick={scrollToOffer}
            className="hero-cta cta-btn inline-block w-full md:w-auto text-xl px-12 py-5 mb-3"
          >
            GARANTIR ACESSO AGORA <span className="bounce-arrow">→</span>
          </a>
          
          <p className="text-zinc-400 text-lg mb-5">Pagamento único e vitalício</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
            <span className="flex items-center gap-2"><span className="emoji-bounce">✅</span> Sem mensalidade</span>
            <span className="flex items-center gap-2"><span className="emoji-bounce">✅</span> Acesso imediato</span>
            <span className="flex items-center gap-2"><span className="emoji-bounce">✅</span> Suporte incluso</span>
          </div>
        </div>
        
        
        <p className="hero-cta text-zinc-500 text-sm mt-4">🔒 Pagamento 100% seguro</p>
      </div>
    </section>
  );
};

export default Hero;
