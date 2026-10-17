import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import {
  img, PAXISS_URL, OVERVIEW_PDF, useMotionProps, rich, usePageMeta,
  PageHero, PrimaryButton, GhostButton, OutlineNavyButton, CtaBand, Contact, walkthroughBtn, talkBtn,
} from '../shared'
import { Section, Heading, Cards, SmallPrint, TextLink } from '../blocks'

const SMALL_PRINT = 'PAXISS supports your compliance processes. Responsibility for compliance stays with your institution.'

// Bold-lead bullet: "**Lead:** body" becomes a card title and body
const L = (title, body) => ({ title, body })

/* ---------------- Banking Software ---------------- */
const COMPLIANCE = [
  L('CODI reporting without spreadsheets', 'Capture, validate, report and submit CODI data from your live records, so the figures match your ledger.'),
  L('FICA on every profile', 'Built-in FICA management for clients and related parties, with documents stored electronically on each profile.'),
  L('Regulatory data management', 'The information your regulatory, governance and compliance obligations require is captured and kept current.'),
  L('Documents and records', 'Contracts, wills, trust deeds, ID documents and share certificates are stored against the client, with secure retention of historical records.'),
]
const OPERATIONS = [
  L('One member record', 'Client profiles with personal, contact, identification and regulatory data, plus linked accounts and related parties.'),
  L('Account management', 'Open and manage accounts for every product you offer. Product rules and client eligibility control what each account can do.'),
  L('Transaction processing', 'Deposits, withdrawals, transfers, payments and external transfers. Suspended, deferred and automated transactions are also supported.'),
  L('Standing instructions', 'Recurring transactions run on schedule, indefinitely or until an end date or condition you set.'),
  L('Cash management', 'Multiple teller positions, cash tracked by denomination, teller and treasury transfers, and end-of-day balancing.'),
]
const PRODUCTS = [
  L('Product definition', 'Create savings, loan, investment and transactional products without a vendor release.'),
  L('Interest management', 'Set calculation methods, rates and parameters per product.'),
  L('Fee management', 'Define fee structures and the rules for applying them. PAXISS calculates and applies fees automatically.'),
]
const FINANCE = [
  L('Integrated general ledger', 'Every transaction creates its accounting entries automatically, so financial reporting is real-time and month-end starts from balanced books.'),
  L('Sundry transactions', 'Authorised officials can post controlled entries between general ledger accounts.'),
]
const SHARES = [
  L('Shareholding management', 'Issue, maintain, transfer and redeem member shares, and print share certificates.'),
  L('Relationship management', 'Link representatives, signatories, trustees, beneficiaries and guardians to clients and accounts. Compliance rules apply to them automatically.'),
  L('Pledge management', 'Register and track pledged (ceded) accounts, third-party cessions and the account restrictions that come with them.'),
]
const SECURITY = [
  L('Role-based access', 'Control who can use each function, view data and process transactions.'),
  L('Mandate management', 'Delegate specific rights temporarily, under controlled and audited conditions.'),
  L('Audit and forensic tracking', 'Every activity, transaction, approval, amendment and log-in is recorded, with who, when and from which workstation.'),
  L('Operational monitoring', 'See user activity, system usage and transaction history to support governance and risk management.'),
  L('English and Afrikaans', 'Switch every screen, menu, message and report between the two languages.'),
]

export function BankingSoftware() {
  const { fadeUp } = useMotionProps()
  usePageMeta(
    'PAXISS Core Banking Software | IDE Systems',
    'Member accounts, shares, general ledger and FICA and CODI compliance in one system built for co-operatives. See how it works.',
  )
  return (
    <>
      <PageHero title="PAXISS core banking software keeps your institution audit-ready">
        <p>
          Manual returns, scattered FICA files and a ledger kept apart from your transactions create audit findings and
          late nights. PAXISS brings compliance, member accounts and your general ledger into one system built for South
          African co-operative banks and CFIs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <PrimaryButton to="/contact-us">Book a walkthrough</PrimaryButton>
          <GhostButton href={OVERVIEW_PDF} icon={Download}>Download the PAXISS feature catalogue</GhostButton>
        </div>
      </PageHero>

      <Section overlap>
        <Heading eyebrow="Compliance" title="Compliance built in, not added on">
          <p>
            Compliance is usually where a core system lets you down: the data is in the system, but the return is built
            outside it. In PAXISS, compliance is part of the workflow.
          </p>
        </Heading>
        <Cards items={COMPLIANCE} cols="md:grid-cols-2" />
        <SmallPrint>{SMALL_PRINT}</SmallPrint>
      </Section>

      <Section tone="mist">
        <Heading eyebrow="Core banking operations" title="Run day-to-day banking from one system" />
        <Cards items={OPERATIONS} tone="white" />
      </Section>

      <Section>
        <Heading eyebrow="Products and pricing" title="Design products around your members" />
        <Cards items={PRODUCTS} />
      </Section>

      <Section tone="mist">
        <Heading eyebrow="Financial management" title="Books that balance as you go" />
        <Cards items={FINANCE} tone="white" cols="md:grid-cols-2" />
      </Section>

      <Section>
        <Heading eyebrow="Shares and relationships" title="Built for member-owned institutions" />
        <Cards items={SHARES} />
      </Section>

      <Section tone="mist">
        <Heading eyebrow="Security and audit" title="Control and oversight your board can rely on" />
        <Cards items={SECURITY} tone="white" />
      </Section>

      <Section>
        <Heading eyebrow="Growth and customisation" title="Fits your institution as it grows">
          <p>
            PAXISS scales with your membership and can be configured to your products and processes. If you need
            something it doesn't do yet, the team that builds PAXISS can design it for you, because IDE Systems also
            builds tailored banking and administration systems.
          </p>
        </Heading>
        <motion.div {...fadeUp()} className="mt-6">
          <TextLink href={PAXISS_URL}>Full product detail</TextLink>
        </motion.div>
      </Section>

      <CtaBand
        title="Ask the questions your board will ask"
        text="Book a walkthrough and we'll take you through compliance reporting, FICA records and migration, step by step."
        primary={walkthroughBtn}
      />
    </>
  )
}

