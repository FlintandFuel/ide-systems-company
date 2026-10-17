import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import {
  img, PAXISS_URL, OVERVIEW_PDF, useMotionProps, stagger, item, rich, usePageMeta,
  PageHero, PrimaryButton, GhostButton, NavyButton, OutlineNavyButton, CtaBand, Contact, Eyebrow,
} from '../shared'
import { Section, Heading, Cards, SmallPrint, TextLink } from '../blocks'

const WHY = [
  { title: 'CODI reporting from your own records', body: "PAXISS handles CODI data capture, validation, reporting and submission, so co-operative banks don't compile CODI returns by hand." },
  { title: 'FICA on every client and every related party', body: 'FICA checks and documents are stored electronically on each profile. FICA requirements are applied automatically to related parties too, such as signatories, trustees and guardians, so no file is left incomplete.' },
  { title: 'Regulatory information, complete and current', body: 'PAXISS captures and maintains the information your regulatory, governance and compliance obligations require, so it is ready when a return or inspection is due.' },
  { title: 'An audit trail behind every action', body: 'Every transaction, approval, amendment and log-in is recorded, with who did it, when and from which workstation. Any balance can be traced back to its source.' },
]

const FEATURES = [
  { title: 'One record per member, from the first visit', body: 'Capture personal details, identification and contact information once, along with linked accounts and related parties. Front office and compliance staff work from the same record.' },
  { title: 'Products, interest and fees you define', body: 'Create your own savings, loan, investment and transactional products. Set interest calculations, rates and fee rules for each one yourself, without waiting for a vendor release. PAXISS applies the fees automatically.' },
  { title: 'Transactions post straight to the ledger', body: 'Deposits, withdrawals, transfers, payments and transfers to other institutions post to the general ledger in real time. Standing instructions handle recurring debit-order-style payments automatically.' },
  { title: 'Teller and cash control', body: 'Run several teller positions at once. Cash is tracked by denomination, transfers between tellers and the treasury are recorded, and end-of-day balancing is built in.' },
  { title: 'Member shares, managed in the system', body: 'Issue, transfer and redeem member shares, and print share certificates, in the same system that holds your accounts.' },
  { title: 'In English or Afrikaans', body: 'Switch every screen, menu, message and report between English and Afrikaans.' },
]

const AUDIENCE = [
  { title: 'Co-operative banks', body: 'Registered with and supervised by the Prudential Authority, and members of CODI. PAXISS covers CODI reporting, FICA records and your regulatory information in one system.' },
  { title: 'Co-operative financial institutions (CFIs)', body: 'Growing deposit-takers that have outgrown spreadsheets or ageing systems. PAXISS gives you sound records and reporting now, and room to grow as requirements tighten. CODI has said it will assess bringing CFIs into deposit insurance, and PAXISS already handles CODI reporting if that happens.' },
  { title: 'Credit unions and stokvel organisations', body: 'Member-based groups that need proper records of members, shares and transactions, with a full audit trail, instead of spreadsheets and paper.' },
]

const MOVING = [
  ['Migration you can check:', 'We move your member and ledger data from your current system or spreadsheets, reconcile it with your team, and [CONFIRM: parallel run or sign-off process] before you switch.'],
  ['Control over who does what:', 'Role-based security controls access to every function, data set and transaction. Officials can delegate specific rights temporarily, under controlled and audited conditions, and you can monitor user activity at any time.'],
  ['Your data, hosted and protected:', 'PAXISS runs [CONFIRM: cloud-hosted or on your premises; provider and data centre location]. Data is encrypted [CONFIRM: in transit and at rest] and backed up [CONFIRM: frequency]. Documents and historical records are stored securely for retention and audit.'],
  ['Support from the people who built it:', 'PAXISS is supported locally. You speak directly to the Pretoria team that develops it. [CONFIRM: support hours and response times]'],
  ['Training for your staff:', '[CONFIRM: training format, e.g. on-site, hands-on sessions for front office, finance and compliance staff]'],
  ['If something goes wrong:', 'Your data is yours, and you can export it at any time. [CONFIRM: data export terms; source-code escrow or continuity arrangement]'],
]

