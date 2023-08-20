import { component$ } from "@builder.io/qwik";
import Link from "../link";
import { LuExternalLink } from "@qwikest/icons/lucide";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export default component$<ProjectProps>((props) => {
  return (
    <li class="border border-zinc-700 rounded-md flex flex-col bg-base-100 hover:bg-base-200 group p-8 relative w-full max-w-lg project opacity-0">
      <img
        src={props.image}
        class="h-24 w-24 rounded-l-md bg-white object-contain"
      />
      <h3 class="text-3xl font-semibold mt-8">{props.title}</h3>
      <p class="text-sm">{props.description}</p>
      <ul class="mt-4 flex gap-2 flex-wrap">
        {props.tags?.map((tag) => (
          <li class="bg-secondary text-base-200 rounded-md p-1 px-2 uppercase">
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href={props.link}
        target="_blank"
        class="absolute top-4 right-4 hover:text-primary hover:rotate-12 transition"
      >
        <LuExternalLink class="h-6 w-6 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 transition" />
      </Link>
    </li>
  );
});
