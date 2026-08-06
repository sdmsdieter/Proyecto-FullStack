import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section id='hero' className='hero-page'>
      <motion.div className='hero-content' 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
        <p className='hero-tag'>Open to opportunities • Bolivia</p>

          <h1>
            Stefan Morejon
          </h1>

          <h2>Mechatronics Engineer & Full-Stack Developer | CAD/CAM Designer | IoT Developer</h2>

          <p className='hero-description'>
            I build modern web applications using React and FastAPI, while also
            developing automation and mechanical design solutions with
            SolidWorks. I enjoy creating clean, scalable, and practical software
            that solves real-world problems.
          </p>

          <div className='hero-buttons'>
            <button className='btn-primary'>View Projects</button>
            <button className='btn-secondary'>Download Resume</button>
          </div>
        </motion.div>
        <motion.div
           className='hero-card'
           initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
          <div className='card-glow'></div>

          <div className='profile-circle'>SM</div>

          <h3>Main Stack</h3>

          <div className='stack-grid'>
            <span>React</span>
            <span>TypeScript</span>
            <span>FastAPI</span>
            <span>Python</span>
            <span>SolidWorks</span>
            <span>Git</span>
          </div>
        </motion.div>
    </section>
  );
}