const PROJECTS = [
  { tag: 'Python, OpenCV', title: 'Digital image colorimetry system', client: 'University research lab', body: 'Measures colour in video of electrochemical processes to track changes in the solution being studied.' },
  { tag: 'Magic XPA, Android', title: 'Mobile site survey application', client: 'Cellular provider', body: 'Guided asset surveys by field technicians, uploaded to a central database for maintenance planning.' },
  { tag: 'C++, Atmel, LoRa', title: 'Voltage and current control unit', client: 'IoT start-up', body: 'Embedded software that measures and controls remote equipment over a LoRa network.' },
]

function Hero() {
  return (
    <PageHero home eyebrow="PAXISS Banking System" title="Core banking software for South African co-operative banks and CFIs">
      <p>
        Regulatory data, FICA files and audit queries shouldn't depend on spreadsheets and one or two key people. PAXISS
        keeps your member records, FICA documents, CODI reporting and general ledger in one system, so the evidence is
        ready when your auditor or regulator asks.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <PrimaryButton to="/contact-us">Book a walkthrough</PrimaryButton>
        <GhostButton href={PAXISS_URL} icon={ArrowRight}>Explore PAXISS</GhostButton>
      </div>
      <p className="mt-8 text-[17px] font-semibold flex items-start gap-3">
        <span className="w-2 h-2 mt-[11px] rounded-full bg-[#F2A262] shrink-0" aria-hidden="true" />
        Built by IDE Systems, a team with more than 40 years in South African banking software.
      </p>
    </PageHero>
  )
}

function WhyPaxiss() {
  const { fadeUp } = useMotionProps()
  return (
    <Section overlap id="paxiss">
      <Heading eyebrow="Why PAXISS" title="Spend less time compiling regulatory reports">
        <p>
          In many co-operative banks and CFIs, a return still means exporting data, reconciling a spreadsheet, then
          checking and submitting it. Every manual step is a chance for errors.
        </p>
        <p>
          PAXISS builds reporting into daily work. Data is captured and validated once, when it is entered, and your
          reports come from the same records as your ledger.
        </p>
      </Heading>
      <Cards items={WHY} cols="md:grid-cols-2" />
      <motion.div {...fadeUp()}>
        <SmallPrint>PAXISS supports your compliance processes. Responsibility for compliance stays with your institution.</SmallPrint>
        <div className="mt-4">
          <TextLink href={PAXISS_URL}>How PAXISS handles compliance</TextLink>
        </div>
      </motion.div>
    </Section>
  )
}

function Features() {
  const { fadeUp } = useMotionProps()
  return (
    <section className="bg-[#0F1C2E] text-[#F0F4F8] py-24 px-8 clip-diag pb-32 md:pb-40">
      <div className="max-w-[1180px] mx-auto">
        <Heading dark eyebrow="Feature highlights" title="Your members, transactions and ledger in one system">
          <p>Client records, transactions and the ledger live in one place, so your staff don't have to re-type data and reconcile by hand.</p>
        </Heading>
        <Cards items={FEATURES} tone="dark" />
        <motion.div {...fadeUp()} className="mt-12">
          <TextLink dark to="/banking-software">See all PAXISS features</TextLink>
        </motion.div>
      </div>
    </section>
  )
}

function WhoFor() {
  const { fadeUp } = useMotionProps()
  return (
    <Section overlap>
      <Heading eyebrow="Who it is for" title="Banking software for co-operatives, built around how you are regulated" />
      <Cards items={AUDIENCE} />
      <motion.p {...fadeUp()} className="mt-10 text-[19px] max-w-[820px]">
        Large core banking platforms are built for commercial banks, with the cost and complexity to match. Accounting
        packages don't handle member accounts or regulatory reporting. PAXISS is built for member-owned institutions in
        between.
      </motion.p>
    </Section>
  )
}