/* ---------------- Software Development ---------------- */
const SERVICES = [
  L('Process automation and custom systems', 'Workflow automation, data management and integration between your existing systems.'),
  L('Web applications', 'Browser-based tools your staff and clients can use from anywhere.'),
  L('Mobile apps', 'Android [CONFIRM: and iOS] apps that connect to your back-office systems.'),
  L('Enterprise and back-office systems', "Secure, supported systems for institutions that can't afford downtime."),
  L('Interface design', 'Screens designed around how your people work, so the software gets used.'),
  L('Software consulting', 'Independent advice on architecture and modernising legacy systems.'),
]

export function SoftwareDevelopment() {
  usePageMeta(
    'Custom Software Development Pretoria | IDE Systems',
    'Custom systems, web apps and process automation from a Pretoria team with 40+ years of experience. Tell us what you need built.',
  )
  return (
    <>
      <PageHero eyebrow="Software development" title="Custom software development in Pretoria">
        <p>
          When a spreadsheet or an old system can no longer keep up with a process, we build software that can. IDE
          Systems develops custom systems for institutions and businesses, and supports them after go-live.
        </p>
      </PageHero>
      <Section overlap>
        <Heading eyebrow="Services" title="What we build" />
        <Cards items={SERVICES} />
        <p className="mt-10 text-[19px]">
          Looking for banking software? <TextLink to="/banking-software" className="ml-1">PAXISS core banking software</TextLink>
        </p>
      </Section>
      <CtaBand
        title="Tell us what you need built"
        text="Describe the process or system, and we'll reply within one business day with an honest view of whether we can help."
        primary={talkBtn}
      />
    </>
  )
}

/* ---------------- Mobile Apps ---------------- */
const MOBILE_STEPS = [
  L('Scope', 'We agree with you what the app must do for your users and your business.'),
  L('Design', 'Clear screens that work in the field and on the move.'),
  L('Integration', 'The app connects to your existing systems and data, so nothing is re-typed.'),
  L('Launch and support', 'We publish the app and support it afterwards.'),
]

export function MobileApps() {
  const { fadeUp } = useMotionProps()
  usePageMeta(
    'Mobile App Development Pretoria | IDE Systems',
    'Mobile apps that send field data straight to your back-office systems, built and supported by one Pretoria team. Talk to us.',
  )
  return (
    <>
      <PageHero eyebrow="Mobile app development" title="Mobile apps that connect your field teams to your systems">
        <p>
          {rich('When staff capture data on paper and re-type it later, you get delays and errors. We build Android [CONFIRM: and iOS] apps that send data straight to your back-office systems.')}
        </p>
      </PageHero>
      <Section overlap>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Heading eyebrow="Process" title="One team from idea to launch" />
          <motion.img {...fadeUp(0.1)} src={img('images/mobile.jpg')} alt="Laptop showing code beside a smartphone" className="w-full aspect-[16/10] object-cover rounded-sm" />
        </div>
        <Cards items={MOBILE_STEPS} cols="md:grid-cols-2 lg:grid-cols-4" />
        <div className="mt-10">
          <TextLink to="/recent-projects">See the site survey app we built for a cellular provider</TextLink>
        </div>
      </Section>
      <CtaBand title="Planning an app?" text="Tell us who will use it and what it needs to do." primary={talkBtn} />
    </>
  )
}

/* ---------------- Recent Projects ---------------- */
const PROJECT_DETAIL = [
  {
    title: 'Digital image colorimetry system',
    client: 'A chemical engineering research lab at a tertiary institution',
    body: 'Records electrochemical processes on video and tracks changes on the electrode surface in real time. The software extracts colour (sRGB) values from each frame to measure the absorbance of the solution being studied. [PROOF: outcome, e.g. what it replaced or enabled]',
    built: 'Python (OpenCV, PIL, Matplotlib) · Windows desktop',
  },
  {
    title: 'Mobile site survey application',
    client: 'A cellular service provider with infrastructure across large areas',
    body: 'Field technicians complete guided surveys of the physical, electrical and transmission assets at each site. Results upload to a central database for asset management and maintenance planning. [PROOF: outcome, e.g. sites surveyed or time saved]',
    built: 'Magic XPA · Windows and Android',
  },
  {
    title: 'Voltage and current control unit for LoRa IoT',
    client: 'A start-up building long-range, low-power IoT networks',
    body: 'Measures and controls voltage and current on remote equipment, sending data and commands over a LoRa network to an online monitoring system. IDE Systems wrote the embedded software for the Atmel processors.',
    built: 'C++ · Atmel',
  },
]

