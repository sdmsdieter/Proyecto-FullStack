export default function About() {
  return (
    <section id='about' className='about-section'>
      <div className='about-left'>
        <p className='section-label'>About me</p>

        <h2>Engineering systems that connect hardware and software.</h2>

        <p>
          I'm a Mechatronics Engineer with a strong interest in software
          engineering, industrial automation, and intelligent systems. My
          background allows me to understand both the physical and digital
          sides of a project—from CAD/CAM design and manufacturing processes
          to web applications, APIs, and data-driven automation.
        </p>

        <p>
          I enjoy building practical solutions that connect hardware and
          software, whether through IoT systems, automation workflows, or
          full-stack applications. I'm currently focused on expanding my
          expertise in React, FastAPI, TypeScript, and modern software
          architecture while continuing to develop engineering-focused
          projects.
        </p>
      </div>

      <div className='about-right'>
        <div className='info-card'>
          <span>Location</span>
          <strong>La Paz, Bolivia</strong>
        </div>

        <div className='info-card'>
          <span>Languages</span>
          <strong>English (B2) / Spanish (Native)</strong>
        </div>

        <div className='info-card'>
          <span>Focus</span>
          <strong>Full-Stack • CAD/CAM • IoT • Automation</strong>
        </div>

        <div className='info-card'>
          <span>Availability</span>
          <strong>Open to remote and international opportunities</strong>
        </div>
      </div>
    </section>
  );
}