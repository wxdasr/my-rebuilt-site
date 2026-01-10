import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLAnchorElement>();
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation<HTMLParagraphElement>();

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <div 
          ref={badgeRef}
          className={`animate-on-scroll inline-block bg-red-500/20 text-red-400 text-sm font-bold px-4 py-2 rounded-full mb-6 pulse-badge ${badgeVisible ? 'visible' : ''}`}
        >
          ⚠️ Essa oferta pode sair do ar a qualquer momento
        </div>
        
        <h2 
          ref={titleRef}
          className={`animate-on-scroll text-3xl md:text-5xl font-bold mb-6 ${titleVisible ? 'visible' : ''}`}
        >
          Não deixe pra depois
        </h2>
        <p 
          ref={textRef}
          className={`animate-on-scroll text-xl text-zinc-400 mb-8 ${textVisible ? 'visible' : ''}`}
        >
          Enquanto você pensa, outros já estão criando. Por apenas <span className="text-white font-bold">R$ 17,90</span>, você garante acesso vitalício às melhores ferramentas de criação do mundo.
        </p>
        
        <a 
          ref={ctaRef}
          href="#oferta" 
          onClick={scrollToOffer}
          className={`animate-on-scroll cta-btn inline-block w-full md:w-auto text-xl px-16 py-6 ${ctaVisible ? 'visible' : ''}`}
        >
          GARANTIR MEU ACESSO AGORA <span className="bounce-arrow">→</span>
        </a>
        
        <p 
          ref={footerRef}
          className={`animate-on-scroll text-zinc-500 mt-6 ${footerVisible ? 'visible' : ''}`}
        >
          Pagamento único • Acesso imediato • Sem mensalidade
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
