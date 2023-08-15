import { component$ } from "@builder.io/qwik";
import Link from "./link";

const footerLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];
export default component$(() => {
  return (
    <footer class="bg-base-200  py-12 text-white font-semibold border-t border-zinc-700 mt-[10vh]">
      <div class="container mx-auto flex justify-between items-center sm:flex-row flex-col md:px-4 px-12 ">
        <ul class="flex justify-between items-center gap-6">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          ))}
        </ul>
        <span class="opacity-50 font-normal sm:mt-0 mt-4 text-center md:text-left">
          © {new Date().getFullYear()} Josef Macera. All rights reserved.
        </span>
      </div>
    </footer>
  );
});
