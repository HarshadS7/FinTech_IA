import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useSpring, animate } from 'framer-motion'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts'
import * as D from './data'
import Footer from './components/Footer'
import PillNav from './components/PillNav'
import * as L from 'lucide-react'
import Lenis from 'lenis'

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const C = (L as any)[name] || L.Circle
  return <C size={size} strokeWidth={1.5} color="#111" aria-hidden="true" />
}

const fade = { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as any } }

function Section({ id, title, sub, children }: { id: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <motion.section id={id} className="wrap sec"
      initial={{ opacity: 0, y: 120, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
      <motion.div {...fade}>
        <h2>{title}<span className="rule" /></h2>
        {sub && <p className="sub">{sub}</p>}
      </motion.div>
      {children}
    </motion.section>
  )
}

function Counter({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: x => setV(x) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

function Ring({ value, label, note, color }) {
  const data = [{ v: value }, { v: 100 - value }]
  return (
    <motion.div {...fade} className="card ring">
      <div className="ringbox">
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie data={data} dataKey="v" innerRadius={50} outerRadius={68} startAngle={90} endAngle={-270} stroke="none" isAnimationActive>
              <Cell fill={color} /><Cell fill="var(--track)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="ringval" style={{ color }}><Counter to={value} decimals={value % 1 ? 2 : 0} suffix="%" /></div>
      </div>
      <h4>{label}</h4><p>{note}</p>
    </motion.div>
  )
}

function Nav() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    D.NAV.forEach(([id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return (
    <header className="nav">
      <div className="nav-in">
        <PillNav
          logo={<L.IndianRupee size={18} strokeWidth={2.25} color="#fff" aria-label="Rupee" />}
          items={D.NAV.map(([id, label]) => ({ label, href: '#' + id }))}
          activeHref={'#' + active}
          ease="power2.easeOut"
          baseColor="var(--acc)"
          pillColor="transparent"
          hoveredPillTextColor="#fff"
          pillTextColor="var(--mute)"
          initialLoadAnimation={false}
          mobileOpen={open}
          onItemClick={() => setOpen(false)}
        />
        <button className="ib burger" aria-label="Menu" onClick={() => setOpen(!open)}><Icon name="Menu" size={18} /></button>
      </div>
    </header>
  )
}

function Hero({ goEvent }) {
  return (
    <section id="home" className="hero">
      <div className="orb o1" /><div className="orb o2" />
      <div className="wrap">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span className="dot" /> FinTech MDM · Internal Assessment</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          India's demonetisation story, <em>explained interactively.</em>
        </motion.h1>
        <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Explore 1946, 1978, 2016 and the 2023 ₹2,000 withdrawal. See what changed, who was affected, and how payment systems evolved from cash to digital.
        </motion.p>
        <div className="btns"><a className="btn primary" href="#timeline">Explore the timeline →</a><a className="btn" href="#stakeholders">Who was affected?</a></div>

        <div className="vt">
          <div className="vt-line" />
          {D.EVENTS.map((e, i) => (
            <motion.a key={e.year} href="#timeline" onClick={() => goEvent(i)} className={'vt-node' + (e.amber ? ' amber' : '')}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }} whileHover={{ y: -6 }}>
              <span className="pin" />
              <b>{e.year}</b><small>{e.kind}</small><span>{e.blurb}</span>
            </motion.a>
          ))}
        </div>

        <div className="stats">
          <div className="stat"><b><Counter to={86} suffix="%" /></b><span>of currency value was in ₹500 + ₹1,000 notes before 8 Nov 2016</span><small>Economic Survey 2016–17</small></div>
          <div className="stat"><b><Counter to={98.12} decimals={2} suffix="%" /></b><span>of ₹2,000 notes (by value) returned by 31 Dec 2024</span><small>RBI</small></div>
          <div className="stat"><b>4</b><span>episodes: three demonetisations and one withdrawal</span><small>1946 · 1978 · 2016 · 2023</small></div>
          <div className="stat"><b>2016</b><span>year UPI went live (Aug), alongside the cash shock</span><small>NPCI</small></div>
        </div>

        <div className="callout"><b>Remember this one thing</b><p>2016 was <strong>demonetisation</strong>. 2023 was a <strong>withdrawal from circulation</strong>, not demonetisation, because the ₹2,000 note stayed legal tender.</p></div>
      </div>
    </section>
  )
}

function Questions() {
  const q = [['HelpCircle', 'What changed?', 'Which notes lost legal-tender status, when, and what replaced them.'], ['Users', 'Who was affected?', 'Individuals, merchants, rural workers, banks, cash-heavy holders and government.'], ['Timer', 'Before and after?', 'Cash, banking operations and digital payments around each episode.']]
  return (
    <section className="wrap tight"><div className="grid3">
      {q.map(([i, t, d]) => <motion.div key={t} {...fade} className="card"><div className="ico"><Icon name={i} /></div><h4>{t}</h4><p>{d}</p></motion.div>)}
    </div></section>
  )
}

function Horizontal({ items, amber }: { items: any; amber?: boolean }) {
  return (
    <div className={'hz' + (amber ? ' amber' : '')}>
      {items.map(([d, t, x], i) => (
        <motion.div key={d} {...fade} transition={{ delay: i * 0.07 }} className="hz-item">
          <span className="hz-d">{d}</span><b>{t}</b><p>{x}</p>
        </motion.div>
      ))}
    </div>
  )
}

function Timeline({ idx, setIdx }) {
  const e = D.EVENTS[idx]
  return (
    <Section id="timeline" title="Timeline" sub="Click an event to walk through Before → What happened → Immediate impact → After.">
      <div className="tl-btns">
        {D.EVENTS.map((x, i) => (
          <button key={x.year} onClick={() => setIdx(i)} className={(i === idx ? 'on ' : '') + (x.amber ? 'amber' : '')}>{x.year}<small>{x.kind}</small></button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={e.year} className={'panel' + (e.amber ? ' amber' : '')} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <div className="panel-h"><span className="tag">{e.kind}</span><h3>{e.year} · {e.date}</h3><p className="small">Notes: {e.notes}</p></div>
          <div className="steps4">
            {e.steps.map(([h, t], i) => <div key={h} className="step"><span className="n">{i + 1}</span><b>{h}</b><p>{t}</p></div>)}
          </div>
          {e.big && <p className="small hint">See the week-by-week below and the 86% chart in Analysis.</p>}
        </motion.div>
      </AnimatePresence>
      <h3>The 2016 week-by-week</h3><Horizontal items={D.T2016} />
      <h3>The 2023 withdrawal</h3><Horizontal items={D.T2023} amber />
    </Section>
  )
}

function Notes() {
  return (
    <Section id="notes" title="The notes involved" sub="Which denominations were touched by each episode.">
      <div className="notes">
        {D.NOTES.map((n, i) => (
          <motion.div key={n.v} {...fade} transition={{ delay: i * 0.06 }} whileHover={{ rotate: -2, y: -6 }} className="note" style={{ ["--nc" as any]: n.c }}>
            <div className="note-top"><span>RESERVE BANK OF INDIA</span><span>₹</span></div>
            <div className="note-v">{n.v}</div>
            <div className="note-ev">{n.ev.map(y => <i key={y}>{y}</i>)}</div>
            <p>{n.t}</p>
          </motion.div>
        ))}
      </div>
      <div className="compare">
        <div className="card"><span className="tag">2016 · Demonetisation</span><h4>₹500 and ₹1,000 lost legal-tender status</h4><p>Old notes could only be deposited or exchanged under the announced rules, and were replaced by new ₹500 and ₹2,000 notes.</p></div>
        <div className="card amber"><span className="tag">2023 · Withdrawal</span><h4>₹2,000 withdrawn, still legal tender</h4><p>The note could still be used for payments while the public was asked to deposit or exchange it. No legal-tender status was removed.</p></div>
      </div>
      <p className="small">Note: this graphic is illustrative and uses colours for identification only; it does not reproduce the actual note designs.</p>
    </Section>
  )
}

function Stakeholders() {
  const [s, setS] = useState(0)
  const sh = D.STAKEHOLDERS[s]
  const periods = [['Before', 'Before 2016'], ['2016', 'During 2016'], ['After', 'After 2016']]
  return (
    <Section id="stakeholders" title="Stakeholder impact" sub="Effects were not identical for everyone. Pick a group to compare before, during and after 2016.">
      <div className="chips">
        {D.STAKEHOLDERS.map((x, i) => <button key={x.id} className={i === s ? 'on' : ''} onClick={() => setS(i)}><span><Icon name={x.icon} size={16} /></span>{x.name}</button>)}
      </div>
      <h3 className="sh-name"><Icon name={sh.icon} size={22} /> {sh.name}</h3>
      <AnimatePresence mode="wait">
        <motion.div key={s} className="sh-cols" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          {periods.map(([k, label], i) => {
            const val = sh[k]
            const items = Array.isArray(val) ? val : [val]
            return (
              <motion.div key={k} className="panel sh-col" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.08 }} whileHover={{ y: -6 }}>
                <span className="tag">{label}</span>
                <ul className="bul">{items.map(t => <li key={t}>{t}</li>)}</ul>
                {sh.warn && k === '2016' && <div className="callout sh-warn"><b>Careful</b><p>{sh.warn}</p></div>}
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
      <h3>Stakeholder matrix</h3>
      <p className="small">This shows the <em>kind</em> of exposure for each group. It is not a ranking of winners and losers.</p>
      <div className="scroll"><table>
        <thead><tr>{D.MATRIX_HEAD.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{D.MATRIX.map(r => <tr key={r[0]}>{r.map((c, i) => i ? <td key={i}>{c}</td> : <th key={i}>{c}</th>)}</tr>)}</tbody>
      </table></div>
    </Section>
  )
}

function Fintech() {
  const [f, setF] = useState(1)
  const upi = [['≈ 2 crore', 'UPI transactions in FY 2016–17'], ['24,162 crore', 'UPI transactions in FY 2025–26'], ['21.63 billion', 'UPI transactions in Dec 2025 alone']]
  return (
    <Section id="fintech" title="From cash shock to digital payments" sub="Click a step in the flow.">
      <div className="flow">
        {D.FLOW.map(([n, ic], i) => (
          <button key={n} className={'fl' + (i === f ? ' on' : '')} onClick={() => setF(i)}>
            <span className="fi"><Icon name={ic} size={28} /></span><b>{n}</b><span className="fn">{i + 1}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={f} className="panel center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <h3>{D.FLOW[f][1]} {D.FLOW[f][0]}</h3><p>{D.FLOW[f][2]}</p>
        </motion.div>
      </AnimatePresence>
      <div className="callout"><b>Don't oversimplify the story</b><p>UPI was piloted in April 2016 and went live in August 2016. This project treats demonetisation as one event within a broader digital-payment transition, not the sole cause of later digital-payment growth.</p></div>

      <h3>UPI today: long-run context</h3>
      <p className="small">NPCI / PIB figures, shown for context and not to attribute growth to demonetisation.</p>
      <div className="grid3">{upi.map(([a, b]) => <motion.div key={a} {...fade} className="card big"><b>{a}</b><p>{b}</p></motion.div>)}</div>

      <h3>Why it matters for FinTech</h3>
      <div className="grid4">{D.WHY.map(([t, d], i) => <motion.div key={t} {...fade} transition={{ delay: i * 0.04 }} className="card"><h4>{t}</h4><p>{d}</p></motion.div>)}</div>
    </Section>
  )
}

function Analysis() {
  return (
    <Section id="analysis" title="Impact analysis" sub="Six lenses for looking at what changed.">
      <div className="grid3">{D.LENSES.map(([i, t, d], k) => <motion.div key={t} {...fade} transition={{ delay: k * 0.05 }} className="card lens"><div className="ico"><Icon name={i} /></div><h4>{t}</h4><p>{d}</p></motion.div>)}</div>

      <h3>What the documented figures show</h3>
      <div className="grid3">
        <Ring value={86} color="#3a9d6b" label="₹500 + ₹1,000 share of currency value" note="Before 8 Nov 2016. Source: Economic Survey 2016–17." />
        <Ring value={99.3} color="#60a5fa" label="Old notes returned to banks" note="₹15.31 lakh crore of ₹15.41 lakh crore, per RBI Annual Report 2017–18." />
        <Ring value={98.12} color="#fbbf24" label="₹2,000 notes returned (by value)" note="Of value outstanding on 19 May 2023, returned by 31 Dec 2024. Source: RBI." />
      </div>
      <p className="small">Reading the 99.3% figure: it reports how many old notes came back. It does not by itself say whether the policy met its objectives.</p>

      <h3>Banking impact by stakeholder</h3>
      <p className="small"><b>Qualitative indicator, demonstration only.</b> Bars translate the matrix wording (Medium, High, Very high). They are not real percentages.</p>
      <motion.div {...fade} className="panel">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={D.QBARS.map(([n, v]) => ({ n, v }))} layout="vertical" margin={{ left: 20, right: 40 }}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" dataKey="n" width={150} tick={{ fill: 'var(--mute)', fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: 'transparent' }} formatter={() => 'Qualitative only'} contentStyle={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8 }} />
            <Bar dataKey="v" radius={6} fill="var(--acc)" barSize={18}>
              <LabelList dataKey="v" content={() => null} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <h3>Government: objectives, operations, open questions</h3>
      <div className="grid3">{(D.GOV as [string, string[]][]).map(([t, l]) => <motion.div key={t} {...fade} className="card"><h4>{t}</h4><ul className="bul sm">{l.map(x => <li key={x}>{x}</li>)}</ul></motion.div>)}</div>
    </Section>
  )
}

function Sources() {
  return (
    <Section id="sources" title="Sources & methodology">
      <div className="grid3">{D.SOURCES.map(([t, d, u]) => <motion.a key={t} {...fade} href={u} target="_blank" rel="noreferrer" className="card link"><h4>{t} ↗</h4><p>{d}</p></motion.a>)}</div>
    </Section>
  )
}

export default function App() {
  const [idx, setIdx] = useState(2)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4), anchors: { offset: -90 } })
    let id = 0
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])
  const { scrollYProgress } = useScroll()
  const sx = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return (
    <>
      <motion.div className="progress" style={{ scaleX: sx }} />
      <Nav />
      <Footer>
        <main>
          <Hero goEvent={setIdx} />
          <Questions />
          <Timeline idx={idx} setIdx={setIdx} />
          <Notes />
          <Stakeholders />
          <Fintech />
          <Analysis />
          <Sources />
        </main>
      </Footer>
    </>
  )
}
