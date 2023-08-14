import { component$ } from "@builder.io/qwik";
import Socials from "./socials";

export default component$(() => {
  return (
    <section class="gap-8 place-items-center h-[80vh] mt-[20vh]">
      <section class="space-y-4 flex flex-col text-center md:text-left">
        <img
          src="/assets/alpaca.png"
          class="aspect-square rounded-full w-16 h-16 place-self-center md:place-self-start"
        />

        <h1 class="md:text-7xl text-4xl font-bold text-primary">
          Hi! I'm Josef :)
        </h1>
        <span class="md:text-5xl text-3xl opacity-50 font-bold max-w-4xl">
          Developer, Engineer, Roboticist, Teacher
        </span>
        <span class="text-xl max-w-4xl">
          I'm a passionate software developer and aspiring engineer. I enjoy all
          things computers and love using code to better the world around us.
        </span>
        <Socials />
      </section>
    </section>
  );
});
