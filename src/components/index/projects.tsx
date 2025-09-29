import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { ProjectProps } from "./project";
import Project from "./project";
import { animate, inView, stagger } from "motion";

const projects: ProjectProps[] = [
  {
    title: "Profluento",
    description:
      "The Next Generation of Wealth Management.",
    image: "/profluento.png",
    link: "https://profluento.dev/",
    tags: ["ai", "crm", "wealth management", "automation", "lead generation"],
  },
  {
    title: "CDK Global",
    description: "Built the Fortellis Team's Super Admin UI. Also not open source.",
    image: "/cdk.jpg",
    link: "https://fortellis.io/",
    tags: ["javascript", "aws", "react", "dynamodb", "node.js", "css"],
  },
  {
    title: "Hyphen Solutions",
    description:
      "Built the Wallet division's Payment Method Tab. Not open source.",
    image: "/hyphen.jpeg",
    link: "https://wallet.hyphensolutions.com/#home",
    tags: ["react", "css", "sql", "postgres", "node.js"],
  },
  {
    title: "Coming Soon!",
    description: "More awesome things to be built at UT Austin.",
    tags: ["vue", "tailwindCSS", "typescript"],
    image: "/comingsoon.jpg",
    link: "",
  },
  {
    title: "Coming Soon!",
    description: "More awesome things to be built at UT Austin.",
    tags: ["prisma", "typescript", "railway"],
    image: "/comingsoon.jpg",
    link: "",
  },
  {
    title: "Coming Soon!",
    description: "More awesome things to be built at UT Austin.",
    tags: ["django", "uvicorn", "javascript"],
    image: "/comingsoon.jpg",
    link: "",
  },
];
export default component$(() => {
  useVisibleTask$(() => {
    inView(".projects-anim", (info) => {
      animate(
        info.target,
        {
          opacity: 1,
          y: 10,
        },
        {
          duration: 0.3,
          easing: "ease-in",
          delay: 0.4,
        }
      );
      animate(
        ".project",
        {
          opacity: 1,
          // x: 0,
        },
        {
          duration: 0.3,
          easing: "ease-in",
          delay: stagger(0.2, { start: 0.3 }),
        }
      );
    });
  });
  return (
    <section class="mt-[10vh]" id="projects">
      <h1 class="md:text-5xl text-4xl font-bold text-primary md:text-left text-center projects-anim opacity-0">
        My Projects
      </h1>
      <aside class="text-xl mt-4 md:text-left text-center projects-anim opacity-0">
        Check out my cool projects, or contact me to work on something amazing
        together!
      </aside>
      <ul class="mt-16 grid grid-flow-row grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 overflow-auto gap-8">
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </ul>
    </section>
  );
});
