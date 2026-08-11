import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../services/api';
import type { Project } from '../types/project';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getProject(id)
      .then((data: Project) => setProject(data))
      .catch((error: Error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main style={{ padding: '120px 48px', color: 'white' }}>
        Loading project...
      </main>
    );
  }

  if (!project) {
    return (
      <main style={{ padding: '120px 48px', color: 'white' }}>
        Project not found
      </main>
    );
  }

  return (
    <main style={{ padding: '120px 48px', color: 'white', minHeight: '100vh' }}>
      <Link to='/' className='btn-secondary'>
        ← Back
      </Link>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '32px',
          alignItems: 'center',
          marginTop: '32px',
          marginBottom: '64px',
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: '100%',
            borderRadius: '24px',
            objectFit: 'cover',
          }}
        />

        <div>
          <p className='section-label'>Project</p>
          <h1>{project.title}</h1>
          <p style={{ color: '#9ca3af', marginTop: '16px' }}>
            {project.description}
          </p>

          <div className='project-stack' style={{ marginTop: '24px' }}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <section style={{ marginBottom: '64px' }}>
        <h2>Gallery</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '24px',
          }}
        >
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} ${index + 1}`}
              style={{
                width: '100%',
                borderRadius: '18px',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Documents</h2>

        <div style={{ display: 'grid', gap: '16px', marginTop: '24px' }}>
          {project.documents.map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              target='_blank'
              rel='noreferrer'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 22px',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '18px',
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <span>{doc.name}</span>
              <span>Open ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}