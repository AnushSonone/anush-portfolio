import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Carousel from "./carousel";
import { animate, inView } from "motion";

export default component$(() => {
  useVisibleTask$(() => {
    inView("#about", (info) => {
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
    });
  });
  return (
    <section
      class="gap-8 place-items-center mt-[10vh] grid lg:grid-cols-2 grid-cols-1 min-h-[80vh] opacity-0"
      id="about"
    >
      <section class="space-y-4 flex flex-col md:text-left">
        <h1 class="md:text-5xl text-4xl font-bold text-primary">About me</h1>
        <span class="text-xl max-w-4xl mb-8">
          I'm {new Date().getFullYear() - 2006} years old and from Fort Worth, Texas.
          I've been programming ever since I was 15 and am always eager to learn
          everything there is to know about computers as a whole. I'm currently
          attending the <b>University of Texas at Austin</b> where I plan to major in
          <b> Computer Science</b>. My goal is to give my time and
          energy to both improve our everyday world and share my knowledge with
          others.
          <br />
          <br />
          Outside of programming, I enjoy powerlifting, playing video
          games (yes, I play Valorant), working out, and
          playing racquetball. You can also catch me listening to hours of 
          Beach House and BETWEEN FRIENDS.
        </span>
      </section>
      <Carousel />
    </section>
  );
});
