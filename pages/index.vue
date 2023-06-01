<template>
  <div>
    <!-- * tags -->
    <section class="tag-box py-4 relative mx-auto">
      <ul
        class="my-1 flex flex-row content-container space-x-4 text-sm font-semibold text-gray-600 dark:text-gray-300 scroll-smooth overflow-x-scroll lg:overflow-x-hidden"
        ref="tagBox"
      >
        <button
          v-if="showBackButton"
          @click="moveBack"
          class="absolute md:block hidden z-10 top-3 rounded p-2 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:bg-slate-200"
          :class="isRTL ? '-right-1' : '-left-1'"
        >
          <Icon
            :name="isRTL ? 'mdi:chevron-right' : 'mdi:chevron-left'"
            size="20px"
          />
        </button>

        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="px-3 py-1 min-w-fit rounded my-auto bg-white text-gray-600 cursor-pointer dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform"
        >
          {{ tag.title }}
        </li>
        <button
          v-if="showNextButton"
          @click="moveNext"
          :class="isRTL ? '-left-6' : '-right-1'"
          class="absolute md:block hidden z-10 top-3 rounded p-2 shadow-lg bg-gray-50 dark:bg-gray-700 transition duration-300 ease-in-out transform hover:bg-slate-200"
        >
          <Icon
            :name="isRTL ? 'mdi:chevron-left' : 'mdi:chevron-right'"
            size="20px"
          />
        </button>
      </ul>
    </section>
    <!-- * tags -->

    <section>
      <div class="py-1 mx-auto">
        <div>
          <div
            v-if="loading"
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <template v-for="(tag, index) in 12" :key="index">
              <SharedCardSkeleton />
            </template>
          </div>
          <div
            v-else
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <template v-for="(tag, index) in 4" :key="index">
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
              <div
                class="bg-white rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 font my-2 hover:shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="#" class="relative">
                  <img
                    class="w-full rounded h-44 object-cover"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Jese Leos"
                  />
                  <div
                    class="mx-8 bg-white dark:bg-gray-300 w-11 h-11 flex flex-row justify-center rounded absolute -bottom-1"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      class="w-10 h-10 rounded my-auto"
                      alt=""
                    />
                  </div>
                </a>
                <div class="px-5 pb-0 my-2">
                  <span class="text-xs font-bold dark:text-gray-100"
                    >Get started with the range component to receive ...
                  </span>
                  <p
                    class="mt-1 mb-1 text-gray-500 dark:text-gray-400 font-light"
                  >
                    Jese drives the technical strategy of ...
                  </p>
                  <p class="text-gray-400 text-xs pb-2">
                    22M views . 3 years ago
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const tags = ref<ICategory[]>();
const loading = ref(true);

// * temp loading for skeleton animations
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
const { data }: { data: any } = await useApi("/v1/categories");

if (data) {
  tags.value = data.results as ICategory[];
}
const tagBox = ref<Ref | null>(null);

const { locale } = useI18n();
const rtlLangList = [
  "ar",
  "he",
  "fa",
  "ur",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
  "ur",
];
const isRTL = rtlLangList.includes(locale.value);

const showBackButton = ref(false);
const showNextButton = ref(true);
const moveBack = () => {
  if (isRTL ? tagBox.value.scrollLeft < 0 : tagBox.value.scrollLeft > 0) {
    if (isRTL) {
      tagBox.value.scrollLeft += 200;
    } else {
      tagBox.value.scrollLeft -= 200;
    }

    if (!showNextButton.value) {
      showNextButton.value = true;
    }
  } else {
    showBackButton.value = false;
  }
};
const moveNext = () => {
  if (
    tagBox.value.scrollLeft <
    tagBox.value.scrollWidth - tagBox.value.clientWidth
  ) {
    if (isRTL) {
      tagBox.value.scrollLeft -= 200;
    } else {
      tagBox.value.scrollLeft += 200;
    }

    if (!showBackButton.value) {
      showBackButton.value = true;
    }
  } else {
    showNextButton.value = false;
  }
};
</script>
