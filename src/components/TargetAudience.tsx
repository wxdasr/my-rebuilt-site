import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const audiences = [
  { text: 'É <strong>designer gráfico</strong> e quer parar de pagar mensalidade' },
  { text: 'É <strong>editor de vídeo</strong> e precisa de ferramentas profissionais' },
  { text: 'É <strong>social media</strong> e cria conteúdo diariamente' },
  { text: 'É <strong>criador de conteúdo</strong> e quer elevar sua produção' },
  { text: 'É <strong>freelancer</strong> e precisa entregar trabalhos de qualidade' },
  { text: 'É <strong>iniciante</strong> e quer começar a criar sem gastar muito' },
];

const TargetAudience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 
          ref={titleRef}
          className={`animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-4 ${titleVisible ? 'visible' : ''}`}
        >
          Isso é pra <span className="gradient-text">você</span> se...
        </h2>
        <p 
          ref={subtitleRef}
          className={`animate-on-scroll text-zinc-400 text-center text-lg mb-12 ${subtitleVisible ? 'visible' : ''}`}
        >
          Veja se você se encaixa em algum desses perfis:
        </p>
        
        <div 
          ref={listRef}
          className={`space-y-4 stagger-children ${listVisible ? 'visible' : ''}`}
        >
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="card-lift flex items-center gap-4 bg-zinc-900 border border-green-500/30 rounded-xl p-5"
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span 
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: audience.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
