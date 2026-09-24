import { EventData } from '@/types/event';

export const upcomingEvent: EventData = {
  slug: "coming-soon",

  title: "Coming Soon",

  description:
    "We're working on something exciting! Our next event is on its way. Stay tuned and follow our social media channels to be the first to know when registration opens.",

  state: "soon",

  link: "#",

  images: [
    {
      src: "/images/Coming soon.jpg",   // ← keep using RedDev image as visual, or replace with a "coming soon" image
      alt: "MEGA Team upcoming event coming soon",
      width: 630,
      height: 600,
    },
  ],

  dateTime: "2027-01-01T00:00:00",

  meta: [
    { icon: "calendar", label: "Date", value: "Coming Soon" },
    { icon: "map-pin", label: "Location", value: "Mansoura University" },
  ],

  cta: {
    label: "Follow Us",
    href: "https://www.facebook.com/MegaTeamMU",   // ← put your real social link
    ariaLabel: "Follow MEGA Team on social media for event updates",
  },
} as const;