import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { ProjectProps } from "./project";
import Project from "./project";
import { animate, inView, stagger } from "motion";

const projects: ProjectProps[] = [
  {
    title: "Spellsword",
    description:
      "An interactive, realtime, web-based game designed to improve our command of the English language.",
    image: "https://spellsword.xyz/logo.png",
    link: "https://spellsword.xyz",
    tags: ["Nuxt", "TailwindCSS", "Socket.io", "Node.js"],
  },
  {
    title: "Oinkers",
    description: "A minimalistic money management platform for kids and teens.",
    tags: ["Vue", "Capacitor", "TypeScript", "TailwindCSS", "NestJS"],
    image: "/oinkers.png",
    link: "https://play.google.com/store/apps/details?id=me.josefmacera.oinkers",
  },
  {
    title: "NTRL",
    description:
      "Desktop/web application that allows Nevadans to find natural parks in their area.",
    tags: ["Vue", "TailwindCSS", "TypeScript"],
    image: "/ntrl.png",
    link: "https://ntrl.vercel.app",
  },
  {
    title: "Kody",
    description: "The Arafa Tech Foundation's Discord Bot",
    tags: ["Prisma", "TypeScript", "Railway"],
    image: "/kody.png",
    link: "https://github.com/Arafa-Tech-Foundation/Discord-Bot",
  },
  {
    title: "Classroom",
    description:
      "Classroom management app that allows students to track assignments and communicate with teachers in real time. My CS50 Final Project.",
    tags: ["Django", "Uvicorn", "JavaScript"],
    image: "/students.jpg",
    link: "https://github.com/lmaosoggypancakes/classroom",
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
