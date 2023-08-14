import { component$ } from "@builder.io/qwik";
import Work from "./work";

export default component$(() => {
  return (
    <section class="gap-8 place-items-center mt-[10vh] grid md:grid-cols-2 grid-cols-1 h-[80vh]">
      <section class="space-y-4 flex flex-col text-center md:text-left">
        <h1 class="md:text-5xl text-4xl font-bold text-primary">About me</h1>
        <span class="text-xl max-w-4xl">
          I'm {new Date().getFullYear() - 2005} years old and from Reno, Nevada.
          I've been programming ever since I was 15 and am always eager to learn
          everything there is to know about computers as a whole. I'm currently
          attending Carnegie Mellon University where I plan to major in
          Electrical and Computer Engineering. My goal is to give my time and
          energy to both improve our everyday world and share my knowledge with
          others.
          <br />
          <br />
          Outside of programming, I enjoy practicing jiu-jitsu, playing video
          games (yes, I play League of Legends), playing the guitar, and
          building computers. You can also catch me listening to hours of
          shoegaze and dream pop.
        </span>
      </section>
      <section class="w-full md:px-16 px-4">
        <Work />
      </section>
    </section>
  );
});
