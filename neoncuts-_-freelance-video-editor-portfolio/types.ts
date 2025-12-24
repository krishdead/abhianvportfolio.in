
export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
