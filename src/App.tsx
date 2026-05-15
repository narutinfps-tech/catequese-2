/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Star, 
  Download, 
  ShieldCheck, 
  ChevronDown, 
  BookOpen, 
  Sparkles, 
  Heart, 
  Gift, 
  Check,
  Calendar,
  Presentation,
  Map,
  ArrowRight,
  X,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-orange-50 hover:shadow-xl hover:shadow-orange-100/50 transition-all group flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
      <Icon className="text-orange-600 w-6 h-6 group-hover:text-white transition-colors" />
    </div>
    <h3 className="font-serif font-bold text-lg mb-2 text-neutral-900">{title}</h3>
    <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
  </div>
);



const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-orange-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif font-semibold text-lg text-neutral-800 group-hover:text-orange-600 transition-colors">{question}</span>
        <ChevronDown className={`text-orange-400 w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

const purchaseNotifications = [
  { name: "Ana Silva", location: "São Paulo, SP" },
  { name: "Carlos Oliveira", location: "Belo Horizonte, MG" },
  { name: "Mariana Souza", location: "Curitiba, PR" },
  { name: "João Santos", location: "Rio de Janeiro, RJ" },
  { name: "Patrícia Lima", location: "Salvador, BA" },
  { name: "Ricardo Ferreira", location: "Brasília, DF" },
  { name: "Beatriz Costa", location: "Porto Alegre, RS" },
  { name: "Fernando Rocha", location: "Fortaleza, CE" },
  { name: "Gabriel Martins", location: "Manaus, AM" },
  { name: "Juliana Almeida", location: "Recife, PE" }
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(24 * 3600); // 24 hours
  const [currentNotification, setCurrentNotification] = useState<typeof purchaseNotifications[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    
    const showNextNotification = () => {
      setCurrentNotification(purchaseNotifications[index]);
      index = (index + 1) % purchaseNotifications.length;

      // Hide after 4 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 4000);

      // Wait 14 seconds (4 visible + 10 waiting)
      setTimeout(showNextNotification, 14000);
    };

    const initialTimeout = setTimeout(showNextNotification, 5000); // Start after 5 seconds

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-neutral-900">
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Material Exclusivo para Catequistas e Formadores
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto"
          >
            +300 dinâmicas católicas para ensinar os <br className="hidden sm:block" />
            <span className="text-orange-600">sacramentos</span> de forma leve e inesquecível.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Video Section */}
            <div className="relative w-full max-w-[450px] mx-auto aspect-[9/16] mb-12 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 sm:border-[12px] border-white">
              <iframe
                src="https://player.vimeo.com/video/1192107955?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Catequese Criativa Vídeo"
              ></iframe>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-neutral-500">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-100">
                <Users className="w-4 h-4 text-orange-600" /> +1.200 Catequistas Impactados
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-100">
                <Download className="w-4 h-4 text-orange-600" /> Acesso Imediato
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-100">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9/5 Avaliação média
              </div>
            </div>

            <div className="w-full max-w-md">
              <p className="text-sm font-medium mb-3">Planos a partir de <span className="text-2xl font-bold text-orange-600">R$ 10,00</span></p>
              <a 
                href="#pricing"
                className="block w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              >
                QUERO TRANSFORMAR MINHA CATEQUESE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">O Que Você Vai Receber Hoje</h2>
            <p className="text-neutral-600">+300 dinâmicas organizadas e prontas para transformar cada encontro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Sparkles}
              title="Acolhimento Impactante"
              description="Dinâmicas para quebrar o gelo e criar uma conexão imediata logo nos primeiros minutos do encontro."
            />
            <FeatureCard 
              icon={BookOpen}
              title="Histórias Bíblicas Vivas"
              description="Metodologias fáceis para ensinar as passageis bíblicas de forma lúdica, onde a criança é a protagonista."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Sacramentos Explicados"
              description="Atividades práticas para ensinar o Batismo, Eucaristia e Crisma sem ser uma aula cansativa."
            />
            <FeatureCard 
              icon={Heart}
              title="Valores e Virtudes"
              description="Trabalhe o amor ao próximo, o perdão e a generosidade através de vivências reais em grupo."
            />
            <FeatureCard 
              icon={Clock}
              title="Momento de Oração"
              description="Roteiros para momentos de oração criativa que conectam as crianças com o Sagrado de forma leve."
            />
            <FeatureCard 
              icon={Download}
              title="Encerramentos Marcantes"
              description="Como finalizar o encontro garantindo que a semente da palavra foi bem plantada no coração."
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all"
            >
              QUERO RECEBER MEU MATERIAL <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-xs text-neutral-400">Acesso imediato após a confirmação do pagamento</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12 italic">Por que escolher nosso material?</h2>
              <div className="space-y-8">
                {[
                  { t: "Chega de Improviso", d: "Tenha um plano reserva sempre na manga para imprevistos e evite momentos de tensão." },
                  { t: "Linguagem Acessível", d: "Conteúdo adaptado para diferentes faixas etárias, sem 'igrejês' complicado ou cansativo." },
                  { t: "Fácil de Aplicar", d: "Passo a passo com materiais simples (papel, lápis, carinho). Você não precisa gastar nada extra." },
                  { t: "Alinhado com a Igreja", d: "Conteúdo 100% Católico, revisado por formadores experientes e fiel à doutrina." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      <Check className="text-orange-600 w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900 mb-1">{item.t}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-orange-100 rounded-[3rem] p-6 sm:p-12 relative overflow-hidden lg:sticky lg:top-8">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 rounded-full blur-3xl"></div>
               <div className="relative space-y-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-orange-600 mb-2">Economize 10h por semana</h3>
                    <p className="text-sm text-neutral-600">Prepare seu encontro completo em apenas 15 minutos e dedique o restante do tempo à sua própria espiritualidade.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-orange-600 mb-2">Crianças 100% Engajadas</h3>
                    <p className="text-sm text-neutral-600">Nossas dinâmicas foram testadas em grupos reais de periferia a bairros nobres, garantindo participação ativa.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all"
            >
              SIM! QUERO ECONOMIZAR TEMPO <CheckCircle2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof (Infinite Image Marquee) */}
      <section className="py-24 bg-neutral-900 overflow-hidden border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white">Veja quem já transformou sua missão</h2>
          <p className="text-neutral-400">Catequistas de todo o país que não trocam esse material por nada.</p>
        </div>
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-6 pr-6"
          >
            {[
              "https://i.ibb.co/fZyFWgN/provasocial4.png",
              "https://i.ibb.co/4nh4vMKN/Provasocial1-1.png",
              "https://i.ibb.co/VYzKJCmm/provasocial2.png",
              "https://i.ibb.co/NgNMnRVB/provasocial3.png",
              "https://i.ibb.co/fZyFWgN/provasocial4.png", 
              "https://i.ibb.co/4nh4vMKN/Provasocial1-1.png",
              "https://i.ibb.co/VYzKJCmm/provasocial2.png",
              "https://i.ibb.co/NgNMnRVB/provasocial3.png"
            ].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[400px]">
                <img 
                  src={img} 
                  alt={`Depoimento ${idx + 1}`} 
                  className="w-full rounded-2xl shadow-xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
          {/* Duplicate for seamless marquee */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-6 pr-6"
            aria-hidden="true"
          >
            {[
              "https://i.ibb.co/fZyFWgN/provasocial4.png",
              "https://i.ibb.co/4nh4vMKN/Provasocial1-1.png",
              "https://i.ibb.co/VYzKJCmm/provasocial2.png",
              "https://i.ibb.co/NgNMnRVB/provasocial3.png",
              "https://i.ibb.co/fZyFWgN/provasocial4.png",
              "https://i.ibb.co/4nh4vMKN/Provasocial1-1.png",
              "https://i.ibb.co/VYzKJCmm/provasocial2.png",
              "https://i.ibb.co/NgNMnRVB/provasocial3.png"
            ].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[400px]">
                <img 
                  src={img} 
                  alt={`Depoimento ${idx + 1}`} 
                  className="w-full rounded-2xl shadow-xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4 block">Oferta Limitada</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Ao Garantir VIP hoje, você ganha 4 Presentes</h2>
            <p className="text-neutral-600">Complementos poderosos que seriam vendidos separadamente por R$ 97,00 cada.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                t: "Resumo Bíblico Ilustrado em Slides", 
                img: "https://i.ibb.co/VcwYRdwQ/Chat-GPT-Image-10-de-mai-de-2026-01-48-02.png",
                d: "Aulas prontas e visuais para apresentar o conteúdo bíblico de forma profissional e cativante." 
              },
              { 
                t: "100 Atividades Bíblicas Católicas", 
                img: "https://i.ibb.co/V0wJ2WMg/Chat-GPT-Image-10-de-mai-de-2026-01-56-38.png",
                d: "Atividades complementares para reforçar o conteúdo dos encontros." 
              },
              { 
                t: "100 Mapas Mentais dos Personagens Bíblicos", 
                img: "https://i.ibb.co/JwPqH3Y4/Chat-GPT-Image-10-de-mai-de-2026-02-18-36.png",
                d: "Resumos visuais para ensinar sobre os grandes personagens da Bíblia." 
              },
              { 
                t: "Calendário Litúrgico Ilustrado", 
                img: "https://i.ibb.co/gLSkd7jD/Chat-GPT-Image-10-de-mai-de-2026-02-00-35.png", 
                d: "Acompanhe o ano litúrgico com ilustrações e explicações acessíveis." 
              }
            ].map((bonus, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 h-full hover:bg-orange-100/30 transition-colors">
                {bonus.img && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-2 border border-orange-100 shadow-sm">
                    <img 
                      src={bonus.img} 
                      alt={bonus.t} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-neutral-900 leading-tight mb-2">{bonus.t}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{bonus.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#FDFCF9] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-100 mb-6 animate-pulse">
                <Clock className="w-4 h-4" /> Oferta expira em: {formatTime(timeLeft)}
             </div>
             <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Escolha sua Modalidade</h2>
             <p className="text-neutral-600">Invista na sua formação e na vida eterna dos seus pequenos.</p>
             <div className="mt-6 flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 w-fit mx-auto px-6 py-2 rounded-full border border-emerald-100">
                <Users className="w-4 h-4" /> 34 pessoas compraram nos últimos 30 minutos
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-orange-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl font-bold mb-2">Plano Essencial</h3>
              <p className="text-neutral-500 text-sm mb-8">O guia completo de dinâmicas</p>
              <div className="text-center mb-10">
                <span className="block text-neutral-400 line-through text-xs">De R$ 47,90</span>
                <span className="text-4xl font-extrabold text-neutral-800">R$ 10,00</span>
                <span className="block text-[10px] text-emerald-600 font-bold mt-1 uppercase">Promoção de Lançamento</span>
              </div>
              <ul className="w-full space-y-4 mb-10 text-sm text-neutral-600 flex-grow">
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> <strong>+300 Dinâmicas Criativas</strong></li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Suporte via E-mail</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Acesso Vitalício</li>
                <li className="flex gap-3 opacity-30 grayscale"><X className="text-neutral-400 w-5 h-5 flex-shrink-0" /> 4 Bônus Exclusivos</li>
                <li className="flex gap-3 opacity-30 grayscale"><X className="text-neutral-400 w-5 h-5 flex-shrink-0" /> Certificado de Formação</li>
                <li className="flex gap-3 opacity-30 grayscale"><X className="text-neutral-400 w-5 h-5 flex-shrink-0" /> Grupo VIP de Catequistas</li>
              </ul>
              <a 
                href="https://pay.wiapy.com/wJqPAhaQ8o"
                className="w-full py-4 px-6 bg-neutral-100 text-neutral-600 rounded-2xl font-bold text-base hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group"
              >
                ESCOLHER ESSENCIAL
              </a>
            </div>

            {/* VIP Plan */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border-4 border-orange-600 relative overflow-hidden shadow-2xl shadow-orange-600/10 flex flex-col items-center lg:scale-105">
              <div className="absolute top-0 right-0 bg-orange-600 text-white px-8 py-1.5 rotate-45 translate-x-1/3 translate-y-1/2 text-[10px] font-bold tracking-widest">MAIS VENDIDO</div>
              <h3 className="font-serif text-2xl font-bold mb-2">Plano Completo VIP</h3>
              <p className="text-neutral-500 text-sm mb-8">Acesso total a todos os materiais + Bônus</p>
              <div className="text-center mb-10">
                <span className="block text-neutral-400 line-through text-sm">De R$ 197,90</span>
                <span className="text-5xl font-extrabold text-orange-600">R$ 19,90</span>
                <span className="block text-xs text-emerald-600 font-bold mt-1">VOCÊ ECONOMIZA R$ 178,00</span>
              </div>
              <ul className="w-full space-y-4 mb-10 text-sm text-neutral-700">
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> <strong>+300 Dinâmicas Criativas</strong></li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Slides Bíblicos (Bônus)</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> 100 Atividades (Bônus)</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Mapas Mentais (Bônus)</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Calendário Litúrgico (Bônus)</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Certificado de Formação</li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> <strong>Grupo VIP de Catequistas</strong></li>
                <li className="flex gap-3"><Check className="text-emerald-500 w-5 h-5 flex-shrink-0" /> Acesso Vitalício</li>
              </ul>
              <a 
                href="https://pay.wiapy.com/Efr0XgL1o"
                className="w-full py-5 px-6 bg-orange-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span className="text-center leading-tight uppercase font-black">Quero Acesso VIP</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-[10px] text-neutral-400 uppercase tracking-tighter">Compra 100% Segura • Risco Zero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 italic">Garantia Incondicional de 7 Dias</h2>
          <div className="bg-orange-50/50 p-8 sm:p-12 rounded-[2rem] border border-orange-100">
            <p className="text-neutral-700 leading-relaxed text-lg italic">
              "Fique em paz. Se por qualquer motivo você achar que o material não é para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia e continuamos amigos."
            </p>
          </div>
          <p className="mt-6 text-sm text-neutral-500 font-medium">Risco zero para você — sua missão é nossa prioridade.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FFF9F2] rounded-[3rem] overflow-hidden border border-orange-100 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 aspect-[4/5] relative">
              <img 
                src="https://i.ibb.co/bg851nkC/Pregadoras-Crist-s-Mulheres-pregadoras.jpg" 
                alt="Criadora do Catequese Criativa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent md:hidden"></div>
            </div>
            <div className="w-full md:w-3/5 p-8 sm:p-16">
              <span className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4 block">A Missão</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-neutral-900">Quem está por trás do <br className="hidden sm:block" /> Catequese Criativa?</h2>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  Olá! Sou apaixonada por ver o brilho nos olhos das crianças quando descobrem o amor de Deus. Como catequista, vivi na pele o desafio de prender a atenção de uma geração conectada, usando métodos que já não faziam sentido para eles.
                </p>
                <p>
                  O <strong>Catequese Criativa</strong> nasceu desse desejo: oferecer ferramentas para que você, catequista, não perca horas noites adentro preparando encontros, mas que tenha em mãos a melhor metodologia para plantar sementes eternas.
                </p>
                <p className="font-serif italic text-orange-600 font-medium">
                  "Acredito que a catequese não é uma aula, é um encontro de vida. E cada encontro merece ser inesquecível."
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-orange-100">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </div>
                  +1.200 Vidas Impactadas
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-orange-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  Formação de Qualidade
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pb-16">
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO AGORA <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FDFCF9]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold italic">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="O material é digital ou físico?"
              answer="O material é 100% digital em formato PDF de alta qualidade. Você recebe o acesso por e-mail imediatamente após a confirmação do pagamento e pode imprimir ou usar direto do celular/tablet."
            />
            <FAQItem 
              question="Posso usar com qualquer faixa etária?"
              answer="Sim! Dividimos as dinâmicas por grau de complexidade. Temos atividades desde o despertar da fé (4-6 anos) até a perseverança e crismanos."
            />
            <FAQItem 
              question="Preciso de materiais caros?"
              answer="Não. 95% das dinâmicas usam materiais que você já tem: papel, caneta, fita adesiva ou coisas da natureza. Focamos na criatividade, não no custo."
            />
            <FAQItem 
              question="E se eu não gostar?"
              answer="Você tem 7 dias de garantia total. Se cobrar o material e achar que não te ajudou, nós devolvemos o dinheiro sem questionar."
            />
            <FAQItem 
              question="Como recebo o acesso?"
              answer="Assim que o sistema identificar o pagamento, você receberá um e-mail automático com os links de download. Pagamentos via PIX ou Cartão liberam na hora."
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-700 transition-all"
            >
              GARANTIR MEU ACESSO AGORA <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-neutral-500 text-sm mb-8">Transformando encontros de catequese em experiências inesquecíveis.</p>
          <div className="flex justify-center gap-8 mb-8 text-neutral-400 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Suporte</a>
          </div>
          <p className="text-neutral-600 text-xs mt-8">© {new Date().getFullYear()} Catequese Criativa. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Purchase Notification */}
      <AnimatePresence>
        {currentNotification && (
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-[60] bg-white rounded-2xl shadow-2xl border border-orange-100 p-4 w-72 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="text-orange-600 w-5 h-5" />
            </div>
            <div className="flex-1 pr-4">
              <p className="text-xs font-bold text-neutral-900 leading-tight">
                {currentNotification.name} <span className="font-normal text-neutral-500">acabou de garantir o Material Premium!</span>
              </p>
              <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest font-bold">
                De {currentNotification.location}
              </p>
            </div>
            <button 
              onClick={() => setCurrentNotification(null)}
              className="absolute top-2 right-2 text-neutral-300 hover:text-neutral-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
