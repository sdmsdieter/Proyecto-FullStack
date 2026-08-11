import type { Project } from '../types/project';

const API_BASE = 'http://localhost:8000/api';

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE}/projects`);

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  return response.json();
}

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${API_BASE}/projects/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }

  return response.json();
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}