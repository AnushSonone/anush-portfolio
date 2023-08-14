import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/index/about";
import Hero from "~/components/index/hero";
import Projects from "~/components/index/projects";

export default component$(() => {
  return (
    <div class="space-y-[20vh]">
      <Hero />
      <About />
      <Projects />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
