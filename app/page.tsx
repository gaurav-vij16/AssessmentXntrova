'use client';

import { useState } from 'react';

const services = [
  { n: '01', title: 'Search that compounds', desc: 'Technical SEO and content built to earn attention long after the campaign ends.', tag: 'SEO & CONTENT', icon: 'search' },
  { n: '02', title: 'Performance with purpose', desc: 'Paid campaigns that turn the right clicks into customers, with every rupee accounted for.', tag: 'PAID MEDIA', icon: 'chart' },
  { n: '03', title: 'A brand people remember', desc: 'Social-first stories and creative that make your audience stop, feel, and take action.', tag: 'SOCIAL & CREATIVE', icon: 'spark' },
  { n: '04', title: 'Digital built to convert', desc: 'Fast, thoughtful websites and commerce experiences that make the next step feel obvious.', tag: 'WEB & COMMERCE', icon: 'window' },
];

const cases = [
  { type: 'D2C · PERFORMANCE MARKETING', name: 'Making everyday wellness a little more visible.', result: '+214%', metric: 'qualified organic sessions', theme: 'case-sage', symbol: 'spark' },
  { type: 'B2B · SEO & CONTENT', name: 'A clearer path from search to sales conversation.', result: '3.6×', metric: 'more high-intent enquiries', theme: 'case-blue', symbol: 'chart' },
  { type: 'E-COMMERCE · PAID MEDIA', name: 'Turning a growing store into a growth engine.', result: '−28%', metric: 'cost per acquisition', theme: 'case-peach', symbol: 'bag' },
];

const benefits = [
  { icon: 'search', title: 'We start with your real challenge', desc: 'We learn your goals, customers, and constraints before recommending a direction.' },
  { icon: 'chart', title: 'One plan across every channel', desc: 'Search, paid media, content, social, and web work together around the same outcome.' },
  { icon: 'window', title: 'Clear work, clearly shared', desc: 'Know what we are doing, why it matters, and what we will learn from it.' },
  { icon: 'spark', title: 'Made to keep improving', desc: 'We use what the work teaches us to sharpen the next decision and the next result.' },
];

type IconName = 'arrow' | 'up' | 'down' | 'left' | 'right' | 'search' | 'chart' | 'spark' | 'star' | 'window' | 'bag' | 'pin' | 'mail' | 'phone' | 'more';

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  let shape: React.ReactNode = null;
  switch (name) {
    case 'arrow': shape = <><path d="M5 19 19 5"/><path d="M8 5h11v11"/></>; break;
    case 'up': shape = <><path d="M12 20V5"/><path d="m6 11 6-6 6 6"/></>; break;
    case 'down': shape = <><path d="M12 4v15"/><path d="m6 13 6 6 6-6"/></>; break;
    case 'left': shape = <><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></>; break;
    case 'right': shape = <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>; break;
    case 'search': shape = <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.3 4.3"/></>; break;
    case 'chart': shape = <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/></>; break;
    case 'spark': shape = <path d="m12 2 2.35 7.2L22 12l-7.65 2.8L12 22l-2.35-7.2L2 12l7.65-2.8L12 2Z"/>; break;
    case 'star': shape = <path d="m12 3 2.75 5.58 6.16.9-4.46 4.34 1.05 6.13L12 17.06l-5.5 2.89 1.05-6.13L3.1 9.48l6.16-.9L12 3Z"/>; break;
    case 'window': shape = <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="m8 14-2 2 2 2M12 18l2-4"/></>; break;
    case 'bag': shape = <><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>; break;
    case 'pin': shape = <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.3"/></>; break;
    case 'mail': shape = <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>; break;
    case 'phone': shape = <path d="M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3c0 1.1-.9 2-2 2C11 19 5 13 5 5c0-1.1.9-2 2-2Z"/>; break;
    case 'more': shape = <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>; break;
  }
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>{shape}</svg>;
}