export function RecentProjects() {
  usePageMeta(
    'Recent Software Projects | IDE Systems',
    'Research, telecoms and IoT software built by IDE Systems in Pretoria. See what we delivered and talk to the team.',
  )
  return (
    <>
      <PageHero title="Recent software projects">
        <p>A selection of recent IDE Systems projects in research, telecommunications and IoT.</p>
      </PageHero>
      <Section overlap>
        <div className="space-y-8">
          {PROJECT_DETAIL.map(p => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-[#1A2332]/25 p-8 sm:p-10 grid lg:grid-cols-[1.4fr_0.6fr] gap-8"
            >
              <div>
                <h2 className="font-display font-bold text-2xl sm:text-[28px] text-[#0F1C2E]">{p.title}</h2>
                <p className="mt-2 text-[16px] font-semibold text-[#A8510F]">Client: {p.client}</p>
                <p className="mt-4 text-[18px]">{rich(p.body)}</p>
              </div>
              <div className="lg:border-l lg:border-[#1A2332]/20 lg:pl-8">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#A8510F]">Built with</p>
                <p className="mt-1 text-[17px]">{p.built}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
      <CtaBand title="Have a project like these?" text="Tell us about it. We'll tell you honestly whether we're the right team." primary={talkBtn} />
    </>
  )
}

/* ---------------- About ---------------- */
const EXPERTISE = [
  'Banking and financial services',
  'Government and private enterprise',
  'Secure, mission-critical systems',
  'Workflow automation',
  'Modernising legacy systems',
]

export function AboutUs() {
  const { fadeUp } = useMotionProps()
  usePageMeta(
    'About IDE Systems | Makers of PAXISS Core Banking',
    'Pretoria software company with 40+ years in South African banking and enterprise systems, and the team behind PAXISS. Meet us.',
  )
  return (
    <>
      <PageHero title="About IDE Systems: 40 years of South African banking and enterprise software">
        <p>
          IDE Systems is a Pretoria software company. We design and build systems for banking, government and private
          enterprise, and we developed PAXISS, our core banking system for co-operative banks and CFIs.
        </p>
      </PageHero>

      <Section overlap>
        <div className="grid lg:grid-cols-2 gap-14">
          <Heading eyebrow="Our experience" title="Why institutions work with us">
            <p>
              Our team has more than 40 years of combined experience developing and implementing financial and related
              systems, including solutions for major South African commercial banks. We work from concept to deployment
              and design around your operations, your regulatory requirements and your plans for growth.
            </p>
            <p>
              Your support team works in your time zone and under the same legislation as you. When you call, you speak
              to the people who wrote the code.
            </p>
          </Heading>
          <motion.div {...fadeUp(0.1)}>
            <h3 className="font-display font-bold text-2xl text-[#0F1C2E]">Where our expertise sits</h3>
            <ul className="mt-5 border-t border-[#1A2332]/20">
              {EXPERTISE.map(p => (
                <li key={p} className="flex items-start gap-3 py-4 border-b border-[#1A2332]/20 text-[18px]">
                  <Check size={22} className="mt-1 shrink-0 text-[#A8510F]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid lg:grid-cols-2 gap-14">
          <Heading eyebrow="Team" title="The people behind PAXISS">
            <p>{rich('[PROOF: 2–4 profiles: name, role, years in banking or co-operative banking, regulatory or audit background, photo]')}</p>
          </Heading>
          <Heading eyebrow="Our story" title="Why we built PAXISS">
            <p>{rich('[CONFIRM: 2–3 sentence origin story, e.g. what the team saw co-operative banks struggling with, and why existing systems didn\'t fit]')}</p>
          </Heading>
        </div>
      </Section>

      <CtaBand
        title="Start with a conversation"
        text="Whether you're reviewing your core banking system or need a process automated, talk to us first."
        primary={walkthroughBtn}
        secondary={<OutlineNavyButton to="/contact-us">Talk to our team</OutlineNavyButton>}
      />
    </>
  )
}

/* ---------------- Contact ---------------- */
export function ContactUs() {
  usePageMeta(
    'Contact IDE Systems | Book a PAXISS Walkthrough',
    'Talk to the IDE Systems team in Pretoria about PAXISS core banking or custom software. We reply within one business day.',
  )
  return (
    <>
      <PageHero title="Contact IDE Systems">
        <p>Tell us about your institution or project. We reply within one business day.</p>
      </PageHero>
      <Contact variant="general" id="contact-form" />
    </>
  )
}
