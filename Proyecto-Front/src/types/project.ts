export interface Project {
  id: string;
  title: string;
  year?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}