import { LucideIcon } from 'lucide-react';

export type Features = {
  label: string;
  icon: LucideIcon;
  iconClass: string;
};

export interface ProgramDonationProps {
  id: number;
  title: string;
  description: string;
  image_url: string;
  target_amount: number;
  collected_amount: number;
  status: 'active' | 'closed' | 'archived';
  starts_at: string;
  ends_at: string;
  location: string;
  slug: string;
}
