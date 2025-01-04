export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
  iconAlt: string;
  rel?: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/tylerlwsmith",
    icon: "fab fa-github-square",
    iconAlt: "fab fa-github",
  },
  {
    platform: "Dev.to",
    url: "https://dev.to/tylerlwsmith",
    icon: "fab fa-dev",
    iconAlt: "fab fa-dev",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/tylerlwsmith",
    icon: "fab fa-twitter-square",
    iconAlt: "fab fa-twitter",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tylerlwsmith/",
    icon: "fab fa-linkedin",
    iconAlt: "fab fa-linkedin-in",
  },
  {
    platform: "Email",
    url: "mailto:tyler@deadhandmedia.com",
    icon: "fas fa-envelope-square",
    iconAlt: "fas fa-envelope",
  },
  {
    platform: "Mastodon",
    url: "https://hachyderm.io/@tylerlwsmith",
    icon: "fa-brands fa-mastodon",
    iconAlt: "fa-brands fa-mastodon",
    rel: "me",
  },
];
