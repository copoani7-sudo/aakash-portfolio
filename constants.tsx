
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '2026 Cinematic Showreel',
    category: 'Showreel',
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-6170c2295b3f?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=djeosp9cf&public_id=Port-_xptldp&autoplay=true&muted=true',
    size: 'landscape',
  },
  {
    id: '2',
    title: 'PNGtuber Shenanigans',
    category: 'Meme',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: '3',
    title: 'High-Retention Motion',
    category: 'Motion',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: '4',
    title: 'Long-Form Storytelling',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069&auto=format&fit=crop',
    size: 'wide',
  },
  {
    id: '5',
    title: 'Viral Pacing Breakdown',
    category: 'Meme',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    size: 'tall',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
  { name: 'After Effects', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
  { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
  { name: 'CapCut', icon: 'https://static.wikia.nocookie.net/logopedia/images/e/e0/CapCut_Icon.png' },
  { name: 'Gemini AI', icon: 'https://www.gstatic.com/lamda/images/favicon_v1_150160d13b773322.png' },
];
