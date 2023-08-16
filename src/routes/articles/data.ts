export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  id: string;
  image: string;
  inProgress?: true;
}

export const blogs: BlogMeta[] = [
  {
    title: "How I made the Spellsword Loading Animation",
    date: "8/15/2023",
    description:
      "Using the power of SVG properties and a bit of CSS, I made a cool loading animation for my website.",
    id: "spellsword-loading-animation",
    image: "/blogs/spellsword-logo.png",
  },
  {
    title: "My college application journey",
    date: "8/17/2023",
    description: "",
    id: "college-application-journey",
    image: "/blogs/college-application-journey.jpg",
    inProgress: true,
  },
];
