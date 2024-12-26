export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  alt: string;
  link: string;
  tag: "active" | "default";
}

export interface Podcast {
  name: string;
  episode: string;
  imageUrl: string;
  alt: string;
  link: string;
}
