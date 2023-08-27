import { $, component$, useSignal } from "@builder.io/qwik";
import Link from "./link";
import clsx from "clsx";
import { LuAlignJustify, LuGithub, LuLinkedin } from "@qwikest/icons/lucide";
import { animate } from "motion";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default component$(() => {
  const menuShown = useSignal(false);

  const showMenu = $(() => {
    menuShown.value = !menuShown.value;
    if (!menuShown.value)
      animate("#nav-menu", { opacity: 0, y: -10 }, { duration: 0.5 });
    else animate("#nav-menu", { opacity: 1, y: 10 }, { duration: 0.5 });
  });
  return (
    <>
      <div class="w-5/6 mx-auto">
        <nav class="flex flex-row md:w-full justify-center py-4 font-semibold text-white text-xl">
          <ul class="flex-row sm:flex hidden sm:bg-base-100 space-x-6">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
          <button
            class="sm:hidden block mr-auto p-2 rounded-md hover:bg-base-200 active:bg-base-200 transition active:scale-90"
            aria-label="toggle menu"
            onClick$={showMenu}
          >
            <LuAlignJustify class="w-6 h-6" />
          </button>
          <section class="flex md:block flex-col justify-center">
            <Link
              href="https://github.com/lmaosoggypancakes/www.soggypancakes.tech"
              target="_blank"
              class=""
            >
              <LuGithub class="w-8 h-8 hidden sm:block absolute right-4 hover:rotate-12 transition hover:scale-105" />
            </Link>
            <a href="/">
              <img
                src="/me.jpg"
                class="sm:hidden aspect-square rounded-full w-8 h-8 place-self-center md:place-self-start"
              />
            </a>
          </section>
        </nav>
      </div>
      <div
        class={clsx(
          `md:hidden bg-base-200 text-white px-4 py-6 font-semibold mb-2`,
          !menuShown.value && "hidden opacity-0"
        )}
        id="nav-menu"
      >
        <ul class="space-y-8">
          {links.map((link) => (
            <>
              <Link href={link.href} key={link.href} class="inline">
                {link.name}
              </Link>
              <br />
            </>
          ))}
        </ul>
        <div class="h-1 w-full border-t border-white my-4"></div>
        <div class="flex flex-row justify-end items-center space-x-4">
          <Link href="https://github.com/lmaosoggypancakes/pancakes.tech">
            <LuGithub class="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com/in/josefmacera/">
            <LuLinkedin class="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
});
