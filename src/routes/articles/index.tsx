import { component$, useComputed$, useSignal, $ } from "@builder.io/qwik";
import Blog from "~/components/articles/blog";
import Search from "~/components/articles/search";
import { blogs } from "./data";

export default component$(() => {
  const searchKey = useSignal("");
  const shownBlogs = useComputed$(() => {
    return blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchKey.value.toLowerCase());
    });
  });

  return (
    <>
      <Search
        onChange={$((v: string) => {
          searchKey.value = v;
          return;
        })}
      />
      <div class="container mx-auto mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full w-full max-w-4xl mx-auto">
          {shownBlogs.value.map((blog) => (
            <Blog {...blog} key={blog.title} />
          ))}
        </div>
      </div>
    </>
  );
});
