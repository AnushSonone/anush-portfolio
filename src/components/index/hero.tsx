import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Socials from "./socials";
import { animate, inView } from "motion";

export default component$(() => {
  useVisibleTask$(() => {
    inView("#hero", (info) => {
      animate(
        info.target,
        {
          opacity: 1,
          y: 10,
        },
        {
          duration: 0.3,
          easing: "ease-in",
        }
      );
    });
  });
  return (
    <section
      class="gap-8 place-items-center h-[80vh] md:mt-[20vh] mt-[5vh] opacity-0 translate-y-10"
      id="hero"
    >
      <section class="space-y-4 flex flex-col text-left">
        <img
          src="/me.jpg"
          class="aspect-square rounded-full w-16 h-16 place-self-center md:place-self-start hidden md:block"
        />

        <h1 class="md:text-7xl text-4xl font-bold text-primary">
          Hi! I'm Josef :)
        </h1>
        <span class="md:text-5xl text-3xl opacity-50 font-bold max-w-4xl">
          Developer, Engineer, Roboticist, Teacher
        </span>
        <span class="text-xl max-w-4xl !md:mb-0 !mb-16">
          I'm a passionate software developer and aspiring engineer. I enjoy all
          things computers and love using code to better the world around us.
        </span>
        <Socials />
      </section>
    </section>
  );
});
