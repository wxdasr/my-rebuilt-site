import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  {
    emoji: '🖼️',
    title: 'Editar fotos profissionalmente',
    description: 'Remover fundo, retocar pele, ajustar cores em segundos.',
  },
  {
    emoji: '🎥',
    title: 'Editar vídeos para redes sociais',
    description: 'Cortar, adicionar legendas, efeitos e transições incríveis.',
  },
  {
    emoji: '🎯',
    title: 'Criar logos e identidades visuais',
    description: 'Design vetorial profissional para marcas que se destacam.',
  },
  {
    emoji: '📱',
    title: 'Produzir conteúdo para Instagram e TikTok',
    description: 'Posts, stories, reels — tudo com visual de agência.',
  },
  {
    emoji: '💼',
    title: 'Trabalhar como freelancer',
    description: 'Ofereça serviços de design e edição de alto valor.',
  },
];

const Benefits = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 
          ref={titleRef}
          className={`animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12 ${titleVisible ? 'visible' : ''}`}
        >
          O que você vai poder <span className="gradient-text">criar</span>
        </h2>
        
        <div 
          ref={listRef}
          className={`space-y-4 stagger-children ${listVisible ? 'visible' : ''}`}
        >
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="card-lift flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >
              <span className="text-2xl emoji-bounce">{benefit.emoji}</span>
              <div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`animate-on-scroll text-center mt-10 ${ctaVisible ? 'visible' : ''}`}
        >
          <a 
            href="#oferta" 
            onClick={scrollToOffer}
            className="cta-btn inline-block w-full md:w-auto text-xl px-12 py-5"
          >
            QUERO ACESSO COMPLETO <span className="bounce-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
