import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { LuArrowLeft, LuCalendar, LuUser } from "@qwikest/icons/lucide";
import Link from "~/components/link";

export default component$(() => {
  const head = useDocumentHead();
  const location = useLocation();
  console.log(location.url.pathname);
  return (
    <>
      {location.url.pathname !== "/articles/" && (
        <Link href="/articles">
          <LuArrowLeft class="h-8 w-8 hover:bg-base-200 rounded-full hover:-rotate-12 p-1 transition" />
        </Link>
      )}
      <div
        class={`container mx-auto mt-[5%] text-left ${
          location.url.pathname !== "/articles/" &&
          "prose prose-invert lg:prose-xl"
        }`}
      >
        {location.url.pathname !== "/articles/" && (
          <section class="bg-base-200 p-4 rounded-2xl opacity-90">
            <img src="/me.jpg" class="h-10 w-10 rounded-full" />
            <h1>{head.title}</h1>
            <div class="space-y-0">
              <div class="flex flex-col p-0">
                <div class="flex flex-row items-center space-x-4"></div>
                <span class="inline-flex items-center space-x-4">
                  <LuUser class="h-6 w-6 text-primary" />
                  <span>
                    {head.meta.find((v) => v.name == "author")?.content}
                  </span>
                </span>
                <span class="inline-flex items-center space-x-4">
                  <LuCalendar class="h-6 w-6 text-primary" />
                  <span>{head.frontmatter.created}</span>
                </span>
              </div>
            </div>
          </section>
        )}
        <Slot />
      </div>
    </>
  );
});
