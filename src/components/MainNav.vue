<template>
  <header class="w-full bg-brand-green-1 text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray- mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a class="flex h-full items-center text-xl" href="/">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Vuejs Careers",
    };
  },
};
</script>
