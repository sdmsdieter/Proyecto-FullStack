export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
      <div className='skills-header'>
        <div>
          <p className='section-label'>Skills</p>
          <h2>Technical toolkit</h2>
          <p className='skills-intro'>
            The technologies and tools I use across software development,
            mechanical design, and automation projects.
          </p>
        </div>
      </div>

      <div className='skills-grid'>
        <div className='skill-card'>
          <h3>Frontend Development</h3>

          <div className='skill-tags'>
            <span>React</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Vite</span>
          </div>
        </div>

        <div className='skill-card'>
          <h3>Backend & APIs</h3>

          <div className='skill-tags'>
            <span>FastAPI</span>
            <span>Python</span>
            <span>REST APIs</span>
            <span>Firebase</span>
            <span>PostgreSQL</span>
          </div>
        </div>

        <div className='skill-card'>
          <h3>Engineering & CAD</h3>

          <div className='skill-tags'>
            <span>SolidWorks</span>
            <span>CAD/CAM</span>
            <span>Mechanical Design</span>
            <span>Manufacturing</span>
          </div>
        </div>

        <div className='skill-card'>
          <h3>Automation & IoT</h3>

          <div className='skill-tags'>
            <span>ESP32</span>
            <span>Arduino</span>
            <span>MQTT</span>
            <span>Sensors</span>
            <span>Industrial Automation</span>
          </div>
        </div>
        </div>
    </section>
  );
}