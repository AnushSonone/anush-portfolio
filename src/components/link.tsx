import { Slot, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
interface LinkProps {
  href: string;
  class?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default component$<LinkProps>(({ href, ...props }) => {
  const active = useLocation().url.pathname == href;
  console.log(active);
  return (
    <a
      class={clsx(
        "hover:border-b-4 border-primary hover:border-dotted transition-all duration-100 ease-in-out box-border",
        active && "border-b-4 border-primary border-dotted ",
        props.class || ""
      )}
      href={href}
      target={props.target}
    >
      <Slot />
    </a>
  );
});
