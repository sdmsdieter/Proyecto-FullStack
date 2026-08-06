export type Project = {
  id: string;
  title: string;
  year?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Industrial Automation Dashboard',
    year: '2026',
    description:
      'A web platform for monitoring industrial equipment, managing maintenance tasks, and visualizing production metrics through a FastAPI backend and a responsive React dashboard.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'cad',
    title: 'CAD/CAM Mechanical Design',
    description:
      'Design and optimization of mechanical components and manufacturing-ready assemblies using SolidWorks.',
    technologies: ['SolidWorks', 'CAD/CAM'],
  },
  {
    id: 'iot',
    title: 'IoT Monitoring System',
    description:
      'Sensor data acquisition and monitoring prototype using ESP32, MQTT, Python, and FastAPI.',
    technologies: ['IoT', 'Python', 'MQTT'],
  },
];