function Moving() {
  return (
    <Section tone="mist">
      <Heading eyebrow="Moving to PAXISS" title="Replacing a legacy banking system, without putting your members at risk">
        <p>
          Changing your core system is one of the biggest decisions your board will make. The questions are about your
          members' money and your registration, not about features. Here is how we handle them.
        </p>
      </Heading>
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 grid md:grid-cols-2 gap-6"
      >
        {MOVING.map(([lead, body]) => (
          <motion.li key={lead} variants={item} className="bg-white border-t-4 border-[#D2691E] p-8 text-[17px]">
            <strong className="font-display text-xl text-[#0F1C2E] block mb-2">{lead}</strong>
            {rich(body)}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

function Beyond() {
  const { fadeUp } = useMotionProps()
  return (
    <section className="relative bg-[#16283F] text-[#F0F4F8] py-24 px-8 clip-diag pb-32 md:pb-40 overflow-hidden">
      <div className="relative max-w-[1180px] mx-auto">
        <Heading dark eyebrow="Beyond banking" title="The same team builds your other software" />
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div id="software" {...fadeUp()} className="scroll-mt-48 bg-[#0F1C2E] border border-white/15 rounded-sm overflow-hidden">
            <img src={img('images/services.jpg')} alt="Financial dashboards on an office desk" className="w-full aspect-[16/9] object-cover" />
            <div className="p-8">
              <h3 className="font-display font-bold text-2xl">Software development</h3>
              <p className="mt-3 text-[17px]">
                Back-office systems, process automation and research tools, built to your specification and supported
                after go-live.
              </p>
              <div className="mt-4"><TextLink dark to="/software-development">About software development</TextLink></div>
            </div>
          </motion.div>
          <motion.div id="mobile" {...fadeUp(0.1)} className="scroll-mt-48 bg-[#0F1C2E] border border-white/15 rounded-sm overflow-hidden">
            <img src={img('images/mobile.jpg')} alt="Laptop showing code beside a smartphone" className="w-full aspect-[16/9] object-cover" />
            <div className="p-8">
              <h3 className="font-display font-bold text-2xl">Mobile apps and IoT</h3>
              <p className="mt-3 text-[17px]">
                Android apps for field teams and embedded software for connected devices. Your staff capture data where
                the work happens, and it reaches your systems without re-typing.
              </p>
              <div className="mt-4"><TextLink dark to="/mobile-app-development">About mobile apps</TextLink></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <Section overlap id="projects">
      <Heading eyebrow="Project portfolio" title="Recent work">
        <p>A selection of recent IDE Systems projects in research, telecommunications and IoT.</p>
        <TextLink to="/recent-projects">See all recent projects</TextLink>
      </Heading>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid md:grid-cols-3 gap-6">
        {PROJECTS.map(p => (
          <motion.article key={p.title} variants={item} className="border border-[#1A2332]/25 p-8 bg-white">
            <p className="inline-block bg-[#0F1C2E] text-[#F0F4F8] text-sm font-semibold px-3 py-1 rounded-sm">{p.tag}</p>
            <h3 className="mt-5 font-display font-bold text-2xl text-[#0F1C2E]">{p.title}</h3>
            <p className="mt-1 text-[15px] font-semibold text-[#A8510F]">{p.client}</p>
            <p className="mt-4 text-[17px]">{p.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

function About() {
  return (
    <Section tone="mist" id="about">
      <Heading eyebrow="About IDE Systems" title="The team behind PAXISS">
        <p>
          The team behind IDE Systems has more than 40 years of experience developing and implementing financial and
          related systems, including solutions for major South African commercial banks. That experience shapes how we
          build: for the reliability, control, security, compliance and accountability that mission-critical financial
          systems demand.
        </p>
        <TextLink to="/about-us">More about IDE Systems</TextLink>
      </Heading>
    </Section>
  )
}

export default function Home() {
  usePageMeta(
    'PAXISS Core Banking for Co-operatives | IDE Systems',
    'Core banking software for South African co-operative banks and CFIs, with FICA and CODI compliance built in. Book a walkthrough.',
  )
  return (
    <>
      <Hero />
      <WhyPaxiss />
      <Features />
      <WhoFor />
      <Moving />
      <Beyond />
      <Projects />
      <About />
      <CtaBand
        title="See PAXISS running your compliance and reporting"
        text="Book a [CONFIRM: 60-minute] walkthrough. We'll show you the reporting and FICA workflows using scenarios from an institution like yours, and answer the questions your board will ask."
        primary={<NavyButton to="/contact-us">Book a walkthrough</NavyButton>}
        secondary={<OutlineNavyButton href={OVERVIEW_PDF} icon={Download}>Download the PAXISS feature catalogue</OutlineNavyButton>}
      />
      <Contact heading="Talk to the PAXISS team" intro="Tell us about your institution and your current system. We reply within one business day." />
    </>
  )
}
