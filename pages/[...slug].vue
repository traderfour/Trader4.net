<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
</script>
<template>
  <main class="prose flex flex-row">
    <!-- create navigation ul with tailwind -->
    <ul class="flex flex-col w-1/4">
      <li v-for="link of navigation" :key="link._path" class="py-2">
        <NuxtLink :to="link._path" class="text-gray-800 hover:text-indigo-500">
          {{ link.title }}
          <!-- sub navigation -->
          <ul class="pl-4 mt-2">
            <li
              v-for="sublink of link.children"
              :key="sublink._path"
              class="py-1"
            >
              <NuxtLink
                :to="sublink._path"
                class="block text-sm text-gray-800 hover:bg-indigo-500 hover:text-white pl-2"
              >
                {{ sublink.title }}
              </NuxtLink>
            </li>
          </ul>
        </NuxtLink>
      </li>
    </ul>

    <ContentDoc class="basis-2/4" />

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
