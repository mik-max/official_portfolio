export type ProjectStatus = 'live' | 'in-development';

export type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: "Mainstack Referral Program",
    description: "Dynamic referral system with real-time tracking, multi-currency payouts and seamless sharing flows.",
    url: "https://mainstack.com/referral-program",
    image: "/images/project-thumbnails/referral.png",
    tags: ["Tailwind", "TypeScript", "Next.js"],
    status: 'live'
  },
  {
    title: "Mainstack Ambassador Program",
    description: "High-conversion ambassador platform with lifetime revenue share and intuitive merchant dashboards.",
    url: "https://mainstack.com/ambassador-program",
    image: "/images/project-thumbnails/ambassador.png",
    tags: ["Next.js", "TypeScript", "GSAP"],
    status: 'live'
  },
  {
    title: "Mecitac Nigeria Ltd",
    description: "Corporate site for a software, cloud, AI and energy-systems consulting firm — built with a service-driven layout and clear conversion paths.",
    url: "https://www.mecitacng.com/",
    image: "/images/project-thumbnails/mecitac.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: 'live'
  },
  {
    title: "Mainstack Link-In-Bio",
    description: "Customizable, high-performance link-in-bio platform for modern creators and entrepreneurs.",
    url: "https://mainstack.com/products/link-in-bio",
    image: "/images/project-thumbnails/link-in-bio.png",
    tags: ["GSAP", "Next.js", "Design Systems"],
    status: 'live'
  },
  {
    title: "Mainstack Invoicing",
    description: "Streamlined professional invoicing and payment tracking for global freelancers and businesses.",
    url: "https://mainstack.com/products/invoicing",
    image: "/images/project-thumbnails/invoice.png",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    status: 'live'
  },
  {
    title: "Collabify",
    description: "Creator-brand collaboration platform with smooth micro-interactions and early-access onboarding.",
    url: "https://usecollabify.com/",
    image: "/images/project-thumbnails/collabify.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    status: 'in-development'
  }
];
