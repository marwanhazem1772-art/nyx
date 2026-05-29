import NyxOrbit from "./components/nyx-orbit";
import ContactForm from "./components/contact-form";
import SectionHeading from "./components/section-heading";
import SiteNav from "./components/site-nav";

const services = [
  {
    title: "Media Buying",
    description:
      "Performance-focused Meta, TikTok, and Google campaigns built for measurable lead and revenue growth.",
  },
  {
    title: "AI Creative Direction",
    description:
      "High-end AI visuals, static ad creatives, storyboards, and campaign assets designed for attention.",
  },
  {
    title: "Web Development",
    description:
      "Modern responsive websites, ecommerce experiences, and landing pages engineered for conversion.",
  },
  {
    title: "AI Automation",
    description:
      "Workflow automation, chatbots, CRM systems, and intelligent lead handling to scale operations.",
  },
  {
    title: "Brand Growth & Strategy",
    description:
      "Creative planning, funnel strategy, and content systems that unify brand storytelling with growth.",
  },
];

const caseStudies = [
  {
    eyebrow: "CASE STUDY",
    title: "Interior Design Studio Campaign",
    metric: "31.25x ROAS",
    description:
      "Generated 148 qualified messages in 12 days, resulting in 5+ closed deals and 250K+ EGP in revenue from an 8K EGP ad spend.",
    stats: ["148 leads", "5+ closed deals", "250K+ EGP revenue", "8K EGP ad spend", "12 days"],
  },
  {
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "Interior Design Studio Website",
    metric: "Portfolio Website",
    description:
      "Designed and developed a professional website for an interior design studio in Cairo, built to showcase their work, services, and brand credibility.",
    stats: ["Cairo", "Responsive website", "Portfolio-focused", "Lead-ready"],
  },
  {
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "AG Industrial Systems",
    metric: "Corporate Website",
    description:
      "Developed a professional website for AG Industrial Systems, an electrical systems company in Cairo, with a clean structure built for trust, clarity, and lead generation.",
    stats: ["Electrical systems", "Cairo", "Corporate website", "Lead-focused"],
  },
];
const instagramUrl = "https://www.instagram.com/nyxstudioseg?igsh=MW8zNDZlc3N1dTBhcg==";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip bg-[#f4f5f7] text-[#050507]" id="top">
      <section className="nyx-bg-render nyx-bg-render--dark relative isolate overflow-hidden bg-[#050507] text-white">
        <div className="hero-grid-lines" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <SiteNav />
        <NyxOrbit className="motion-drift-xy absolute -right-28 top-44 hidden h-[28rem] w-[28rem] md:block lg:right-[-5rem]" />
        <div className="metal-orb absolute bottom-[-12rem] right-[-8rem] hidden h-[26rem] w-[26rem] lg:block" />
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 pt-24 sm:px-8 md:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-32">
          <div className="reveal-up reveal-delay-1 space-y-9">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-[#8597ff]">NYX Studio</p>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Creative systems built for attention.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#d7dcef] sm:text-xl">
              NYX Studio helps brands grow through paid ads, AI visuals, websites, and automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen rounded-full bg-[#2143ff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#1730d8] hover:shadow-[0_0_30px_rgba(33,67,255,0.48)]"
              >
                Work with NYX
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:border-[#8192ff] hover:bg-white/8"
              >
                See services
              </a>
            </div>
          </div>
          <div className="motion-float-slow reveal-up reveal-delay-2 relative min-h-[350px] overflow-hidden rounded-[1.4rem] border border-white/16 bg-[linear-gradient(170deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-7 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_72%,rgba(45,88,255,0.34),transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 h-24 rounded-xl border border-white/10 bg-[linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.28em] text-[#8fa0ff]">STRATEGIC SPOTLIGHT</p>
                <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-[#dde3f4]">
                  We don&apos;t just run campaigns. We position brands for the next move.
                </p>
              </div>

              <div className="relative mt-8 h-44">
                <div className="absolute left-2 top-8 h-2 w-2 rounded-full bg-[#8ea1ff] blur-[0.5px]" />
                <div className="absolute left-[20%] top-2 h-px w-16 bg-gradient-to-r from-transparent via-[#6f88ff] to-transparent" />
                <div className="absolute left-[14%] top-[58%] h-8 w-8 rounded-full border border-[#7f95ff]/70" />
                <div className="absolute left-[70%] top-[18%] h-9 w-9 rounded-full border border-[#6f88ff]/60" />
                <div className="absolute left-[84%] top-[44%] h-2 w-2 rounded-full bg-[#7f95ff]" />

                <div className="absolute left-[26%] top-1/2 h-16 w-10 -translate-y-1/2 rounded-[999px] bg-[#8795c0]/25 blur-sm" />
                <div className="absolute right-[10%] top-[24%] h-20 w-12 rounded-[999px] bg-[#7f8cab]/20 blur-md" />

                <div className="absolute left-[42%] top-[10%] h-36 w-28 rounded-[999px] bg-[radial-gradient(circle_at_50%_56%,rgba(33,67,255,0.55),transparent_66%)] blur-xl" />

                <svg
                  viewBox="0 0 220 260"
                  className="motion-float-piece absolute left-1/2 top-1/2 h-[12.5rem] w-[10.5rem] -translate-x-1/2 -translate-y-[42%] drop-shadow-[0_14px_24px_rgba(7,14,35,0.75)]"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="knightFill" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f5f7ff" />
                      <stop offset="42%" stopColor="#b9c1d6" />
                      <stop offset="78%" stopColor="#6c768f" />
                      <stop offset="100%" stopColor="#30384a" />
                    </linearGradient>
                    <linearGradient id="knightBase" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#dbe3ff" />
                      <stop offset="100%" stopColor="#4b5670" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M48 242h124c7 0 12 5 12 12v2H36v-2c0-7 5-12 12-12zm22-14h80c2-12 9-22 19-28l13-8-15-17c-6-7-9-16-9-26v-20c0-10-4-20-11-27l-7-7 15-9-8-13-33 7c-4 1-8 3-10 7l-8 12c-3 5-2 11 2 15l14 16-18 10c-11 7-16 20-11 33l8 20-8 6c-11 7-19 18-22 29z"
                    fill="url(#knightFill)"
                    stroke="#f8faff"
                    strokeOpacity="0.42"
                    strokeWidth="1.2"
                  />
                  <circle cx="128" cy="109" r="5.2" fill="#1e2c58" />
                  <path d="M95 183h72" stroke="#dbe4ff" strokeOpacity="0.3" strokeWidth="2" />
                  <path d="M70 242h81" stroke="url(#knightBase)" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="nyx-bg-render nyx-bg-render--light relative mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-[2rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
      >
        <SectionHeading
          eyebrow="Core Services"
          title="Everything needed to create, launch, and scale demand."
          description="NYX Studio combines creative direction, paid media systems, and technical execution to produce work that performs."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group reveal-up ${index % 3 === 0 ? "reveal-delay-1" : index % 3 === 1 ? "reveal-delay-2" : "reveal-delay-3"} rounded-2xl border border-[#0505071f] bg-white px-6 py-7 shadow-[0_8px_30px_rgba(5,5,7,0.07)] transition-all hover:-translate-y-1 hover:border-[#2950ff66] hover:shadow-[0_18px_40px_rgba(33,67,255,0.16)]`}
            >
              <h3 className="font-display text-2xl leading-tight text-[#050507]">{service.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-[#5e6578]">{service.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#2a4dff77] to-transparent" />
            </article>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="nyx-bg-render nyx-bg-render--light mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-[2rem] px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
      >
        <SectionHeading
          eyebrow="Selected Work"
          title="Campaign and funnel systems built for measurable outcomes."
          description="A snapshot of recent performance stories where strategy, creative production, and execution operated as one."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className={`reveal-up ${index % 3 === 0 ? "reveal-delay-1" : index % 3 === 1 ? "reveal-delay-2" : "reveal-delay-3"} relative overflow-hidden rounded-2xl border border-[#05050720] bg-white p-5 shadow-[0_10px_30px_rgba(5,5,7,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(5,5,7,0.16)] sm:p-6`}
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(33,67,255,0.28),transparent_72%)]" />
              <p className="text-[10px] uppercase tracking-[0.23em] text-[#5d6785]">{study.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl leading-tight sm:text-2xl">{study.title}</h3>
              <p className="mt-4 font-display text-3xl leading-none text-[#1531d8] sm:text-4xl">{study.metric}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-[#596178] sm:text-[0.97rem]">{study.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.stats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#2143ff33] bg-[#2143ff12] px-3 py-1 text-[11px] font-medium leading-none text-[#2243d4] transition-colors duration-300 hover:bg-[#2143ff1f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="nyx-bg-render nyx-bg-render--light relative mt-8 overflow-hidden py-24 lg:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="reveal-up reveal-delay-2 rounded-[1.7rem] border border-[#05050726] bg-white px-7 py-12 text-center shadow-[0_20px_45px_rgba(5,5,7,0.12)] sm:px-10">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-[#2d4dff]">Build With NYX</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-[#050507] sm:text-4xl lg:text-5xl">
              Turn strategy, creative, and systems into measurable brand momentum.
            </h2>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen mt-8 inline-flex rounded-full bg-[#1e40ff] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#1832d1] hover:shadow-[0_0_34px_rgba(33,67,255,0.4)]"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="nyx-bg-render nyx-bg-render--dark surface-transition relative mt-8 bg-[#0b0d12] py-24 text-white lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you are building."
            description="Share your goals, timeline, and current growth challenges. We will map a tailored strategy."
            inverse
          />
          <ContactForm />
        </div>
      </section>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open NYX Studio Instagram"
        className="btn-sheen fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/90 text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 hover:bg-black md:bottom-7 md:right-7"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5.2" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <footer className="border-t border-[#ffffff17] bg-[#050507] py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 text-sm text-[#b0b8cf] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>(c) {new Date().getFullYear()} NYX Studio. Creative systems built for attention.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
