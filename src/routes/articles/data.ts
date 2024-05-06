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
    title: "My College Application Journey!",
    date: "5/5/24",
    description: "How I got into UT Austin CS and my 14 other rejections.",
    id: "college-application-journey",
    image: "/blogs/college-application-journey.png",
  },
  {
    title: "Landing a SWE internship at Hyphen Solutions.",
    date: "5/5/24",
    description: "How I earned a paid SWE Internship in high school.",
    id: "internship-journey",
    image: "/blogs/hyphensolutions.png",
  },
  {
    title: "Processing Payment Methods at Hyphen Solutions.",
    date: "5/5/24",
    description: "How exactly do databases work at an SaaS company?",
    id: "payment-method",
    image: "/blogs/payments.jpg",
  },
];
