
export interface Project {
  id: string;
  title: string;
  category: 'Showreel' | 'Meme' | 'Corporate' | 'Motion';
  imageUrl: string;
  videoUrl?: string;
  size: 'large' | 'small' | 'wide' | 'tall' | 'landscape';
}

export interface Skill {
  name: string;
  icon: string;
}
