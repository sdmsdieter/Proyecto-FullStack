export default function Experience() {
  return (
    <section id='experience' className='experience-section'>
      <div className='experience-header'>
        <div>
          <p className='section-label'>Experience</p>
          <h2>Engineering & software experience</h2>
          <p className='experience-intro'>
            My experience combines mechanical design, automation, and
            full-stack software development, with a strong focus on building
            practical engineering solutions.
          </p>
        </div>
      </div>

      <div className='timeline'>
        <div className='timeline-item'>
          <div className='timeline-marker'></div>

          <div className='timeline-content'>
            <div className='timeline-date'>2023 – Present</div>

            <h3>Mechanical Design & Automation Projects</h3>

            <h4>Independent / Academic Projects</h4>

            <p>
              Designed mechanical components and manufacturing-ready assemblies
              in SolidWorks, developed automation-oriented engineering
              projects, and integrated software concepts with hardware-focused
              workflows.
            </p>

            <div className='timeline-tags'>
              <span>SolidWorks</span>
              <span>Automation</span>
              <span>CAD/CAM</span>
            </div>
          </div>
        </div>

        <div className='timeline-item'>
          <div className='timeline-marker'></div>

          <div className='timeline-content'>
            <div className='timeline-date'>2025 – Present</div>

            <h3>Full-Stack Development Projects</h3>

            <h4>Personal Portfolio & Web Applications</h4>

            <p>
              Built responsive web applications using React, TypeScript, and
              FastAPI, created REST APIs and modular frontend components, and
              focused on scalable architecture and practical engineering
              solutions.
            </p>

            <div className='timeline-tags'>
              <span>React</span>
              <span>FastAPI</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}