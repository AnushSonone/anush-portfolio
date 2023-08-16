import { component$ } from "@builder.io/qwik";
import Blog from "~/components/articles/blog";
import Search from "~/components/articles/search";

interface BlogMeta {
  title: string;
  description: string;
  date: string;
  id: string;
  image: string;
}

export default component$(() => {
  const blogs: BlogMeta[] = [];

  return (
    <>
      <Search />
      <div class="container mx-auto mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full w-full max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <Blog {...blog} key={blog.title} />
          ))}
        </div>
      </div>
    </>
  );
});
