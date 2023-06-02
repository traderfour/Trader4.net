<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Post
      </h2>
      <VForm :validation-schema="postSchema" @submit="addPost">
        <div class="grid gap-4 sm:grid-cols-12 sm:gap-6 items-start">
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <VField
              v-model="postData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>

          <!-- * comments -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="exceprt"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Comments
            </label>

            <div class="flex flex-wrap space-x-3">
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="public"
                  name="comments"
                  :value="19000"
                  class="hidden peer"
                />
                <label for="public" class="radio-button">
                  <span class="w-full">Public</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="private"
                  name="comments"
                  :value="19001"
                  class="hidden peer"
                />
                <label for="private" class="radio-button">
                  <span class="w-full">Private</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="closed"
                  name="comments"
                  :value="19002"
                  class="hidden peer"
                />
                <label for="closed" class="radio-button">
                  <span class="w-full">Closed</span>
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="subscribers"
                  name="comments"
                  :value="19003"
                  class="hidden peer"
                />
                <label for="subscribers" class="radio-button">
                  <span class="w-full">Subscribers</span>
                </label>
              </div>
            </div>
          </div>
          <!-- * comments -->

          <!-- * post type -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <select
              v-model="postData.type"
              id="type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
            >
              <option
                v-for="(typeItem, typeIndex) in postTypes"
                :key="typeIndex"
                :value="typeItem.value"
              >
                {{ typeItem.text }}
              </option>
            </select>
          </div>
          <!-- * post type -->

          <!-- * tags -->
          <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tags
            </label>
            <SharedTagInput v-model="postData.tags" />
          </div>
          <!-- * tags -->

          <!-- * publish -->
          <!-- <div class="w-full lg:col-span-6 col-span-full">
            <label
              for="is_public"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Publish
            </label>

            <div class="flex flex-wrap space-x-3">
              <div>
                <input
                  v-model="postData.is_public"
                  type="radio"
                  id="public-access"
                  name="is_public"
                  :value="true"
                  class="hidden peer"
                />
                <label for="public-access" class="radio-button">
                  <span class="w-full">Public</span>
                </label>
              </div>
              <div>
                <input
                  v-model="postData.is_public"
                  type="radio"
                  id="private-access"
                  name="is_public"
                  :value="false"
                  class="hidden peer"
                />
                <label for="private-access" class="radio-button">
                  <span class="w-full">Private</span>
                </label>
              </div>
            </div>
          </div> -->
          <!-- * publish -->

          <!-- * Logo & cover -->
          <GlobalImageUploader
            class="md:col-span-4 col-span-full"
            id="logo"
            key="logo"
            lable-idle="Logo here"
            @on-uploaded-successfully="
              ($event) => {
                postData.logo_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />

          <GlobalImageUploader
            class="md:col-span-4 col-span-full"
            id="cover"
            key="cover"
            lable-idle="Cover here"
            @on-uploaded-successfully="
              ($event) => {
                postData.cover_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />

          <GlobalImageUploader
            class="col-span-4"
            id="attachments"
            key="attachments"
            :is-multiple="true"
            lable-idle="attachments here (multiple)"
            @on-uploaded-successfully="
              ($event) => {
                postData.attachments.push($event.results.uuid as never);
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />
          <!-- * Logo & cover -->

          <div class="col-span-full">
            <Editor v-model="postData.content" />
            <span v-if="hasContentError" class="text-red-700 text-sm">
              Content is Required
            </span>
          </div>
          <!-- * tiny MCE -->
        </div>
        <button
          type="submit"
          class="items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled"
        >
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Publish Post</span>
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import * as Yup from "yup";

const postData = ref({
  title: undefined,
  slogan: undefined,
  logo_id: undefined,
  cover_id: undefined,
  excerpt: undefined,
  content: undefined,
  comments: 19000,
  type: 13014,
  is_public: true,
  attachments: [] || undefined,
  categories: undefined,
  tags: undefined,
  platforms: undefined,
});

const hasContentError = ref(false);
const loadingDisabled = ref(false);
const store = usePostsStore();
const router = useRouter();

const postTypes = [
  {
    text: "Bot",
    value: 13000,
  },
  {
    text: "Indicator",
    value: 13001,
  },
  {
    text: "System",
    value: 13002,
  },
  {
    text: "Script",
    value: 13003,
  },
  {
    text: "Template",
    value: 13004,
  },
  {
    text: "Algorithm",
    value: 13005,
  },
  {
    text: "Artificial Intelligence",
    value: 13006,
  },
  {
    text: "Portfolio",
    value: 13007,
  },
  {
    text: "Ai Live",
    value: 13008,
  },
  {
    text: "Funded Account",
    value: 13009,
  },
  {
    text: "Trading Signal",
    value: 13010,
  },
  {
    text: "Trading Strategy",
    value: 13011,
  },
  {
    text: "Course",
    value: 13012,
  },
  {
    text: "Video",
    value: 13013,
  },
  {
    text: "Article",
    value: 13014,
  },
  {
    text: "Podcast",
    value: 13015,
  },
  {
    text: "Short Video",
    value: 13016,
  },
  {
    text: "Data",
    value: 13017,
  },
  {
    text: "Moel",
    value: 13018,
  },
  {
    text: "Live Stream",
    value: 13019,
  },
  {
    text: "Other",
    value: 13020,
  },
];

const addPost = () => {
  if (postData.value.content) {
    loadingDisabled.value = true;
    store.createPost(postData.value).then((res: any) => {
      if (res.data.succeed && res.data.results.uuid) {
        router.push("/my/posts");
      } else {
        loadingDisabled.value = false;
        hasContentError.value = true;
      }
    });
  } else {
    hasContentError.value = true;
  }
};

const {
  fetchCategories,
  categories,
  fetchMarkets,
  markets,
  fetchPlatforms,
  platforms,
} = useMarketStore();

onMounted(() => {
  nextTick(() => {
    fetchCategories();
    fetchMarkets();
    fetchPlatforms();
  });
});

// Form Validation
const postSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
});
</script>

<style>
.tox-notifications-container {
  display: none;
}
.radio-button {
  @apply inline-flex items-center justify-center w-full px-4 py-2 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700;
}
</style>
