import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main style={{ padding: '120px 48px', color: 'white' }}>
        <h1>Project not found</h1>
        <Link to='/'>Back to home</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '120px 48px', color: 'white', minHeight: '100vh' }}>
      <Link to='/' className='btn-secondary'>
        ← Back
      </Link>

      <h1 style={{ marginTop: '32px' }}>{project.title}</h1>

      <p style={{ color: '#9ca3af', margin: '16px 0 32px' }}>
        {project.description}
      </p>

      <div className='project-stack'>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div
        style={{
          marginTop: '48px',
          height: '400px',
          borderRadius: '24px',
          background:
            'radial-gradient(circle at top left, rgba(59,130,246,.35), transparent 40%), linear-gradient(135deg, #111827, #0f172a)',
          border: '1px solid rgba(255,255,255,.06)',
        }}
      ></div>
    </main>
  );
}