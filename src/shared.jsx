import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, MessageCircle, Mail, Check } from 'lucide-react'

// Prefix public-folder assets with BASE_URL so paths resolve on GitHub Pages subdirectory deployments
export const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

export const PAXISS_URL = 'https://paxiss.co.za'
export const OVERVIEW_PDF = img('downloads/PAXISS-Product-Overview.pdf')
export const PHONE_DISPLAY = '012 346 6551'
export const PHONE_TEL = 'tel:+27123466551'
export const WA_DISPLAY = '076 387 7704'
export const WA_URL =
  'https://wa.me/27763877704?text=Hello%20IDE%20Systems%2C%20I%20would%20like%20to%20book%20a%20PAXISS%20walkthrough.'
export const EMAIL = 'freek@idesystems.co.za'

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Banking Software', to: '/banking-software' },
  { label: 'Software Development', to: '/software-development' },
  { label: 'Mobile Apps', to: '/mobile-app-development' },
  { label: 'Recent Projects', to: '/recent-projects' },
  { label: 'About Us', to: '/about-us' },
]

/* Placeholders still to be confirmed by the client are highlighted so reviewers can spot them. */
export function rich(text) {
  return text.split(/(\[(?:CONFIRM|PROOF)[^\]]*\])/g).map((part, i) =>
    /^\[(?:CONFIRM|PROOF)/.test(part) ? (
      <mark key={i} className="bg-[#FFE866] text-[#1A2332] px-1.5 py-0.5 rounded-sm">
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) {
      m = document.createElement('meta')
      m.setAttribute('name', 'description')
      document.head.appendChild(m)
    }
    m.setAttribute('content', description)
  }, [title, description])
}

