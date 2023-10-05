import { component$, $, useSignal } from "@builder.io/qwik";
import {
  LuArrowBigRight,
  LuArrowLeft,
  LuArrowRight,
} from "@qwikest/icons/lucide";

export default component$(() => {
  const images = useSignal([
    {
      url: "https://images.unsplash.com/photo-1696229250077-bf5e4d7f7106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      id: "lmfao",
    },
    {
      url: "https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      id: "yo wtf",
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
    <div class="grid w-full h-full">
      {images.value.map((image, index) => (
        <img
          src={image.url}
          key={image.url}
          id={image.id}
          draggable
          class={`rounded-2xl shadow-md drop-shadow-sm  shadow-gray-500 fixed w-3/4 lg:w-5/12 transition hover:shadow-none place-self-center justify-self-center hover:rotate-3 cursor-pointer hover:scale-105 h-auto -translate-y-[${
            index * 10 + 30
          }px]`}
          style={{ zIndex: index }}
        />
      ))}
      <LuArrowRight
        class="h-8 w-8 opacity-30 bg-gray-600 rounded-full hover:opacity-100 transition absolute place-self-center justify-self-end z-10"
        onClick$={nextImage}
      />
      <LuArrowLeft
        class="h-8 w-8  opacity-30 bg-gray-600 rounded-full hover:opacity-100 transition absolute place-self-center justify-self-start z-10"
        onClick$={previousImage}
      />
    </div>
  );
});
