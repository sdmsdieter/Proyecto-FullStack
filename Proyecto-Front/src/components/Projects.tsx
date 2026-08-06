import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);
  return (
    <motion.section
      id='projects'
      className='projects-section'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className='projects-header'>
        <div>
          <p className='section-label'>Projects</p>
          <h2>Selected projects</h2>
          <p className='projects-intro'>
            A curated selection of software, automation, and engineering
            projects that reflect my approach to building practical,
            scalable, and technically grounded solutions.
          </p>
        </div>

        <button className='btn-secondary'>View all projects</button>
      </div>

      {featured && (
        <div className='featured-project'>
          <div className='project-image'></div>

          <div className='project-content'>
            <div className='project-meta'>
              <span>Featured project</span>
              <span>{featured.year}</span>
            </div>

            <h3>{featured.title}</h3>

            <p>{featured.description}</p>

            <div className='project-stack'>
              {featured.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className='project-links'>
              {/* Para que todas las tarjetas de proyecto tengan un enlace a la página de detalles del proyecto, 
              puedes usar el componente Link de react-router-dom. Aquí tienes un ejemplo de cómo hacerlo: */}
              <Link to={`/project/${featured.id}`} className='btn-primary'>
                View Project
              </Link>
              <button className='btn-secondary'>GitHub</button>
            </div>
          </div>
        </div>
      )}

      <div className='projects-grid'>
        {secondaryProjects.map((project) => (
          <article key={project.id} className='project-card'>
            <div className='project-thumb'></div>

            <h4>{project.title}</h4>

            <p>{project.description}</p>

            <div className='project-stack'>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}