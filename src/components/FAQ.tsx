import { useState } from 'react';

const faqs = [
  {
    question: 'Tem mensalidade?',
    answer: 'Não. O pagamento é único. Você paga R$ 17,90 uma vez e nunca mais é cobrado.',
  },
  {
    question: 'Quando recebo o acesso?',
    answer: 'Imediatamente após a confirmação do pagamento. PIX e cartão liberam na hora.',
  },
  {
    question: 'Funciona para iniciantes?',
    answer: 'Sim! As ferramentas são intuitivas e há milhares de tutoriais gratuitos na internet.',
  },
  {
    question: 'Posso usar para trabalho?',
    answer: 'Com certeza. Você pode usar para criar trabalhos para clientes, projetos pessoais, redes sociais, etc.',
  },
  {
    question: 'Funciona em qual sistema?',
    answer: 'Windows e Mac. Você receberá instruções detalhadas para instalação.',
  },
  {
    question: 'E se eu tiver dúvidas?',
    answer: 'Nosso suporte está disponível para te ajudar em qualquer etapa.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas <span className="gradient-text">frequentes</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 cursor-pointer transition-all hover:border-zinc-700"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <span className="text-2xl transition-transform">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-zinc-400 mt-4 animate-fade-in">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
