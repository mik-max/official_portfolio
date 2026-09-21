export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  { label: 'PRIMARY EMAIL', value: 'michaelchinye2018@gmail.com', href: 'mailto:michaelchinye2018@gmail.com', external: false },
  { label: 'PROFESSIONAL NETWORK', value: 'linkedin.com/in/chinyemichael', href: 'https://linkedin.com/in/chinyemichael', external: true },
  { label: 'WHATSAPP', value: '+234 708 750 9689', href: 'https://wa.me/2347087509689', external: true },
  { label: 'GITHUB', value: 'github.com/mik-max', href: 'https://github.com/mik-max', external: true },
];
