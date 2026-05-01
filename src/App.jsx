import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  Globe,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X
} from 'lucide-react';
import { useState } from 'react';
import ChatWidget from './components/ChatWidget';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

const services = [
  {
    title: 'Weight Training',
    description: 'Structured strength sessions built around real progression and form.'
  },
  {
    title: 'Personal Training',
    description: 'Focused guidance for faster results, accountability, and confidence.'
  },
  {
    title: 'Fat Loss',
    description: 'Simple training routines designed to help you stay consistent and lean.'
  },
  {
    title: 'Strength Training',
    description: 'Power-focused plans for stamina, muscle gain, and performance.'
  }
];

const highlights = ['Open 24 Hours', 'Friendly Trainers', 'Clean Gym', 'All Equipment', 'Expert Guidance'];

const reviews = [
  {
    quote: 'Motivating environment with a strong focus on consistent progress.',
    author: 'Regular Member'
  },
  {
    quote: 'Friendly trainers and proper guidance made it easy to stay on track.',
    author: 'New Joiner'
  },
  {
    quote: 'All equipment is available and the gym feels clean and organized.',
    author: 'Fitness Enthusiast'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
];

const googleMapsUrl = 'https://www.google.com/maps/place/Rode+fitness+center/';
const justDialUrl =
  'https://www.justdial.com/Nashik/Rode-Fitness-Center-Kashiko-Nagar/0253PX253-X253-260104125850-E4T6_BZDET';
const whatsappUrl = 'https://wa.me/919657882336';
const whatsappPrefill = 'https://wa.me/919657882336?text=Hi%20I%20want%20to%20join%20Rode%20Fitness';
const callUrl = 'tel:+919657882336';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

function SectionLabel({ eyebrow, title, description }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/65">
        <Sparkles size={12} className="text-accent" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{description}</p>
    </motion.div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="glass soft-glow rounded-3xl p-5 text-center">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', goal: 'Muscle Gain' });
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const submitLead = async (event) => {
    event.preventDefault();
    setSubmitState({ status: 'loading', message: 'Submitting...' });

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadForm)
      });

      if (!response.ok) {
        throw new Error('Failed to save lead');
      }

      window.open(whatsappPrefill, '_blank', 'noopener,noreferrer');
      setLeadForm({ name: '', phone: '', goal: 'Muscle Gain' });
      setSubmitState({ status: 'success', message: 'Saved. WhatsApp opened for quick joining.' });
    } catch {
      window.open(whatsappPrefill, '_blank', 'noopener,noreferrer');
      setSubmitState({ status: 'success', message: 'Opening WhatsApp so you can join quickly.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-electric text-black shadow-glow">
              <Dumbbell size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white/95">RODE FITNESS</p>
              <p className="text-xs text-white/50">Center | Nashik</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={callUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-accent/40 hover:bg-accent/10 hover:text-white"
            >
              <Phone size={14} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-electric px-4 py-2 text-sm font-semibold text-black shadow-glow transition hover:scale-[1.02]"
            >
              WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-white/8 bg-black/95 px-4 py-4 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/75"
                  >
                    {item.label}
                  </a>
                ))}
                <a href={callUrl} className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black">
                  Call Now
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top" className="pt-20">
        <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                <Clock3 size={12} className="text-accent" />
                Open 24 Hours
              </p>

              <h1 className="heading-shadow max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Workout Anytime at Nashik’s 24/7 Gym
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                5★ Rated • Expert Guidance • Flexible Timing. Rode Fitness Center is built for people who want a clean,
                serious, and premium training environment that stays open around the clock.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={callUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/85 transition hover:border-accent/40 hover:bg-accent/10"
                >
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/85 transition hover:border-electric/40 hover:bg-electric/10"
                >
                  WhatsApp Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div key={item} className="glass rounded-full px-4 py-2 text-sm text-white/72">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                <Stat value="5.0" label="Google Rating" />
                <Stat value="9" label="Reviews" />
                <Stat value="24/7" label="Always Open" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -right-4 top-24 h-24 w-24 rounded-full bg-electric/20 blur-3xl" />

              <div className="glass soft-glow relative overflow-hidden rounded-[2rem] border-white/12 p-3">
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80"
                    alt="Dark premium gym interior"
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/85 backdrop-blur-xl">
                    Open 24 Hours
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 glass rounded-[1.4rem] p-4 backdrop-blur-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/50">Premium Training Space</p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">High contrast, calm, and powerful.</h2>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                        <Target size={22} />
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/66">
                      Built for people who want serious workouts with a premium feel and zero clutter.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="About Us"
              title="A focused gym environment for real results"
              description="Friendly trainers, proper guidance, and a clean environment are the foundation here. The space is designed to feel premium and motivating without losing practicality."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass soft-glow rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">Proper guidance</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">Every member gets a path that makes sense for their goal and experience.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                      <Users size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">Friendly trainers</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">Supportive coaching that keeps the room approachable and focused.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <BadgeCheck size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">Focus on results</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">Training plans stay simple, consistent, and actually doable.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Flame size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">Clean environment</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">A fresh, polished space helps members train with confidence.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4">
                <div className="glass soft-glow overflow-hidden rounded-[2rem] p-3">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
                    alt="Strength training in a premium gym"
                    className="h-72 w-full rounded-[1.6rem] object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass rounded-3xl p-5">
                    <div className="text-3xl font-semibold">24/7</div>
                    <div className="mt-1 text-sm text-white/60">Open hours for every schedule</div>
                  </div>
                  <div className="glass rounded-3xl p-5">
                    <div className="text-3xl font-semibold">100%</div>
                    <div className="mt-1 text-sm text-white/60">Attention on your training goals</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="Services"
              title="Training options that keep things simple and effective"
              description="Everything is built to help members start fast, stay consistent, and see progress with the least friction possible."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="glass soft-glow rounded-[1.8rem] p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent">
                    <Dumbbell size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="Why Choose Us"
              title="A reliable gym that feels professional from the moment you enter"
              description="This is a place for people who want clear value: constant access, a clean setup, and guidance that makes joining feel easy."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {[
                { icon: Clock3, title: '24/7 Open', text: 'Train whenever your schedule allows.' },
                { icon: ShieldCheck, title: 'Proper Guidance', text: 'Support that keeps the workouts useful.' },
                { icon: Users, title: 'Friendly Trainers', text: 'Approachable help without the pressure.' },
                { icon: BadgeCheck, title: 'Clean Gym', text: 'A tidy space that feels premium.' },
                { icon: Dumbbell, title: 'All Equipment', text: 'Built for varied training styles.' }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="glass rounded-[1.6rem] p-5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-accent">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="Reviews"
              title="Real-world tone, not hype"
              description="The common feedback is simple: the place feels motivating, the staff is friendly, and the equipment is ready when you are."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <motion.div
                  key={review.quote}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="glass soft-glow rounded-[1.8rem] p-6"
                >
                  <div className="mb-4 flex text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base leading-7 text-white/80">“{review.quote}”</p>
                  <p className="mt-5 text-sm text-white/48">{review.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="Gallery"
              title="Dark, high-contrast visuals with subtle motion"
              description="Images are framed with overlays and soft zoom so the page feels premium without becoming heavy."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent opacity-85" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl">
                      Premium Training
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel
              eyebrow="Contact"
              title="Join in one tap"
              description="Use the lead form or go straight to call and WhatsApp. The bottom bar keeps the key actions close on mobile."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass soft-glow rounded-[2rem] p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">Gym Details</p>
                    <h3 className="mt-2 text-2xl font-semibold">Rode Fitness Center</h3>
                  </div>
                  <div className="rounded-2xl bg-accent/10 px-4 py-2 text-sm text-accent">5.0 ★</div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-white/70">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <MapPin className="mt-0.5 shrink-0 text-accent" size={18} />
                    <div>
                      <p className="font-medium text-white">Radha Vasudev Batavia Nagar, Govind Nagar, Nashik</p>
                      <p className="mt-1 text-white/55">Maharashtra 422101</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a href={callUrl} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent/40 hover:bg-accent/10">
                      <Phone size={18} className="text-electric" />
                      <span>+91 9657882336</span>
                    </a>
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent/40 hover:bg-accent/10">
                      <Globe size={18} className="text-accent" />
                      <span>Google Maps</span>
                    </a>
                    <a href={justDialUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent/40 hover:bg-accent/10 sm:col-span-2">
                      <ChevronRight size={18} className="text-white/70" />
                      <span>JustDial listing</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <iframe
                    title="Rode Fitness Center map"
                    src="https://www.google.com/maps?q=Rode%20fitness%20center&output=embed"
                    className="h-72 w-full border-0 grayscale-[0.15]"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="glass soft-glow rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent">
                    <Send size={18} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Quick Join Form</h3>
                    <p className="text-sm text-white/55">Submit your details and we’ll route you to WhatsApp.</p>
                  </div>
                </div>

                <form className="mt-6 space-y-4" onSubmit={submitLead}>
                  <input
                    value={leadForm.name}
                    onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))}
                    required
                    placeholder="Full name"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/45 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent/50"
                  />
                  <input
                    value={leadForm.phone}
                    onChange={(event) => setLeadForm((current) => ({ ...current, phone: event.target.value }))}
                    required
                    placeholder="Phone number"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/45 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent/50"
                  />
                  <select
                    value={leadForm.goal}
                    onChange={(event) => setLeadForm((current) => ({ ...current, goal: event.target.value }))}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/45 px-4 text-sm text-white outline-none transition focus:border-accent/50"
                  >
                    <option>Muscle Gain</option>
                    <option>Fat Loss</option>
                    <option>Strength Training</option>
                    <option>General Fitness</option>
                  </select>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-electric px-5 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
                  >
                    Join on WhatsApp
                    <ArrowRight size={16} />
                  </button>

                  <p className={`text-sm ${submitState.status === 'success' ? 'text-emerald-400' : 'text-white/55'}`}>
                    {submitState.message || 'We will save your lead and open WhatsApp for a fast response.'}
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">Rode Fitness Center</p>
              <p className="mt-2 text-sm text-white/55">24/7 premium gym in Nashik with simple, focused joining.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/65">
              <a href={callUrl} className="transition hover:text-white">Call</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">Maps</a>
              <a href={justDialUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">JustDial</a>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 px-4 py-3 backdrop-blur-2xl md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
          <a
            href={callUrl}
            className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-sm font-semibold text-white"
          >
            Call Now
          </a>
          <a
            href={whatsappPrefill}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-electric text-sm font-semibold text-black"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <ChatWidget />
    </div>
  );
}

export default App;