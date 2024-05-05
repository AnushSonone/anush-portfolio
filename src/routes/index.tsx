import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/index/about";
import Hero from "~/components/index/hero";
import Projects from "~/components/index/projects";
import Work from "~/components/index/work";

export default component$(() => {
  return (
    <div class="space-y-[20vh]">
      <Hero />
      <About />
      <Work />
      <Projects />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Anush Sonone Portfolio",
  meta: [
    {
      name: "description",
      content: "Welcome! I'm Josef Macera, a software engineer.",
    },
  ],
};
