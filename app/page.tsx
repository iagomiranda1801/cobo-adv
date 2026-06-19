import {
  ArrowDownIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  DocumentCheckIcon,
  HandRaisedIcon,
  HeartIcon,
  LightBulbIcon,
  MapPinIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { ContactForm } from "@/components/contact-form";
import {
  DISPLAY_PHONE,
  DISTRICT_ADDRESS,
  MAPS_URL,
  STREET_ADDRESS,
  whatsappUrl,
} from "@/lib/contact";

const whatsappHref = whatsappUrl(
  "Olá, gostaria de uma orientação jurídica com a COBO Advocacia.",
);

const areas = [
  { icon: ScaleIcon, title: "Direito Civil", text: "Soluções estratégicas para contratos, obrigações, responsabilidade civil, família e sucessões." },
  { icon: BriefcaseIcon, title: "Direito Trabalhista", text: "Orientação e representação jurídica para trabalhadores e empresas em relações de trabalho." },
  { icon: BanknotesIcon, title: "Direito Previdenciário", text: "Análise cuidadosa de benefícios, aposentadorias, revisões e planejamento previdenciário." },
  { icon: HandRaisedIcon, title: "Direito do Consumidor", text: "Defesa dos seus direitos em relações de consumo, cobranças e falhas na prestação de serviços." },
  { icon: BuildingOffice2Icon, title: "Direito Empresarial", text: "Suporte jurídico preventivo para decisões, contratos e rotinas da sua empresa." },
  { icon: DocumentCheckIcon, title: "Consultoria Jurídica", text: "Pareceres e orientação personalizada para prevenir riscos e trazer segurança às suas escolhas." },
];

const differentials = [
  { icon: UserGroupIcon, title: "Atendimento personalizado", text: "Cada cliente é ouvido com atenção, respeito e proximidade." },
  { icon: LightBulbIcon, title: "Análise estratégica", text: "Caminhos jurídicos construídos a partir das particularidades de cada caso." },
  { icon: ChatBubbleLeftRightIcon, title: "Comunicação clara", text: "Informações acessíveis para que você compreenda cada etapa." },
  { icon: ShieldCheckIcon, title: "Ética e compromisso", text: "Atuação responsável, transparente e orientada a resultados consistentes." },
];

const trust = [
  { icon: HeartIcon, label: "Escuta atenta", text: "O cuidado começa por compreender sua realidade antes de propor qualquer caminho." },
  { icon: ScaleIcon, label: "Técnica e equilíbrio", text: "Decisões jurídicas fundamentadas, prudentes e alinhadas aos seus objetivos." },
  { icon: SparklesIcon, label: "Excelência no detalhe", text: "Rigor técnico e dedicação em todas as etapas do atendimento." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://coboadvocacia.com.br/#legal-service",
  name: "COBO Advocacia",
  description: "Advocacia & Consultoria Jurídica em Uberaba/MG.",
  url: "https://coboadvocacia.com.br",
  image: [
    "https://coboadvocacia.com.br/images/fachada-cobo.png",
    "https://coboadvocacia.com.br/images/entrada-cobo.png",
  ],
  telephone: DISPLAY_PHONE,
  hasMap: MAPS_URL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: DISPLAY_PHONE,
    contactType: "Atendimento jurídico",
    availableLanguage: "Portuguese",
  },
  areaServed: { "@type": "City", name: "Uberaba" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Episcopal, nº 71, sala 302",
    addressLocality: "Uberaba",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  serviceType: ["Direito Civil", "Direito Trabalhista", "Direito Previdenciário", "Direito do Consumidor", "Direito Empresarial", "Consultoria Jurídica"],
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-5 flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.24em] ${light ? "text-gold-300" : "text-gold-600"}`}><span className="h-px w-8 bg-current" />{children}</p>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section id="inicio" className="hero-grid relative flex min-h-[760px] items-center overflow-hidden bg-ink pb-20 pt-32 text-white lg:min-h-screen">
          <div className="absolute -right-48 top-16 h-[620px] w-[620px] rounded-full border border-gold-400/10" />
          <div className="absolute -right-24 top-40 h-[390px] w-[390px] rounded-full border border-gold-400/20" />
          <div className="absolute right-24 top-1/2 hidden h-44 w-44 -translate-y-1/2 rotate-45 border border-gold-400/20 xl:block" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
            <div className="max-w-4xl animate-reveal">
              <Eyebrow light>Advocacia & Consultoria Jurídica</Eyebrow>
              <h1 className="max-w-4xl font-display text-[clamp(3rem,7vw,6.7rem)] font-normal leading-[0.96] tracking-[-0.045em]">
                Advocacia estratégica, <span className="text-gold-300 italic">ética</span> e comprometida com resultados.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">Atendimento jurídico profissional para proteger seus direitos com segurança, clareza e excelência.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between gap-8 bg-gold-gradient px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-gold transition hover:-translate-y-0.5">
                  Agendar atendimento <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#areas" className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-gold-300 hover:text-gold-300">Conhecer áreas de atuação</a>
              </div>
            </div>
            <div className="relative hidden min-h-[440px] items-center justify-center lg:flex">
              <div className="absolute h-80 w-80 rounded-full border border-gold-300/30" />
              <div className="absolute h-64 w-64 rounded-full border border-gold-300/15" />
              <Image src="/images/logo-cobo-oficial.jpeg" alt="Logo oficial da COBO Advocacia e Consultoria Jurídica" width={1024} height={1024} priority className="relative z-10 h-[420px] w-[420px] object-contain mix-blend-screen" />
            </div>
          </div>
          <a href="#sobre" aria-label="Ir para a próxima seção" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/40 transition hover:text-gold-300 lg:block"><ArrowDownIcon className="h-5 w-5 animate-bounce" /></a>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-parchment py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div>
              <Eyebrow>Sobre o escritório</Eyebrow>
              <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">Direito exercido com <span className="italic text-gold-600">propósito.</span></h2>
            </div>
            <div className="relative border-l border-gold-400 bg-white p-7 shadow-soft sm:p-12">
              <p className="font-display text-2xl leading-relaxed text-ink sm:text-3xl">A COBO Advocacia une conhecimento técnico, visão estratégica e atendimento humano para oferecer segurança em decisões que importam.</p>
              <p className="mt-7 max-w-3xl leading-8 text-black/60">Cada demanda é conduzida com seriedade, escuta e transparência. Nosso compromisso é traduzir a complexidade jurídica, construir soluções responsáveis e manter o cliente informado durante todo o percurso.</p>
              <div className="mt-10 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
                {['Ética', 'Estratégia', 'Transparência'].map((item) => <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]"><CheckIcon className="h-4 w-4 text-gold-500" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="scroll-mt-20 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div><Eyebrow>Áreas de atuação</Eyebrow><h2 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">Atuação jurídica<br />com visão integral.</h2></div>
              <p className="max-w-lg text-base leading-8 text-black/55 lg:justify-self-end">Orientação técnica e estratégica para pessoas e empresas, com soluções construídas de forma responsável e personalizada.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
              {areas.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="group relative min-h-72 bg-white p-8 transition duration-500 hover:bg-ink sm:p-10">
                  <div className="flex items-start justify-between"><Icon className="h-8 w-8 text-gold-500 transition group-hover:text-gold-300" /><span className="font-display text-sm italic text-black/25 group-hover:text-white/25">0{index + 1}</span></div>
                  <h3 className="mt-12 font-display text-2xl text-ink transition group-hover:text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/55">{text}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="scroll-mt-20 overflow-hidden bg-charcoal py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <Eyebrow light>Nossos diferenciais</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">Presença, técnica e <span className="italic text-gold-300">confiança.</span></h2>
              <p className="mt-7 max-w-md leading-8 text-white/55">Uma advocacia próxima e preparada para conduzir suas demandas com atenção aos detalhes.</p>
              <div className="mt-10 inline-flex items-center gap-3 border border-gold-400/30 px-5 py-4 text-xs uppercase tracking-[0.15em] text-gold-300"><MapPinIcon className="h-5 w-5" />Uberaba/MG e região</div>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {differentials.map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-charcoal p-8 transition hover:bg-white/[0.04] sm:p-10">
                  <Icon className="h-7 w-7 text-gold-300" />
                  <h3 className="mt-8 font-display text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gold-gradient py-20">
          <div className="absolute right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-black/10" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
            <div><p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-black/55">Converse com nossa equipe</p><h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Precisa de orientação jurídica segura?</h2></div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="group inline-flex shrink-0 items-center gap-8 bg-ink px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:shadow-xl">Fale agora com a COBO <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </section>

        <section className="bg-parchment py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl"><Eyebrow>Princípios que orientam</Eyebrow><h2 className="font-display text-4xl tracking-tight sm:text-6xl">Confiança se constrói em cada detalhe.</h2></div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {trust.map(({ icon: Icon, label, text }) => (
                <article key={label} className="border-t border-gold-500 bg-white p-8 shadow-soft sm:p-10">
                  <Icon className="h-7 w-7 text-gold-600" /><h3 className="mt-8 font-display text-2xl">{label}</h3><p className="mt-4 text-sm leading-7 text-black/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div><Eyebrow>Localização</Eyebrow><h2 className="font-display text-4xl tracking-tight sm:text-6xl">Em Uberaba,<br /><span className="italic text-gold-600">perto de você.</span></h2><p className="mt-7 max-w-md leading-8 text-black/55">Atendimento jurídico para Uberaba/MG e região, com proximidade e praticidade.</p><address className="mt-6 not-italic text-sm leading-7 text-black/60">{STREET_ADDRESS}<br />{DISTRICT_ADDRESS}</address></div>
              <div className="map-pattern relative grid min-h-80 place-items-center overflow-hidden bg-ink p-8 text-center text-white">
                <div className="relative z-10"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold-300/50 bg-ink"><MapPinIcon className="h-7 w-7 text-gold-300" /></div><p className="mt-6 font-display text-3xl">{STREET_ADDRESS}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45">{DISTRICT_ADDRESS}</p><a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-gold-300 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-300 transition hover:text-white">Ver rota no Google Maps <ArrowRightIcon className="h-4 w-4" /></a></div>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:h-[680px] md:grid-cols-[.82fr_1.18fr] md:grid-rows-2">
              <figure className="group relative min-h-[520px] overflow-hidden bg-ink md:row-span-2 md:min-h-0">
                <Image src="/images/fachada-cobo-vertical.png" alt="Fachada do edifício onde está localizada a COBO Advocacia em Uberaba" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20 text-white"><p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold-300">Nosso endereço</p><figcaption className="mt-2 font-display text-2xl">Um espaço preparado para receber você.</figcaption></div>
              </figure>
              <figure className="group relative min-h-72 overflow-hidden bg-ink md:min-h-0">
                <Image src="/images/entrada-cobo.png" alt="Entrada do Edifício Afonso e Alice Dorea, número 71, com identificação da COBO Advocacia" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </figure>
              <figure className="group relative min-h-72 overflow-hidden bg-ink md:min-h-0">
                <Image src="/images/fachada-cobo.png" alt="Fachada e acesso ao edifício da COBO Advocacia na Rua Episcopal, número 71" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
              </figure>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 bg-parchment py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <Eyebrow>Entre em contato</Eyebrow>
              <h2 className="font-display text-4xl tracking-tight sm:text-6xl">Vamos conversar sobre seu caso.</h2>
              <p className="mt-7 max-w-md leading-8 text-black/55">Envie uma mensagem e dê o primeiro passo para compreender seus direitos com clareza.</p>
              <div className="mt-10 border-l border-gold-500 pl-6"><p className="font-display text-xl">COBO Advocacia</p><address className="mt-2 not-italic text-sm leading-6 text-black/50">Advocacia & Consultoria Jurídica<br />{STREET_ADDRESS}<br />{DISTRICT_ADDRESS}<br />{DISPLAY_PHONE}</address></div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-8 pt-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-14 md:grid-cols-[1fr_auto_auto] lg:px-8">
          <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-7 text-white/45">Atuação jurídica ética, estratégica e humanizada para proteger direitos e construir caminhos seguros.</p></div>
          <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-300">Navegação</p><div className="mt-5 grid gap-3 text-sm text-white/55"><a href="#sobre" className="hover:text-white">Sobre</a><a href="#areas" className="hover:text-white">Áreas de atuação</a><a href="#diferenciais" className="hover:text-white">Diferenciais</a><a href="#contato" className="hover:text-white">Contato</a></div></div>
          <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-300">Atendimento</p><address className="mt-5 not-italic text-sm leading-7 text-white/55">{STREET_ADDRESS}<br />{DISTRICT_ADDRESS}<br /><a href={whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">{DISPLAY_PHONE}</a></address></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-7 text-[0.65rem] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} COBO Advocacia. Todos os direitos reservados.</p><p>Ética · Compromisso · Resultados</p></div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Falar com a COBO Advocacia pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-1 hover:scale-105">
        <ChatBubbleLeftRightIcon className="h-7 w-7" />
      </a>
    </>
  );
}
