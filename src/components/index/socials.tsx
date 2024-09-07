import { component$ } from "@builder.io/qwik";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "@qwikest/icons/bootstrap";
import Link from "../link";

const socials = [
  {
    href: "https://www.linkedin.com/in/anushse/",
    icon: BsLinkedin,
  },
  {
    href: "https://github.com/AnushSonone",
    icon: BsGithub,
  },
];
export default component$(() => {
  return (
    <ul class="flex space-x-4 place-self-start mt-48 md:mt-0">
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
