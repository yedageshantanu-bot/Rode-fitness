'use client';

import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  ArrowRight,
  Award,
  ChevronUp,
  Clock3,
  Dumbbell,
  Flame,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Trophy,
  Users,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const whatsapp = 'https://wa.me/919657882336?text=Hi%20Rode%20Fitness%20Center%2C%20I%20want%20to%20join.';
const phone = 'tel:+919657882336';
const mapsUrl = 'https://www.google.com/maps/place/Rode+fitness+center/@19.9825905,73.7736464,17z';
const mapsEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6172976743906!2d73.77364637517421!3d19.9825905228872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb49d57c3e1d%3A0x7b9a64d66e120c4b!2sRode%20fitness%20center!5e0!3m2!1sen!2sin!4v1777657286496!5m2!1sen!2sin';

const navLinks = [
  ['Home', '#home'],
  ['Programs', '#programs'],
  ['About', '#about'],
  ['Trainers', '#trainers'],
  ['Contact', '#contact']
];

const programs = [
  ['Weight Gain', 'Up to 8kg', 'Progressive strength, nutrition direction, and weekly accountability.', 'flame'],
  ['Weight Loss', 'Up to 6kg', 'Fat-loss training with conditioning, habits, and clean tracking.', 'heart'],
  ['Weight Lifting', 'Form-first coaching for stronger, safer compound lifts.', 'dumbbell'],
  ['Body Building', 'Hypertrophy-focused routines built around visible transformation.', 'trophy'],
  ['Zumba', 'High-energy dance fitness that keeps cardio fun and consistent.', 'sparkles'],
  ['CrossFit', 'Functional strength, endurance, and intensity in coached sessions.', 'timer']
];

const services = [
  ['Massage', 'Soft-tissue support to relax tight muscles after tough sessions.'],
  ['Stretching', 'Guided mobility work for better movement and injury prevention.'],
  ['Recovery Support', 'Practical recovery routines that help you train consistently.']
];

const trainers = [
  {
    name: 'Rohit Rode',
    role: 'Strength & Transformation Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Aarav Patil',
    role: 'Bodybuilding Specialist',
    image: 'https://images.unsplash.com/photo-1604480133435-25b86862d276?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Neha Sharma',
    role: 'Zumba & Ladies Batch Coach',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=85'
  }
];

const testimonials = [
  ['Lost 5kg in three months and finally learned how to train without confusion.', 'Priya K.'],
  ['The trainers correct form properly. It feels premium, serious, and friendly.', 'Amit S.'],
  ['Ladies batch made me comfortable from day one. Clean setup and great energy.', 'Rutuja M.'],
  ['Best part is the guidance. You do not feel lost after joining.', 'Sameer P.']
];

