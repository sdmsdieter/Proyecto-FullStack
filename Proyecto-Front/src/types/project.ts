export interface Project {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  year: string;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  documents: {
    name: string;
    url: string;
  }[];
}