export function useMotionProps() {
  const reduce = useReducedMotion()
  return {
    fadeUp: (delay = 0) => ({
      initial: { opacity: 0, y: reduce ? 0 : 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay },
    }),
  }
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
export const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Eyebrow({ children, dark }) {
  return (
    <p className={`font-display text-sm font-semibold uppercase tracking-[0.18em] mb-5 ${dark ? 'text-[#F2A262]' : 'text-[#A8510F]'}`}>
      {children}
    </p>
  )
}

const btnBase =
  'inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3 rounded-sm font-display font-bold text-[17px] transition-colors text-center'

const VARIANTS = {
  primary: 'bg-[#D2691E] text-[#0F1C2E] hover:bg-[#E07A2E]',
  ghost: 'border-2 border-[#F0F4F8] text-[#F0F4F8] hover:bg-white hover:text-[#0F1C2E]',
  navy: 'bg-[#0F1C2E] text-[#F0F4F8] hover:bg-[#1c3350]',
  outlineNavy: 'border-2 border-[#0F1C2E] text-[#0F1C2E] hover:bg-[#0F1C2E] hover:text-[#F0F4F8]',
}

function Btn({ variant, href, to, children, icon: Icon, external, className = '' }) {
  const cls = `${btnBase} ${VARIANTS[variant]} ${className}`
  const inner = (
    <>
      {Icon && <Icon size={20} aria-hidden="true" />}
      {children}
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={cls}>
      {inner}
    </a>
  )
}

export const PrimaryButton = props => <Btn variant="primary" {...props} />
export const GhostButton = props => <Btn variant="ghost" {...props} />
export const NavyButton = props => <Btn variant="navy" {...props} />
export const OutlineNavyButton = props => <Btn variant="outlineNavy" {...props} />

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkCls = ({ isActive }) =>
    `text-[15px] font-medium py-3 whitespace-nowrap transition-colors hover:text-[#F2A262] ${
      isActive ? 'text-[#F2A262]' : 'text-[#F0F4F8]'
    }`

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          scrolled || open ? 'bg-[#0F1C2E] shadow-[0_2px_20px_rgba(0,0,0,0.35)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-8 flex items-center justify-between">
          <Link to="/" aria-label="IDE Systems home" className="shrink-0 py-3">
            <img src={img('images/ide-logo-white.png')} alt="IDE Systems" className="h-[60px] xl:h-[75px] w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden min-[1100px]:flex items-center gap-5 xl:gap-7">
            {NAV.map(n => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact-us"
              className="inline-flex items-center min-h-[44px] px-5 rounded-sm bg-[#D2691E] text-[#0F1C2E] font-display font-bold text-[15px] hover:bg-[#E07A2E] transition-colors whitespace-nowrap"
            >
              Book a walkthrough
            </Link>
          </nav>

          <button
            className="min-[1100px]:hidden inline-flex items-center justify-center w-12 h-12 text-[#F0F4F8]"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#0F1C2E] pt-[110px] px-8 pb-32 overflow-y-auto min-[1100px]:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...NAV, { label: 'Contact', to: '/contact-us' }].map(n => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="font-display text-[28px] font-semibold text-[#F0F4F8] py-4 border-b border-white/15 min-h-[44px]"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact-us"
              className="mt-10 inline-flex items-center gap-3 min-h-[52px] px-7 rounded-sm bg-[#D2691E] text-[#0F1C2E] font-display font-bold text-[17px]"
            >
              Book a walkthrough
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const HERO_BG =
  'radial-gradient(ellipse 60% 85% at 95% 105%, rgba(232,122,38,1) 0%, rgba(210,105,30,0.7) 30%, rgba(210,105,30,0.25) 55%, rgba(210,105,30,0) 80%), linear-gradient(135deg, #0F1C2E 0%, #16345a 55%, #1f4e82 100%)'

// Hero used on every page. `home` gives the larger top padding of the landing hero.
export function PageHero({ eyebrow, title, children, home }) {
  return (
    <section
      className={`relative bg-[#0F1C2E] text-[#F0F4F8] ${
        home ? 'pt-[120px] xl:pt-[140px] pb-32 md:pb-40' : 'pt-[130px] xl:pt-[150px] pb-28 md:pb-36'
      } clip-diag overflow-hidden`}
    >
      <div className="absolute inset-0" style={{ background: HERO_BG }} />
      <div className="relative max-w-[1180px] mx-auto px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-[860px]">
          {eyebrow && (
            <motion.div variants={item}>
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <motion.h1 variants={item} className="font-display font-bold text-[36px] leading-[1.1] sm:text-5xl lg:text-[52px]">
            {title}
          </motion.h1>
          {children && (
            <motion.div variants={item} className="mt-7 text-[19px] leading-relaxed max-w-[720px]">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// Orange closing band that sits directly above the footer
export function CtaBand({ title, text, primary, secondary }) {
  const { fadeUp } = useMotionProps()
  return (
    <section className="bg-[#D2691E] text-[#0F1C2E] px-8 clip-diag-top clip-diag pb-32 md:pb-40 pt-32">
      <motion.div {...fadeUp()} className="max-w-[900px] mx-auto text-center">
        <h2 className="font-display font-bold text-[32px] sm:text-[44px] leading-tight">{title}</h2>
        <p className="mt-5 text-[19px]">{rich(text)}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {primary}
          {secondary}
        </div>
      </motion.div>
    </section>
  )
}

export const walkthroughBtn = <NavyButton to="/contact-us" icon={ArrowRight}>Book a walkthrough</NavyButton>
export const talkBtn = <NavyButton to="/contact-us" icon={ArrowRight}>Talk to our team</NavyButton>

export function ContactDetails() {
  return (
    <>
      <ul className="space-y-3">
        <li>
          <a href={PHONE_TEL} className="inline-flex items-center gap-4 min-h-[44px] text-xl font-display font-bold text-[#0F1C2E] hover:text-[#A8510F]">
            <Phone size={22} aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
        </li>
        <li>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 min-h-[44px] text-xl font-display font-bold text-[#0F1C2E] hover:text-[#A8510F]">
            <MessageCircle size={22} aria-hidden="true" /> WhatsApp {WA_DISPLAY}
          </a>
        </li>
        <li>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-4 min-h-[44px] text-xl font-display font-bold text-[#0F1C2E] hover:text-[#A8510F] break-all">
            <Mail size={22} aria-hidden="true" /> {EMAIL}
          </a>
        </li>
      </ul>
      <p className="mt-8 text-[17px]">
        <strong>Office hours:</strong> Monday to Friday, 09:00 to 17:00
      </p>
    </>
  )
}

const INSTITUTION_TYPES = ['Co-operative bank', 'CFI', 'Credit union', 'Stokvel', 'Other']
const INTERESTS = ['PAXISS core banking', 'Custom software', 'Mobile app', 'Other']

/* variant "paxiss": home page walkthrough form. variant "general": contact page form. */
export function Contact({ variant = 'paxiss', id = 'contact', heading, intro }) {
  const { fadeUp } = useMotionProps()
  const [sent, setSent] = useState(false)
  const paxiss = variant === 'paxiss'

  const onSubmit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const lines = [
      `Name: ${f.get('name')}`,
      `Role: ${f.get('role')}`,
      `${paxiss ? 'Institution' : 'Institution or company'}: ${f.get('institution')}`,
      paxiss ? `Institution type: ${f.get('type')}` : `Interested in: ${f.get('interest')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      '',
      paxiss ? 'System used today:' : 'Message:',
      f.get('message'),
    ]
    const subject = paxiss ? 'PAXISS walkthrough request' : 'Website enquiry'
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject + ' from ' + f.get('institution'))}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  const field =
    'w-full min-h-[48px] px-4 py-3 border border-[#1A2332]/40 rounded-sm bg-white text-[#1A2332] text-[17px] placeholder:text-[#4a5668]'
  const label = 'block font-semibold mb-2 text-[#1A2332]'

  return (
    <section id={id} className="bg-white text-[#1A2332] py-24 px-8 -mt-10 md:-mt-16 relative scroll-mt-48">
      <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div {...fadeUp()}>
          {heading && (
            <>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="font-display font-bold text-[32px] sm:text-[40px] leading-tight text-[#0F1C2E]">{heading}</h2>
              <p className="mt-5 mb-10 text-[19px]">{intro}</p>
            </>
          )}
          <ContactDetails />
          {!paxiss && <p className="mt-6 text-[17px]">{rich('[CONFIRM: physical office address]')}</p>}
        </motion.div>

        <motion.form {...fadeUp(0.1)} onSubmit={onSubmit} className="bg-[#F0F4F8] p-8 sm:p-10 rounded-sm space-y-5">
          <div>
            <label htmlFor={`${id}-name`} className={label}>Your name</label>
            <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor={`${id}-role`} className={label}>Your role</label>
            <input id={`${id}-role`} name="role" autoComplete="organization-title" className={field} />
          </div>
          <div>
            <label htmlFor={`${id}-institution`} className={label}>{paxiss ? 'Institution' : 'Institution or company'}</label>
            <input id={`${id}-institution`} name="institution" required autoComplete="organization" className={field} />
          </div>
          <div>
            <label htmlFor={`${id}-select`} className={label}>{paxiss ? 'Institution type' : "I'm interested in"}</label>
            <select id={`${id}-select`} name={paxiss ? 'type' : 'interest'} className={field} defaultValue="">
              <option value="" disabled>Select one</option>
              {(paxiss ? INSTITUTION_TYPES : INTERESTS).map(o => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={`${id}-email`} className={label}>Email</label>
              <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor={`${id}-phone`} className={label}>Phone</label>
              <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={field} />
            </div>
          </div>
          <div>
            <label htmlFor={`${id}-message`} className={label}>{paxiss ? 'What system do you use today?' : 'Message'}</label>
            <textarea id={`${id}-message`} name="message" rows={4} className={field} />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 rounded-sm bg-[#0F1C2E] text-[#F0F4F8] font-display font-bold text-[17px] hover:bg-[#1c3350] transition-colors w-full sm:w-auto"
          >
            {paxiss ? 'Request a walkthrough' : 'Send message'}
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          {sent && (
            <p role="status" className="flex items-center gap-2 font-semibold text-[#1A2332]">
              <Check size={20} aria-hidden="true" /> Your email app should open with your message ready to send.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export function Footer() {
  const linkCls = 'inline-block min-h-[44px] py-2 text-[16px] hover:text-[#F2A262]'
  return (
    <footer className="bg-[#0F1C2E] text-[#F0F4F8]">
      <div className="max-w-[1180px] mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src={img('images/ide-logo-white.png')} alt="IDE Systems" className="h-[45px] w-auto" />
          <p className="mt-4 text-[16px]">
            <strong>IDE Systems, makers of PAXISS.</strong> Core banking software for South African co-operative banks and
            CFIs, and custom software for institutions and businesses.
          </p>
        </div>
        <div>
          <h3 className="font-display font-bold text-lg mb-3">Explore</h3>
          <ul className="space-y-1">
            {[...NAV, { label: 'Contact', to: '/contact-us' }].map(n => (
              <li key={n.to}>
                <Link to={n.to} className={linkCls}>{n.label}</Link>
              </li>
            ))}
            <li>
              <a href={PAXISS_URL} className={linkCls}>PAXISS</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-lg mb-3">Talk to us</h3>
          <ul className="space-y-1 text-[16px]">
            <li><a href={PHONE_TEL} className={linkCls}>{PHONE_DISPLAY}</a></li>
            <li><a href={WA_URL} className={linkCls}>WhatsApp {WA_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 px-8 text-center text-[14px] text-[#F0F4F8]">
        <p>Photos courtesy of Pexels</p>
        <p className="mt-1">
          Website design by{' '}
          <a href="https://flintandfuel.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#F2A262]">
            Flint and Fuel Creative
          </a>
        </p>
      </div>
    </footer>
  )
}
