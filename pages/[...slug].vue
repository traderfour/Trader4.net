<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description", "lang"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

// show items in collapse if the current route is the same as the link path
const route = useRoute();
const isCurrentRoute = (link) => {
  return route.path === link._path;
};
if (data.value?.article) {
  // show collapse in pranet
  const parent = navigation.value?.find((link) => {
    return link.children?.some((child) => {
      return child._path === data.value?.article?._path;
    });
  });
  if (parent) {
    parent.isOpen = true;
  }
}
console.log(isCurrentRoute(data.value?.article));

// toggle collapse item
const toggleCollapse = (link) => {
  link.isOpen = !link.isOpen;
};
// destrucure `prev` and `next` value from data
const [prev, next] = data.value?.surround;
</script>
<template>
  <main class="prose flex flex-row">
    <!-- create navigation ul with tailwind -->
    <ul class="flex flex-col w-1/5">
      <div
        class="fixed shadow rounded px-2 py-6 m-4 bg-gray-100 dark:bg-gray-800 h-fit w-48"
      >
        <li
          v-for="link of navigation"
          :key="link._path"
          class="py-2 dark:text-gray-100"
        >
          <div
            @click="toggleCollapse(link)"
            class="flex items-center cursor-pointer"
          >
            <span class="mr-2">
              <svg
                :class="{ 'rotate-90': link.isOpen }"
                class="w-4 h-4 transition-transform duration-300 transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
            <span
              class="text-gray-800 dark:text-gray-100 hover:text-indigo-500"
            >
              {{ link.title }}
            </span>
          </div>
          <ul v-show="link.isOpen" class="pl-2 mt-2">
            <li
              v-for="sublink of link.children"
              :key="sublink._path"
              class="py-1"
            >
              <NuxtLink
                :to="sublink._path"
                class="block text-sm text-gray-800 dark:text-gray-100 pl-2"
              >
                <span
                  class="hover:text-blue-500 px-2 rounded"
                  :class="{ ' text-blue-500': isCurrentRoute(sublink) }"
                >
                  {{ sublink.title }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </div>
    </ul>

    <div class="w-3/5">
      <ContentDoc />
      <!-- PrevNext Component -->
      <PrevNext :prev="prev" :next="next" />
    </div>
    <aside class="mx-2 w-1/5">
      <div class="fixed w-72">
        <!-- Toc Component -->
        <Toc :links="data?.article.body.toc.links" />
      </div>
    </aside>
  </main>
</template>
