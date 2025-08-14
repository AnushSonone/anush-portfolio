
import { component$, $, useSignal, useComputed$ } from "@builder.io/qwik";
import { LuArrowLeft, LuArrowRight } from "@qwikest/icons/lucide";

export default component$(() => {
  const images = useSignal([
    {
      url: "/about/prom.jpg",
      id: "prom",
    },
    {
      url: "/about/read.jpg",
      id: "read",
    },
    {
      url: "/about/milo.jpg",
      id: "milo",
    },
    {
      url: "/about/intern.jpg",
      id: "intern",
    },
  ]);
  const shownImageIndex = useSignal(0);
  const image = useComputed$(() => images.value[shownImageIndex.value]);
  
  const nextImage = $(() => {
    shownImageIndex.value = (shownImageIndex.value + 1) % images.value.length;
  });
  
  const previousImage = $(() => {
    shownImageIndex.value = (shownImageIndex.value - 1 + images.value.length) % images.value.length;
  });
  
  return (
    <>
      <div class="hidden md:grid w-full h-full min-h-0 md:my-0 my-72">
        <img
          src={image.value.url}
          key={image.value.id}
          draggable
          width="4032"
          height="3024"
          class="rounded-2xl shadow-md drop-shadow-sm resize-none shadow-gray-500 fixed md:w-3/4 w-screen lg:w-5/12 transition hover:shadow-none place-self-center justify-self-center hover:rotate-3 cursor-pointer hover:scale-[101%] md:h-96 md:object-cover object-contain backdrop-blur-2xl overflow-hidden z-10 md:z-0 "
        />
        <LuArrowRight
          class="h-8 w-8 opacity-30 bg-gray-600 rounded-full hover:opacity-100  cursor-pointer transition absolute place-self-center justify-self-end z-10 md:translate-x-0 translate-x-8"
          onClick$={nextImage}
        />
        <LuArrowLeft
          class="h-8 w-8  opacity-30 bg-gray-600 rounded-full hover:opacity-100  cursor-pointer transition absolute place-self-center justify-self-start z-10 md:translate-x-0 -translate-x-8"
          onClick$={previousImage}
        />
      </div>
      <div class="md:hidden columns-2 items-center w-full space-y-4">
        {images.value.map((image) => (
          <img src={image.url} key={image.url} id={image.id} draggable width="4032" height="3024" />
        ))}
      </div>
    </>
  );
});
