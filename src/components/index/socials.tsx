import { component$ } from "@builder.io/qwik";
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "@qwikest/icons/bootstrap";
import Link from "../link";

const socials = [
  {
    href: "https://www.instagram.com/lmaojosef/",
    icon: BsInstagram,
  },
  {
    href: "https://www.linkedin.com/in/josefmacera/",
    icon: BsLinkedin,
  },
  {
    href: "https://github.com/lmaosoggypancakes",
    icon: BsGithub,
  },
  {
    href: "https://discordapp.com/users/729696323615588382",
    icon: BsDiscord,
  },
];
export default component$(() => {
  return (
    <ul class="flex space-x-4 place-self-center md:place-self-start">
      {socials.map((social) => (
        <li class="hover:scale-105 transition duration-100" key={social.href}>
          <Link href={social.href} target="_blank">
            <social.icon class="h-6 w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
});
