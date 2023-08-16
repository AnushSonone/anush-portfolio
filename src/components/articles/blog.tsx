import { component$ } from "@builder.io/qwik";
import { LuArrowRight } from "@qwikest/icons/lucide";
import { BlogMeta } from "~/routes/articles/data";

export default component$<BlogMeta>((props) => {
  return (
    <section class="rounded-md bg-base-200 border-zinc-700 w-full p-4 flex flex-col space-y-8">
      <img src={props.image} class="rounded-md w-full max-h-64 object-cover" />
      <div class="flex justify-between items-center">
        <span class="text-sm mr-4"> {props.date}</span>
        <span class="h-1 grow border-b border-white/20"></span>
      </div>
      <span class="font-bold text-4xl">{props.title}</span>
      <p class="text-base-content">{props.description}</p>
      {props.inProgress ? (
        <span class="font-bold flex items-center space-x-2  rounded-md p-2 border-sm transition opacity-80">
          Coming soon...
        </span>
      ) : (
        <a
          href={`/articles/${props.id}`}
          class="font-bold text-primary flex items-center space-x-2 group hover:bg-primary hover:text-base-200 rounded-md p-2 border-sm transition "
        >
          <span>Read More</span>
          <LuArrowRight class="group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-300" />
        </a>
      )}
    </section>
  );
});
