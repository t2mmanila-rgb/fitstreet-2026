
export interface Activity {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Zone {
  id: string;
  name: string;
  location: string;
  description: string;
  color: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  description: string;
  color: string;
}

export interface PartnerTier {
  tier: string;
  title: string;
  slots: string;
  price: string;
  color: string;
  perks: string[];
}
