export interface ProgramTimelineItem {
  id: number;
  date: string;
  activity: string;
  activity_en: string;
  activity_ar: string;
  cost: number;
  description: string;
}
export interface ProgramDonasiProps {
  id: number;
  title: string;
  title_en: string;
  title_ar: string;
  description: string;
  description_en: string;
  description_ar: string;
  image_url: string;
  target_amount: number;
  collected_amount: number;
  status: 'active' | 'closed' | 'archived';
  starts_at: string;
  ends_at: string;
  location: string;
  slug: string;
  short_description: string;
  short_description_en: string;
  short_description_ar: string;
  program_timeline: ProgramTimelineItem[];
}

export type Status = 'idle' | 'loading' | 'error' | 'success';
