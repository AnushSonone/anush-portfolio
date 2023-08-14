import { Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
interface LinkProps {
  href: string;
  class: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default component$<LinkProps>(({ href, ...props }) => {
  const active = useLocation().url.pathname == href;

  return (
    <a
      class={(clsx(active ? "text-primary" : ""), props.class)}
      href={href}
      target={props.target}
    >
      <Slot />
    </a>
  );
});
