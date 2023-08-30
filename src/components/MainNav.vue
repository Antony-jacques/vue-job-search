<template>
  <header class="w-full bg-brand-green-1 text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray- mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a class="flex h-full items-center text-xl" :href="url">{{
          company
        }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="h-full ml-9 first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5"
                >{{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ActionButton v-if="!isLoggedIn" @click="loginUser" />
          <ProfileImage v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Vuejs Careers",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Location", "Life at our Corp", "Student", "Job"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
