import { component$, $, useSignal } from "@builder.io/qwik";
import { LuArrowLeft, LuArrowRight } from "@qwikest/icons/lucide";

export default component$(() => {
  const images = useSignal([
    {
      url: "/about/alpaca.jpg",
      id: "alpaca",
    },
    {
      url: "/about/robor.jpg",
      id: "robor",
    },
    {
      url: "/about/sal.jpg",
      id: "sal",
    },
    {
      url: "/about/zion.jpg",
      id: "zion",
    },
  ]);
  const nextImage = $(() => {
    const topImage = images.value.shift();
    images.value = [...images.value, topImage!];
  });
  const previousImage = $(() => {
    const topImage = images.value.pop();
    images.value = [topImage!, ...images.value];
  });
  return (
    <div class="grid w-full h-full min-h-0 md:my-0 my-72">
      {images.value.map((image, index) => (
        <img
          src={image.url}
          key={image.url}
          id={image.id}
          draggable
          class={`rounded-2xl shadow-md drop-shadow-sm resize-none shadow-gray-500 fixed md:w-3/4 w-screen lg:w-5/12 transition hover:shadow-none place-self-center justify-self-center hover:rotate-3 cursor-pointer hover:scale-[101%] md:h-96 md:object-cover object-contain backdrop-blur-2xl overflow-hidden z-10 md:z-0 -translate-y-[${
            index * 10 + 30
          }px] ${index != images.value.length - 1 && "hidden md:block"} `}
          style={{ zIndex: index }}
        />
      ))}
      <LuArrowRight
        class="h-8 w-8 opacity-30 bg-gray-600 rounded-full hover:opacity-100  cursor-pointer transition absolute place-self-center justify-self-end z-10 md:translate-x-0 translate-x-8"
        onClick$={nextImage}
      />
      <LuArrowLeft
        class="h-8 w-8  opacity-30 bg-gray-600 rounded-full hover:opacity-100  cursor-pointer transition absolute place-self-center justify-self-start z-10 md:translate-x-0 -translate-x-8"
        onClick$={previousImage}
      />
    </div>
  );
});
