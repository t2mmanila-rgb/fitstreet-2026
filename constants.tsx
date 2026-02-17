
import { Activity, Zone, TeamMember, PartnerTier } from './types';

export const ACTIVITIES: Activity[] = [
  {
    title: "FREE WORKOUT ARENA",
    description: "Open group workouts every hour featuring rotating trainers, influencers, and top gyms — a nonstop arena of movement for all fitness levels.",
    icon: "🏋️",
    gradient: "from-fs-orange to-amber-500"
  },
  {
    title: "MORNING HYDRO RAVE",
    description: "A post-run cool-down dance jam that blends wellness, rhythm, and that early-morning electric vibe the city needs to wake up together.",
    icon: "💧",
    gradient: "from-fs-cyan to-blue-500"
  },
  {
    title: "NEON STREET PARTY",
    description: "An after-dark glow dance marathon where the streets light up with music, movement, and hundreds dancing in sync under neon lights.",
    icon: "🎉",
    gradient: "from-fs-purple to-violet-500"
  },
  {
    title: "HYROX CHALLENGE",
    description: "A functional endurance arena designed for every athlete — from first-timers to elites — combining strength, speed, and grit.",
    icon: "🏃",
    gradient: "from-fs-pink to-rose-500"
  },
  {
    title: "BATTLE ROPE BURNOUTS",
    description: "Quick-fire strength and cardio bursts that test power and stamina — fast, fiery, and built for viral, high-energy moments.",
    icon: "💪",
    gradient: "from-red-500 to-fs-orange"
  },
  {
    title: "GRAND COLD PLUNGE PARTY",
    description: "A cold-plunge celebration where the city's top studios come together for one unforgettable hydro-recovery experience.",
    icon: "🧊",
    gradient: "from-blue-400 to-fs-cyan"
  },
  {
    title: "BULL-STRENGTH CHALLENGE",
    description: "A strength showdown where challengers test power, form, and mental grit — big cheers guaranteed.",
    icon: "🐂",
    gradient: "from-fs-orange to-fs-pink"
  },
  {
    title: "HER LEGACY: WOMEN'S 3X3",
    description: "A women's 3x3 street basketball tournament for elite female athletes, competitive teams, and the growing women's sports movement.",
    icon: "🏀",
    gradient: "from-fs-pink to-fs-purple"
  },
  {
    title: "FITFAM BOOTCAMP",
    description: "A family-friendly bootcamp combining movement, play, rhythm, and teamwork — perfect for parents + kids sweating it out together.",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-fs-lime to-green-500"
  }
];

export const ZONES: Zone[] = [
  {
    id: "1",
    name: "PLAY ZONE",
    location: "5TH AVE",
    description: "Centered on high-energy activities and athletic lifestyle. Features the Grand Cold Plunge Party, Women's Basketball Tournament, and International Push Bike Race.",
    color: "#FF6B2C",
    features: ["Grand Cold Plunge Party", "Women's Basketball Tournament", "International Push Bike Race", "High-Energy Activities"]
  },
  {
    id: "2",
    name: "HEAL & GLOW ZONES",
    location: "C1 PARK",
    description: "Recovery, wellness, and lifestyle tents featuring 25+ booths. A sanctuary for healing, self-care, and glowing up.",
    color: "#B44AFF",
    features: ["25+ Wellness Booths", "Recovery Stations", "Lifestyle Exhibits", "Glow Zone Activations"]
  },
  {
    id: "3",
    name: "EAT ZONE",
    location: "BRIDGEWAY",
    description: "Focused on nutrition, supplements, healthy restaurants and healthy drinks. 19 curated food and drink tents.",
    color: "#A8FF00",
    features: ["Nutrition Booths", "Healthy Restaurants", "Supplement Stations", "Healthy Drinks"]
  },
  {
    id: "4",
    name: "THE ARENA",
    location: "AMPHITHEATER",
    description: "Main stage experiences with large-format workout classes, certified trainers, headliners, and the Viking Hour.",
    color: "#FF2D78",
    features: ["Main Stage", "Large-Format Workouts", "Viking Hour", "Neon Street Party", "Fireside Chats"]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "KARLA KANGLEON",
    role: "Festival Director",
    initials: "KK",
    color: "#FF6B2C",
    description: "Leading the full strategy, operations, partnerships, and brand vision — from big-picture direction to on-ground execution."
  },
  {
    name: "MICHAEL NIELSEN",
    role: "Creative Director",
    initials: "MN",
    color: "#00E5FF",
    description: "Leading the creative direction, program flow, and multi-zone experience design that powers Fitstreet HEATWAVE."
  },
  {
    name: "LUANA GALVAIRE",
    role: "Biohacking Lead",
    initials: "LG",
    color: "#A8FF00",
    description: "Leading science-backed performance and recovery to help participants optimize energy, sleep, and physical capability."
  },
  {
    name: "NICOLA PUNO",
    role: "Emotional Health Lead",
    initials: "NP",
    color: "#FF2D78",
    description: "Leading mental and emotional wellness through resilience tools, mindset coaching, and mental-health-focused experiences."
  },
  {
    name: "CHRISTINA MANINGO",
    role: "Mind+Body Lead",
    initials: "CM",
    color: "#B44AFF",
    description: "Guiding breathwork, grounding practices, and nervous system regulation — bringing calm, clarity, and balance to the HEATWAVE experience."
  }
];

export const PARTNERS: PartnerTier[] = [
  {
    tier: "TIER 1",
    title: "CO-PRESENTER",
    slots: "1 Slot",
    price: "P1,200,000 Cash + P120,000 In-Kind",
    color: "#FF6B2C",
    perks: ["Full Event Category Lock-Out", "Event Title Billing", "Coverage across ALL 5 Zones", "2 Premium Booths (12x24ft)", "120 mins Main Stage"]
  },
  {
    tier: "TIER 2",
    title: "JOURNEY PRESENTERS",
    slots: "4 Slots",
    price: "P300,000 - P700,000 Cash",
    color: "#FF2D78",
    perks: ["1 Assigned Zone Coverage", "2 Booths (10x10ft)", "60 mins Main Stage", "Zone Highlight Video", "LED Logo Rotation"]
  },
  {
    tier: "TIER 3",
    title: "BOOTH EXHIBITOR",
    slots: "Multiple Slots",
    price: "P70,000 - P150,000 Cash",
    color: "#00E5FF",
    perks: ["1 Booth (10x10ft)", "Main Stage Exposure", "Sampling Rights", "Passport Challenge Add-On"]
  }
];
