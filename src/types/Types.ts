   
export interface GameItemProps {
    id: number;
    background_image: string;
    name: string;
    rating: number;
    parent_platforms: Array<{ platform: { name: string } }>;
    short_screenshots?: Array<{ image: string }>;
    released?: string;
  }
  