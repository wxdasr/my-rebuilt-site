import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    emoji: '🚫',
    title: 'Zero mensalidade',
    description: 'Pague uma vez, use pra sempre. Sem cobranças surpresa no cartão.',
  },
  {
    emoji: '⚡',
    title: 'Acesso em minutos',
    description: 'Assim que o pagamento for aprovado, você já recebe tudo.',
  },
  {
    emoji: '💰',
    title: 'Economia absurda',
    description: 'Enquanto outros pagam R$ 200+/mês, você paga R$ 17,90 uma vez.',
  },
  {
    emoji: '🎁',
    title: 'Valor simbólico',
    description: 'Menos que um lanche. Acesso que pode mudar sua carreira.',
  },
];

const WhyItMakesSense = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className={`animate-on-scroll text-3xl md:text-4xl font-bold mb-12 ${titleVisible ? 'visible' : ''}`}
        >
          Por que isso faz <span className="gradient-text">sentido</span>
        </h2>
        
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {reasons.map((reason) => (
            <div 
              key={reason.title}
              className="card-lift bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <div className="text-4xl mb-4 emoji-bounce">{reason.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-zinc-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMakesSense;
