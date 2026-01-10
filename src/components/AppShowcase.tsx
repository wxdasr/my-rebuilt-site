import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const apps = [
  {
    name: 'Photoshop',
    description: 'Edição de imagens',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    hoverColor: 'hover:border-[#31A8FF]/50',
  },
  {
    name: 'Illustrator',
    description: 'Vetores e logos',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
    hoverColor: 'hover:border-[#FF9A00]/50',
  },
  {
    name: 'Premiere Pro',
    description: 'Edição de vídeo',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
    hoverColor: 'hover:border-[#9999FF]/50',
  },
  {
    name: 'After Effects',
    description: 'Motion graphics',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
    hoverColor: 'hover:border-[#9999FF]/50',
  },
  {
    name: 'Lightroom',
    description: 'Tratamento de fotos',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg',
    hoverColor: 'hover:border-[#31A8FF]/50',
  },
  {
    name: 'InDesign',
    description: 'Design editorial',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg',
    hoverColor: 'hover:border-[#FF3366]/50',
  },
];

const AppShowcase = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation<HTMLParagraphElement>();

  return (
    <section className="py-20 px-4 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className={`animate-on-scroll text-3xl md:text-4xl font-bold mb-4 ${titleVisible ? 'visible' : ''}`}
        >
          Tudo que você precisa em <span className="gradient-text">um só lugar</span>
        </h2>
        <p 
          ref={subtitleRef}
          className={`animate-on-scroll text-zinc-400 text-lg mb-12 ${subtitleVisible ? 'visible' : ''}`}
        >
          As ferramentas que profissionais usam para criar conteúdo de alto nível.
        </p>
        
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {apps.map((app) => (
            <div 
              key={app.name}
              className={`app-icon card-lift bg-zinc-900 border border-zinc-800 rounded-xl p-6 ${app.hoverColor}`}
            >
              <img 
                src={app.icon} 
                alt={`Adobe ${app.name}`} 
                className="w-16 h-16 mb-4 mx-auto float-icon"
              />
              <h3 className="font-bold text-lg">{app.name}</h3>
              <p className="text-zinc-500 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
        
        <p 
          ref={footerRef}
          className={`animate-on-scroll text-zinc-300 text-lg mt-10 font-medium ${footerVisible ? 'visible' : ''}`}
        >
          Crie como profissional. Sem pagar como um.
        </p>
      </div>
    </section>
  );
};

export default AppShowcase;
