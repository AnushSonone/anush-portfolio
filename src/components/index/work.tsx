import { component$ } from "@builder.io/qwik";
import { LuDownload, LuSwords } from "@qwikest/icons/lucide";

const work = [
  {
    role: "Full Stack Developer",
    company: "Pipeline AI",
    image: "/pipeline_ai.webp",
    from: "July 2023",
    to: "Present",
  },
  {
    role: "Chief Technical Officer",
    company: "Arafa Tech Foundation",
    image: "/arafa_tech.png",
    from: "February 2023",
    to: "Present",
  },
  {
    role: "Chief Information Officer",
    company: "School Simplified",
    image: "/school_simplified.svg",
    from: "May 2022",
    to: "January 2023",
  },
];
export default component$(() => {
  return (
    <div class="rounded-2xl border border-opacity-70 p-6 bg-base-100 border-zinc-700">
      <h2 class="font-semibold inline-flex items-center text-primary">
        <LuSwords class="h-6 w-6 mr-2" />
        Work
      </h2>
      <ol class="mt-6 space-y-4">
        {work.map((job) => (
          <li class="flex space-x-4 text-md" key={job.image}>
            <img
              width={48}
              height={48}
              src={job.image}
              class="h-12 w-12 p-2 rounded-full bg-base-200"
            />
            <div class="flex flex-col w-full">
              <span>{job.company}</span>
              <div class="flex w-full justify-between text-xs opacity-80">
                <span>{job.role}</span>
                <span class="hidden md:inline">
                  {job.from} - {job.to}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <a
        href="/resume.pdf"
        target="_blank"
        class="w-full bg-primary text-base-200 mt-8  p-4 rounded-md flex"
      >
        View Resume
        <LuDownload class="h-6 w-6 ml-2 inline-flex" />
      </a>
    </div>
  );
});