const plans = [
  ['Starter', '3 Months', 'Basic gym access with workout guidance.', '₹4,999'],
  ['Transformation', '3 Months', 'Goal-based program, check-ins, and diet direction.', '₹7,999', true],
  ['Elite Coaching', '3 Months', 'Personal attention, advanced tracking, and recovery plan.', '₹11,999']
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] ${light ? 'border-black/10 bg-black/5 text-charcoal' : 'border-white/10 bg-white/5 text-gold'}`}>
        <Sparkles size={13} />
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl ${light ? 'text-charcoal' : 'text-bone'}`}>{title}</h2>
      <p className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${light ? 'text-black/62' : 'text-white/64'}`}>{text}</p>
    </motion.div>
  );
}

function ProgramIcon({ icon }) {
  const props = { size: 24 };

  if (icon === 'flame') return <Flame {...props} />;
  if (icon === 'heart') return <HeartPulse {...props} />;
  if (icon === 'dumbbell') return <Dumbbell {...props} />;
  if (icon === 'trophy') return <Trophy {...props} />;
  if (icon === 'sparkles') return <Sparkles {...props} />;
  return <Timer {...props} />;
}

function Counter({ end, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1300, 1);
      setValue(Math.floor(end * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, inView]);

  return (
    <div ref={ref} className="glass rounded-3xl p-5 text-center">
      <div className="font-display text-4xl font-extrabold text-white">{value}{suffix}</div>
      <div className="mt-1 text-sm text-white/58">{label}</div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 20));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? 'border-white/10 bg-black/60 shadow-2xl backdrop-blur-2xl' : 'border-white/5 bg-black/25 backdrop-blur-xl'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Rode Fitness Center home">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30 bg-white">
            <Image src="/logo.png" alt="Rode Fitness Center logo" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span>
            <span className="block font-display text-sm font-extrabold tracking-[0.22em] text-white">RODE FITNESS</span>
            <span className="block text-xs text-white/52">Center</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-white/68 transition hover:text-gold">{label}</a>
          ))}
        </nav>

        <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-bone md:inline-flex">
          Join Now
          <ArrowRight size={16} />
        </a>

        <button type="button" onClick={() => setOpen((current) => !current)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/8 text-white lg:hidden" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t border-white/10 bg-black/92 px-4 py-4 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78">{label}</a>
              ))}
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-2 rounded-2xl bg-gold px-4 py-3 text-center text-sm font-extrabold text-black">Join Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Home() {
  const [testimonial, setTestimonial] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setShowTop(latest > 650));

  useEffect(() => {
    const timer = setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="min-h-screen text-bone">
      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90" alt="Premium gym training floor" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/26" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              <ShieldCheck size={14} />
              Premium 90-Day Transformation
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white text-balance sm:text-7xl lg:text-8xl">
              Transform Your Body in 90 Days
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/76">Professional Training. Real Results.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-extrabold text-black shadow-glow transition hover:-translate-y-1 hover:bg-bone">
                Join Now
                <ArrowRight size={18} />
              </a>
              <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-moss/50 hover:bg-moss/15">
                View Programs
                <Dumbbell size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.18 }} className="glass max-w-md rounded-[2rem] p-5 lg:ml-auto">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div><p className="font-display text-3xl font-extrabold">20+</p><p className="text-xs text-white/58">Years</p></div>
              <div><p className="font-display text-3xl font-extrabold">90</p><p className="text-xs text-white/58">Days</p></div>
              <div><p className="font-display text-3xl font-extrabold">6</p><p className="text-xs text-white/58">Programs</p></div>
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-4">
              <p className="text-sm font-semibold text-gold">Limited seats for goal-based batches</p>
              <p className="mt-2 text-sm leading-6 text-white/62">Weight gain, fat loss, CrossFit, bodybuilding, and ladies-only training in a focused environment.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="programs" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Programs" title="Goal-specific training with measurable outcomes" text="Choose the path that fits your body, schedule, and confidence level. Every program is designed to feel structured from day one." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(([title, result, text, icon], index) => (
              <motion.article key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.02 }} className="group glass rounded-[1.7rem] p-6 transition hover:border-gold/35 hover:shadow-glow">
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/12 text-gold transition group-hover:bg-gold group-hover:text-black"><ProgramIcon icon={icon} /></span>
                  <span className="rounded-full border border-moss/25 bg-moss/10 px-3 py-1 text-xs font-bold text-sage">{result}</span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad light-panel">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="relative overflow-hidden rounded-[2rem]">
            <Image src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1400&q=85" alt="Ladies fitness training" width={1100} height={900} className="h-[470px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-white/12 p-5 text-white backdrop-blur-xl">
              <p className="font-display text-3xl font-extrabold">Only Ladies Batch Available</p>
              <p className="mt-2 text-sm leading-6 text-white/74">Safe, comfortable, respectful, and coached with care.</p>
            </div>
          </motion.div>
          <div>
            <SectionHeader light eyebrow="Ladies Special" title="A confident space for women to train consistently" text="Separate batches, supportive coaching, and an environment designed around comfort without compromising intensity." />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Safe Environment', 'Comfortable Coaching', 'Goal-based Plans'].map((item) => (
                <div key={item} className="rounded-3xl border border-black/10 bg-white/55 p-5 shadow-xl">
                  <HeartPulse className="mb-4 text-moss" size={24} />
                  <p className="font-display text-xl font-extrabold text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-7 sm:p-9">
            <SectionHeader eyebrow="Timings" title="Simple batches. Serious work." text="Current highlighted batch timings for focused coaching sessions." />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6"><Clock3 className="mb-4 text-gold" /><p className="text-sm text-white/50">Morning</p><p className="font-display text-4xl font-extrabold">10:00 AM</p></div>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6"><Moon className="mb-4 text-sage" /><p className="text-sm text-white/50">Evening</p><p className="font-display text-4xl font-extrabold">4:00 PM</p></div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-7 sm:p-9">
            <SectionHeader eyebrow="Services" title="Recovery that supports progress" text="Strong training needs smarter recovery. These add-ons help members move and feel better." />
            <div className="mt-9 grid gap-4">
              {services.map(([title, text]) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/6 p-5">
                  <Leaf className="shrink-0 text-moss" />
                  <div><h3 className="font-display text-xl font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/62">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="section-pad light-panel">
        <div className="mx-auto max-w-7xl">
          <SectionHeader light eyebrow="Trainers" title="Experience that makes the room trustworthy" text="20+ years of training experience, with coaching influence from Mr. Maharashtra and Mr. Western India athletes." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <motion.article key={trainer.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/70 shadow-2xl">
                <Image src={trainer.image} alt={trainer.name} width={900} height={1050} className="h-80 w-full object-cover grayscale-[0.08]" />
                <div className="p-6">
                  <p className="font-display text-2xl font-extrabold text-charcoal">{trainer.name}</p>
                  <p className="mt-1 text-sm text-black/58">{trainer.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Results" title="Transformation-focused, not random workouts" text="Clear targets, clean tracking, and coaching that keeps members moving toward visible progress." />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1000&q=85" alt="Before style fitness progress" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full bg-black/65 px-4 py-2 text-sm font-bold backdrop-blur-xl">Before</span></div>
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85" alt="After style fitness progress" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-black">After</span></div>
            </div>
            <div className="grid content-center gap-4">
              <Counter end={500} suffix="+" label="Active members trained" />
              <Counter end={120} suffix="+" label="Transformation stories" />
              <Counter end={20} suffix="+" label="Years experience" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad light-panel">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader light eyebrow="Testimonials" title="Members feel the difference quickly" text="A clean slider with real conversion-focused social proof." />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-2xl sm:p-10">
            <div className="mb-5 flex justify-center gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" size={18} />)}</div>
            <AnimatePresence mode="wait">
              <motion.div key={testimonial} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <p className="font-display text-2xl font-extrabold leading-snug text-charcoal sm:text-4xl">"{testimonials[testimonial][0]}"</p>
                <p className="mt-5 text-sm font-bold text-black/55">{testimonials[testimonial][1]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Pricing" title="3-month plans built for commitment" text="Short enough to start confidently, long enough to see meaningful physical change." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map(([name, duration, text, price, best]) => (
              <motion.article key={name} whileHover={{ y: -8 }} className={`relative rounded-[2rem] p-7 ${best ? 'bg-bone text-charcoal shadow-glow' : 'glass text-white'}`}>
                {best && <span className="absolute right-5 top-5 rounded-full bg-moss px-3 py-1 text-xs font-extrabold text-white">Best Value</span>}
                <p className="text-sm font-bold uppercase tracking-[0.24em] opacity-60">{duration}</p>
                <h3 className="mt-4 font-display text-3xl font-extrabold">{name}</h3>
                <p className={`mt-3 text-sm leading-6 ${best ? 'text-black/62' : 'text-white/62'}`}>{text}</p>
                <p className="mt-7 font-display text-5xl font-extrabold">{price}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-extrabold transition hover:-translate-y-1 ${best ? 'bg-black text-white' : 'bg-gold text-black'}`}>
                  Join Now
                  <ArrowRight size={17} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-bone p-5 text-charcoal shadow-glow sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em]"><Award size={14} /> Start Now</p>
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Start Your Fitness Journey Today</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/62">Message us on WhatsApp and take the first step toward a stronger, leaner, more confident version of yourself.</p>

              <div className="mt-6 rounded-[1.7rem] border border-black/10 bg-white/60 p-5 shadow-xl">
                <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-moss"><MapPin size={17} /> Visit Us</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold">Rode Fitness Center</h3>
                <p className="mt-2 text-sm leading-6 text-black/62">Radha Vasudev Batavia Nagar, Govind Nagar, Nashik, Maharashtra 422101</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1"><MessageCircle size={18} /> Join WhatsApp</a>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-extrabold text-black transition hover:-translate-y-1"><Navigation size={18} /> Get Directions</a>
              </div>
              <a href={phone} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/45 px-7 py-4 text-sm font-extrabold text-black transition hover:-translate-y-1"><Phone size={18} /> Call +91 9657882336</a>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative min-h-[360px] overflow-hidden rounded-[1.9rem] border border-black/10 bg-black shadow-2xl lg:min-h-[500px]">
              <iframe
                src={mapsEmbed}
                title="Rode Fitness Center Google Maps location"
                className="h-full min-h-[360px] w-full border-0 lg:min-h-[500px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                Exact Location
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div className="flex gap-4">
            <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white"><Image src="/logo.png" alt="Rode Fitness Center logo" fill sizes="56px" className="object-contain p-1" /></span>
            <div><p className="font-display text-xl font-extrabold">Rode Fitness Center</p><p className="mt-2 max-w-sm text-sm leading-6 text-white/55">Premium training, transformation programs, ladies batch, and recovery support.</p></div>
          </div>
          <div className="text-sm text-white/58"><p className="font-bold text-white">Contact</p><p className="mt-3">+91 9657882336</p><p className="mt-2">Radha Vasudev Batavia Nagar, Govind Nagar, Nashik</p></div>
          <div><p className="font-bold">Social</p><div className="mt-3 flex gap-3"><a href={whatsapp} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7"><MessageCircle size={18} /></a><a href="#trainers" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7"><Users size={18} /></a><a href="mailto:info@rodefitness.com" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7"><Mail size={18} /></a></div></div>
        </div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-moss text-white shadow-moss transition hover:-translate-y-1" aria-label="Open WhatsApp"><MessageCircle size={25} /></a>
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-xl" aria-label="Scroll to top">
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
