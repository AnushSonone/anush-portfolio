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
    title: "How I got into UT Austin Computer Science with a 3% Acceptance Rate",
    date: "5/6/24",
    description: "How I got into UT Austin CS and my 11 other rejections.",
    id: "college-application-journey",
    image: "/blogs/college-application-journey.png",
  },
  {
    title: "Building the Wallet Payment Method Tab at Hyphen Solutions.",
    date: "5/5/24",
    description: "How exactly do payments work at an SaaS company?",
    id: "payment-method",
    image: "/blogs/payments.jpg",
    inProgress: true,
  },
  {
    title: "Landing a SWE internship at Hyphen Solutions.",
    date: "5/6/24",
    description: "How I got a paid SWE Internship in high school.",
    id: "internship-journey",
    image: "/blogs/hyphensolutions.png",
    inProgress: true,
  },
];
