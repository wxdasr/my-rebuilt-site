const securityFeatures = [
  {
    emoji: '🔐',
    title: 'Pagamento Seguro',
    description: 'Ambiente protegido com criptografia de ponta.',
  },
  {
    emoji: '⚡',
    title: 'Liberação Imediata',
    description: 'Receba o acesso assim que o pagamento for confirmado.',
  },
  {
    emoji: '💬',
    title: 'Suporte Disponível',
    description: 'Dúvidas? Nossa equipe está pronta para ajudar.',
  },
];

const Security = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="p-6">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
