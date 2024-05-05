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
    title: "My College Application Journey",
    date: "5/5/24",
    description: "How I got into UT Austin and my journey to get there.",
    id: "college-application-journey",
    image: "/blogs/college-application-journey.jpg",
  },
  {
    title: "How I got an internship as a Sophomore in High School",
    date: "5/5/24",
    description: "Hyphen Solutions!?",
    id: "college-application-journey",
    image: "/comingsoon.jpg",
    inProgress: true,
  },
];
