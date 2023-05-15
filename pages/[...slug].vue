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

const toggleCollapse = (link) => {
  link.isOpen = !link.isOpen;
};
// destrucure `prev` and `next` value from data
const [prev, next] = data.value?.surround;
</script>
<template>
  <main class="prose flex flex-row">
    <!-- create navigation ul with tailwind -->
    <ul
      class="flex flex-col w-1/5 shadow rounded px-2 py-6 m-4 bg-gray-100 dark:bg-gray-800 h-fit"
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
          <span class="text-gray-800 dark:text-gray-100 hover:text-indigo-500">
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
              <span class="hover:bg-gray-400 hover:text-white px-2 rounded">
                {{ sublink.title }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
   
    <div class="w-3/5">
      <ContentDoc />
      <!-- PrevNext Component -->
      <PrevNext :prev="prev" :next="next" />
    </div>
    <aside class="aside mx-2 w-1/5">
        <!-- Toc Component -->
        <Toc :links="data?.article.body.toc.links" />
      </aside>

    <!--     <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
    <ContentList
      path="/"
      :query="{
        only: ['title', 'description', 'tags', '_path', 'img', 'lang'],
        where: {
          tags: {
            $contains: filter,
          },
          lang: {
            $eq: locale,
          },
        },
        $sensitivity: 'base',
      }"
    >
      <template v-slot="{ list }">
        <h1 class="text-4xl font-semibold">Articles</h1>
        <ul class="article-list">
          {{ list  }}
          <li v-for="article in list" :key="article._path" class="article-item">
            <NuxtLink :to="article._path">
              <div class="wrapper">
                <div class="img-cont w-32 shrink-0">
                  <img
                    :src="`${article.img}`"
                    :alt="article.title"
                    class="rounded-lg max-h-[8rem]"
                  />
                </div>
                <header>
                  <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                  <p>{{ article.description }}</p>
                </header>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>

      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList> -->
  </main>
</template>
