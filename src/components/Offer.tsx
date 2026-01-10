import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const appIcons = [
  { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
  { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
  { name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
  { name: 'After Effects', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
  { name: 'Lightroom', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg' },
  { name: 'InDesign', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg' },
];

const features = [
  'Photoshop, Illustrator, Premiere Pro',
  'After Effects, Lightroom, InDesign',
  'Acesso imediato após o pagamento',
  'Suporte para instalação',
  'Sem mensalidade, nunca',
];

const Offer = () => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="oferta" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div 
          ref={cardRef}
          className={`animate-on-scroll bg-gradient-to-b from-purple-900/30 to-zinc-900 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center card-glow ${cardVisible ? 'visible' : ''}`}
        >
          <span className="inline-block bg-purple-500/20 text-purple-300 text-sm font-bold px-4 py-2 rounded-full mb-6 pulse-badge">
            OFERTA ESPECIAL
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Acesso Completo ao<br />
            <span className="gradient-text">Adobe Creative Suite</span>
          </h2>
          
          <div className="bg-zinc-900/80 rounded-2xl p-6 mb-6">
            <p className="text-zinc-400 mb-2">De <span className="line-through">R$ 97,00</span></p>
            <div className="text-5xl md:text-6xl font-black gradient-text mb-2 price-highlight">R$ 17,90</div>
            <p className="text-zinc-300 font-medium">Pagamento único e vitalício</p>
          </div>
          
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            {appIcons.map((app) => (
              <img 
                key={app.name}
                src={app.icon} 
                alt={app.name} 
                className="w-10 h-10 float-icon"
              />
            ))}
          </div>
          
          <ul className="text-left space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-zinc-300">
                <span className="text-green-400">✓</span> {feature}
              </li>
            ))}
          </ul>
          
          <a 
            href="https://pay.cakto.com.br/qseot7v_718408" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-block w-full text-xl px-12 py-5"
          >
            GARANTIR ACESSO AGORA <span className="bounce-arrow">→</span>
          </a>
          
          <p className="text-zinc-500 text-sm mt-4">🔒 Seus dados estão protegidos</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