const steps = [
  ['01', 'Get curious', 'We listen before we recommend. Your goals, your customers, your numbers.'],
  ['02', 'Find the signal', 'We turn research into a focused plan with clear priorities and measures.'],
  ['03', 'Make it happen', 'Our strategists and makers work as one team, moving quickly and thoughtfully.'],
  ['04', 'Keep getting better', 'We share what is working, learn from what is not, and improve every cycle.'],
];
const testimonials = [
  { quote: 'They didn’t arrive with a one-size-fits-all answer. They took the time to understand our business, then built a plan that actually felt like ours.', name: 'Amit Verma', role: 'Founder · Client partner', initials: 'AV' },
  { quote: 'The team brought fresh ideas and clear direction. They listened to our concerns and built a strategy around what our business really needed.', name: 'Neha Kapoor', role: 'Director · Client partner', initials: 'NK' },
  { quote: 'They combine expertise with a human touch. We feel like partners in the work, and the focus is always on creating long-term value.', name: 'Rahul Sharma', role: 'CEO · Client partner', initials: 'RS' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  function submitLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = ['Name: ' + values.get('name'), 'Email: ' + values.get('email'), 'Company: ' + (values.get('company') || 'Not provided'), 'Interested in: ' + values.get('service'), 'Project details: ' + (values.get('message') || 'Not provided')].join('\n');
    window.location.href = `mailto:info@xntrova.com?subject=${encodeURIComponent('New project enquiry from ' + values.get('name'))}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Xntrova home"><span className="brand-mark">x<span>.</span></span><span className="brand-name">xntrova</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>What we do</a><a href="#why" onClick={closeMenu}>Why Xntrova</a><a href="#work" onClick={closeMenu}>Our work</a><a href="#about" onClick={closeMenu}>About us</a><a href="#approach" onClick={closeMenu}>Our approach</a>
      </nav>
      <a className="header-cta" href="#contact">Let’s talk <Icon name="arrow"/></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow light"><span className="live-dot"/> INDEPENDENT GROWTH AGENCY · NEW DELHI</div>
          <h1>Good growth<br/>starts with <em>good</em><br/><span>thinking.</span></h1>
          <p className="hero-intro">We bring strategy, creativity and technology together to help ambitious brands move forward.</p>
          <div className="hero-actions"><a className="button button-lime" href="#contact">Let’s make progress <Icon name="arrow"/></a><a className="text-link light-link" href="#work">See what we do <Icon name="down"/></a></div>
          <div className="hero-note"><div className="avatar-stack"><b>R</b><b>A</b><b>M</b><b>+</b></div><span>A close-knit team. A clear view of the numbers.</span></div>
        </div>
        <div className="hero-visual" aria-label="Illustration of a performance growth dashboard">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="float-chip chip-top"><span className="chip-icon"><Icon name="arrow"/></span><span><b>More of the right traffic</b><small>Search is gaining momentum</small></span><i>+32%</i></div>
          <div className="dashboard-card">
            <div className="dash-head"><div><span className="dash-label">GROWTH SNAPSHOT</span><h3>Small moves.<br/>Real momentum.</h3></div><span className="dash-menu"><Icon name="more"/></span></div>
            <div className="dash-total"><strong>₹8.42L</strong><span><Icon name="arrow"/> 18.6%</span></div><div className="dash-sub">Revenue influenced · last 90 days</div>
            <div className="chart-area"><div className="chart-y"><span>10k</span><span>7.5k</span><span>5k</span><span>2.5k</span></div><div className="chart"><div className="chart-lines"/><svg viewBox="0 0 390 130" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c9fa69" stopOpacity=".29"/><stop offset="1" stopColor="#c9fa69" stopOpacity="0"/></linearGradient></defs><path d="M0 112 C28 105 32 104 57 95 S90 96 115 80 S153 88 180 67 S223 81 248 55 S280 61 301 42 S345 51 365 24 S381 25 390 9 L390 130 L0 130Z" fill="url(#fill)"/><path d="M0 112 C28 105 32 104 57 95 S90 96 115 80 S153 88 180 67 S223 81 248 55 S280 61 301 42 S345 51 365 24 S381 25 390 9" fill="none" stroke="#c9fa69" strokeWidth="3" strokeLinecap="round"/></svg></div></div>
            <div className="chart-x"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>
            <div className="dash-bottom"><span><i className="legend-dot"/>Revenue influenced</span><span>Updated today <b><Icon name="arrow"/></b></span></div>
          </div>
          <div className="float-chip chip-bottom"><span className="ring-stat">3.4×</span><span><b>Better together</b><small>One team, moving the same way</small></span><Icon name="spark" className="spark"/></div>
          <span className="visual-caption">MAKE THE NEXT MOVE COUNT <Icon name="spark"/></span>
        </div>
        <a className="scroll-cue" href="#services"><span/> SCROLL TO EXPLORE</a>
        <div className="hero-side-label">STRATEGY · CREATIVE · TECHNOLOGY</div>
      </section>

      <section className="trust-strip"><p>Good company to keep</p><div className="trust-logos"><span className="logo-serif">scholar<span>scribe</span></span><span className="logo-etex">etex<span>®</span></span><span className="logo-onsa">onsa</span><span className="logo-range">RANGE LILIES</span><span className="logo-berry">berryan<span>luiz</span></span><span className="logo-satvik">SATVIK</span></div></section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT WE DO</div><h2>Less noise.<br/><em>More momentum.</em></h2></div><div className="heading-aside"><p>Growth does not come from doing everything. It comes from doing the right things, in the right order.</p><a href="#contact" className="text-link">Explore how we can help <Icon name="arrow"/></a></div></div>
        <div className="service-list">{services.map(s => <a href="#contact" className="service-row" key={s.n}><span className="service-n">{s.n}</span><span className="service-title">{s.title}<small>{s.tag}</small></span><span className="service-desc">{s.desc}</span><span className="service-icon"><Icon name={s.icon as IconName}/></span></a>)}</div>
      </section>

      <section className="about-section" id="about"><div className="about-art"><div className="art-circle"><div className="art-center">x<span>.</span></div><div className="art-orbit-label label-a">THINK CLEARLY</div><div className="art-orbit-label label-b">MAKE BOLDLY</div><div className="art-orbit-label label-c">GROW TOGETHER</div><span className="art-star star-a"><Icon name="spark"/></span><span className="art-star star-b"><Icon name="spark"/></span><span className="art-star star-c"><Icon name="spark"/></span></div><div className="art-caption">A little curious.<br/>A lot committed.</div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> A BIT ABOUT US</div><h2>Good work comes<br/>from <em>good people.</em></h2><p>We’re Xntrova: a team of strategists, makers and problem-solvers who care about the work and the people behind it.</p><p>We stay curious, speak plainly and get close to your business. That’s how we find the real opportunity and build a plan that makes a difference.</p><a href="#approach" className="button button-dark">Get to know us <Icon name="arrow"/></a><div className="about-signoff"><span>GROWTH, WITH GOOD PEOPLE.</span><strong>xntrova<span>.</span></strong></div></div></section>

      <section className="benefits-section" id="why"><div className="benefits-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> WHY XNTROVA</div><h2>Good partners make<br/><em>growth feel clearer.</em></h2></div><p>Good marketing is more than a set of services. It is a thoughtful team, aligned around the right problem and honest about what moves it forward.</p></div><div className="benefits-grid">{benefits.map((benefit, index) => <article className="benefit-card" key={benefit.title}><div className="benefit-card-top"><span className="benefit-icon"><Icon name={benefit.icon as IconName}/></span><span className="benefit-number">0{index + 1}</span></div><h3>{benefit.title}</h3><p>{benefit.desc}</p></article>)}</div><div className="benefits-cta"><span><Icon name="spark"/> A PARTNERSHIP BUILT AROUND YOUR BUSINESS</span><a href="#contact">Let’s find your next move <Icon name="arrow"/></a></div></section>

      <section className="work-section" id="work"><div className="section-heading work-heading"><div><div className="eyebrow light"><span className="eyebrow-line"/> A FEW GOOD THINGS</div><h2>Proof is in<br/><em>the progress.</em></h2></div><p>Different challenges. Thoughtful work. Progress you can point to.</p></div><div className="case-grid">{cases.map((c, index) => <article className={`case-card ${c.theme}`} key={c.type}><div className="case-art"><Icon name={c.symbol as IconName} className="case-symbol"/><span className="case-art-index">X / {index+1}</span><div className="case-mark">{c.theme === 'case-sage' ? 'wellbeing' : c.theme === 'case-blue' ? 'NORTHSTAR' : 'everyday.'}</div></div><div className="case-meta">{c.type}<Icon name="arrow"/></div><h3>{c.name}</h3><div className="case-result"><strong>{c.result}</strong><span>{c.metric}</span></div></article>)}</div><p className="case-footnote">Concept examples for presentation. Outcomes vary by business.</p></section>

      <section className="approach-section" id="approach"><div className="approach-intro"><div className="eyebrow"><span className="eyebrow-line"/> HOW WE WORK</div><h2>Thoughtful by<br/>design. <em>Built to move.</em></h2><p>No black boxes. No bloated decks. Just a good team, working on the right things with you.</p><a className="text-link" href="#contact">Start a conversation <Icon name="arrow"/></a></div><div className="steps-list">{steps.map(([n, title, desc]) => <div className="step" key={n}><span className="step-n">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><Icon name="arrow" className="step-arrow"/></div>)}</div></section>

      <section className="quote-section"><div className="quote-top"><Icon name="spark"/><span>GOOD THINGS ARE BETTER, TOGETHER</span></div><blockquote>“{testimonials[quoteIndex].quote}”</blockquote><div className="quote-person"><span className="quote-avatar">{testimonials[quoteIndex].initials}</span><div><b>{testimonials[quoteIndex].name}</b><small>{testimonials[quoteIndex].role}</small></div><span className="quote-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Icon name="star" key={index}/>)}</span></div><div className="quote-controls"><button aria-label="Previous testimonial" onClick={() => setQuoteIndex((quoteIndex + testimonials.length - 1) % testimonials.length)}><Icon name="left"/></button><span>0{quoteIndex + 1} <i/> 0{testimonials.length}</span><button aria-label="Next testimonial" onClick={() => setQuoteIndex((quoteIndex + 1) % testimonials.length)}><Icon name="right"/></button></div></section>

      <section className="contact-section" id="contact"><div className="contact-left"><div className="eyebrow light"><span className="eyebrow-line"/> YOUR NEXT CHAPTER</div><h2>Ready when<br/><em>you are.</em></h2><p>Tell us where you want to go. We’ll help you figure out the next step.</p><div className="contact-detail"><span><Icon name="mail"/></span><div><small>GOOD CONVERSATIONS START HERE</small><a href="mailto:info@xntrova.com">info@xntrova.com <Icon name="arrow"/></a></div></div><div className="contact-detail"><span><Icon name="pin"/></span><div><small>FIND US IN</small><p>Dwarka, New Delhi · Working everywhere</p></div></div></div><form className="lead-form" onSubmit={submitLead}><div className="form-heading"><span>LET’S GET TO KNOW YOU</span><span className="form-step">01 <i/> 02</span></div><h3>A little about your project</h3><div className="form-row"><label>Your name<input required name="name" autoComplete="name" placeholder="e.g. Aditi Sharma"/></label><label>Work email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com"/></label></div><div className="form-row"><label>Company<input name="company" autoComplete="organization" placeholder="Your company"/></label><label>What do you need help with?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>SEO & content</option><option>Paid media</option><option>Social & creative</option><option>Website & commerce</option><option>Not sure yet</option></select></label></div><label>Anything else we should know?<textarea name="message" rows={2} placeholder="A little context goes a long way…"/></label><div className="form-submit"><button className="button button-lime" type="submit">Send the first note <Icon name="arrow"/></button><small>We’ll be in touch within one working day.</small></div>{sent && <p className="success-message" role="status">Thanks for reaching out. Your email app should open with the project details. If it doesn’t, write to info@xntrova.com.</p>}</form></section>
    </main>

    <footer className="footer">
      <div className="footer-cta"><div><div className="eyebrow light"><span className="eyebrow-line"/> HAVE A GOOD ONE IN MIND?</div><h2>Let’s make your<br/><em>next move count.</em></h2></div><a className="footer-cta-link" href="#contact">Tell us what you’re building <span><Icon name="arrow"/></span></a></div>
      <div className="footer-main">
        <div className="footer-brand-block"><a className="brand footer-brand" href="#home" aria-label="Xntrova home"><span className="brand-mark">x<span>.</span></span><span className="brand-name">xntrova</span></a><p>An independent growth partner for ambitious brands. Strategy, creative and technology, working as one.</p><a className="footer-email" href="mailto:info@xntrova.com">info@xntrova.com <Icon name="arrow"/></a></div>
        <div className="footer-column"><h3>Explore</h3><a href="#about">About Xntrova</a><a href="#why">Why Xntrova</a><a href="#services">What we do</a><a href="#work">Selected work</a><a href="#approach">Our approach</a></div>
        <div className="footer-column"><h3>Services</h3><a href="#services">SEO & content</a><a href="#services">Paid media</a><a href="#services">Social & creative</a><a href="#services">Web & commerce</a></div>
        <div className="footer-column footer-contact"><h3>Come say hello</h3><a href="https://maps.google.com/?q=A107+Sector+8+Dwarka+New+Delhi" target="_blank" rel="noreferrer"><Icon name="pin"/><span>A107, 2nd Floor, Sector 8,<br/>Dwarka, New Delhi 110077</span></a><a href="tel:+918683828646"><Icon name="phone"/><span>+91 868-382-8646</span></a><a href="mailto:info@xntrova.com"><Icon name="mail"/><span>info@xntrova.com</span></a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Xntrova Technologies</span><div><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="mailto:info@xntrova.com">Contact</a></div><a className="back-top" href="#home">BACK TO TOP <Icon name="up"/></a></div>
    </footer>
  </>;
}
