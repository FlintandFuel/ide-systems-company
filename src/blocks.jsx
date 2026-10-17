import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Eyebrow, useMotionProps, stagger, item, rich } from './shared'

const TONES = {
  white: 'bg-white text-[#1A2332]',
  mist: 'bg-[#F0F4F8] text-[#1A2332]',
}

// Light content band. `overlap` tucks it under the clipped edge of the section above.
export function Section({ tone = 'white', overlap, id, children }) {
  return (
    <section id={id} className={`${TONES[tone]} py-24 px-8 relative scroll-mt-48 ${overlap ? '-mt-10 md:-mt-16' : ''}`}>
      <div className="max-w-[1180px] mx-auto">{children}</div>
    </section>
  )
}

export function Heading({ eyebrow, title, children, dark }) {
  const { fadeUp } = useMotionProps()
  return (
    <motion.div {...fadeUp()} className="max-w-[760px]">
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display font-bold text-[32px] sm:text-[40px] leading-tight ${dark ? 'text-[#F0F4F8]' : 'text-[#0F1C2E]'}`}>
        {rich(title)}
      </h2>
      {children && <div className="mt-5 text-[19px] leading-relaxed space-y-4">{children}</div>}
    </motion.div>
  )
}

// Grid of H3 cards. tone: the card background that suits the section behind it.
export function Cards({ items, cols = 'md:grid-cols-3', tone = 'mist' }) {
  const card =
    tone === 'dark'
      ? 'bg-[#16283F] border border-white/15 rounded-sm p-8'
      : `border-t-4 border-[#D2691E] ${tone === 'white' ? 'bg-white' : 'bg-[#F0F4F8]'} p-8`
  const h = tone === 'dark' ? 'text-[#F0F4F8]' : 'text-[#0F1C2E]'
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className={`mt-12 grid ${cols} gap-6`}>
      {items.map(a => (
        <motion.div key={a.title} variants={item} className={card}>
          <h3 className={`font-display font-bold text-2xl ${h}`}>{rich(a.title)}</h3>
          <p className={`mt-3 text-[17px] ${tone === 'dark' ? 'text-[#F0F4F8]' : 'text-[#1A2332]'}`}>{rich(a.body)}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function SmallPrint({ children, dark }) {
  return <p className={`mt-8 text-[16px] italic max-w-[760px] ${dark ? 'text-[#F0F4F8]' : 'text-[#1A2332]'}`}>{children}</p>
}

export function TextLink({ to, href, children, dark, className = '' }) {
  const cls = `inline-flex items-center gap-2 min-h-[44px] font-display font-bold text-[17px] underline underline-offset-4 decoration-2 ${
    dark ? 'text-[#F2A262] hover:text-white' : 'text-[#A8510F] hover:text-[#7a3a09]'
  } ${className}`
  const inner = (
    <>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </>
  )
  return to ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  )
}
