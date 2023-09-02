import { component$ } from "@builder.io/qwik";
import { LuSearch } from "@qwikest/icons/lucide";

export default component$<{ onChange: (v: any) => void }>(({ onChange }) => {
  return (
    <div class="relative bg-base-200 rounded-md text-white focus:outline-none p-4 focus:ring-0 flex flex-col justify-center px-6 border-2 border-primary/50 mx-auto w-full max-w-4xl">
      <LuSearch class="absolute justify-self-center p-0 h-6 w-6" />
      <input
        type="text"
        class="bg-transparent pl-12 outline-none text-sm"
        placeholder="Santa Claus Conquers the Martians"
        // @ts-ignore
        onInput$={(e) => onChange(e.target.value)}
      />
    </div>
  );
});
