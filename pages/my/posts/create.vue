<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <VForm :validation-schema="postSchema" @submit="addPost">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="w-full">
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
              placeholder="Type product name"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>
          <div class="w-full">
            <label
              for="exceprt"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Comments
            </label>

            <div class="flex space-x-3">
              <div>
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="public"
                  name="comments"
                  :value="19000"
                  class="hidden peer"
                />
                <label for="public" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock-open" />
                  <span class="w-full">Public</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div>
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="private"
                  name="comments"
                  :value="19001"
                  class="hidden peer"
                />
                <label for="private" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Private</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div>
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="closed"
                  name="comments"
                  :value="19002"
                  class="hidden peer"
                />
                <label for="closed" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Closed</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div>
                <input
                  v-model="postData.comments"
                  type="radio"
                  id="subscribers"
                  name="comments"
                  :value="19003"
                  class="hidden peer"
                />
                <label for="subscribers" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Subscribers</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
            </div>
          </div>
          <div>
            <!-- * public -->
            <div class="w-full">
              <label
                for="is_public"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Public
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
                    <Icon class="w-6 h-6 mr-2" name="mdi:lock-open" />
                    <span class="w-full">Public</span>
                    <Icon name="mdi:arrow-right" />
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
                    <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                    <span class="w-full">Private</span>
                    <Icon name="mdi:arrow-right" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- * public -->

          <!-- * post type -->
          <div>
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <div class="flex flex-wrap">
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="bot"
                  name="type"
                  :value="13000"
                  class="hidden peer"
                />
                <label for="bot" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock-open" />
                  <span class="w-full">Bot</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  name="type"
                  id="indicator"
                  :value="13001"
                  class="hidden peer"
                />
                <label for="indicator" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Indicator</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  name="type"
                  id="system"
                  :value="13002"
                  class="hidden peer"
                />
                <label for="system" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">System</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="script"
                  name="type"
                  :value="13003"
                  class="hidden peer"
                />
                <label for="script" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Script</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="template"
                  name="type"
                  :value="13004"
                  class="hidden peer"
                />
                <label for="template" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Template</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="algo"
                  name="type"
                  :value="13005"
                  class="hidden peer"
                />
                <label for="algo" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Algorithm</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="ai"
                  name="type"
                  :value="13006"
                  class="hidden peer"
                />
                <label for="ai" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Artificial Intellignece</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="portfolio"
                  name="type"
                  :value="13007"
                  class="hidden peer"
                />
                <label for="portfolio" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Portfolio</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>

              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="ai-live"
                  name="type"
                  :value="13008"
                  class="hidden peer"
                />
                <label for="ai-live" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">AI Live</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="funded-account"
                  name="type"
                  :value="13009"
                  class="hidden peer"
                />
                <label for="funded-account" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Funded Account</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="trading-signal"
                  name="type"
                  :value="13010"
                  class="hidden peer"
                />
                <label for="trading-signal" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Trading Signal</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="trading-strategy"
                  name="type"
                  :value="13011"
                  class="hidden peer"
                />
                <label for="trading-strategy" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Trading Strategy</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="course"
                  name="type"
                  :value="13012"
                  class="hidden peer"
                />
                <label for="course" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Course</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="video"
                  name="type"
                  :value="13013"
                  class="hidden peer"
                />
                <label for="video" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Video</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="article"
                  name="type"
                  :value="13014"
                  class="hidden peer"
                />
                <label for="article" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Article</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="podcast"
                  name="type"
                  :value="13015"
                  class="hidden peer"
                />
                <label for="podcast" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Podcast</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="short-video"
                  name="type"
                  :value="13016"
                  class="hidden peer"
                />
                <label for="short-video" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Short Video</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="data"
                  name="type"
                  :value="13017"
                  class="hidden peer"
                />
                <label for="data" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Data</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="model"
                  name="type"
                  :value="13018"
                  class="hidden peer"
                />
                <label for="model" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Model</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="live-stream"
                  name="type"
                  :value="13019"
                  class="hidden peer"
                />
                <label for="live-stream" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Live Stream</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
              <div class="m-1">
                <input
                  v-model="postData.type"
                  type="radio"
                  id="other"
                  name="type"
                  :value="13020"
                  class="hidden peer"
                />
                <label for="other" class="radio-button">
                  <Icon class="w-6 h-6 mr-2" name="mdi:lock" />
                  <span class="w-full">Other</span>
                  <Icon name="mdi:arrow-right" />
                </label>
              </div>
            </div>
          </div>
          <!-- * post type -->

          <!-- * Logo & cover -->
          <ImageUploader
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

          <ImageUploader
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
          <div class="sm:col-span-2">
            <ClientOnly>
              <Editor v-model="postData.content" />
            </ClientOnly>
            <span v-if="hasContentError" class="text-red-700 text-sm">
              Content is Required
            </span>
          </div>
        </div>
        <button
          type="submit"
          class="items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled"
        >
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Add Post +</span>
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
  type: 13000,
  is_public: true,
  attachments: undefined,
  categories: undefined,
  tags: undefined,
  platforms: undefined,
});

const hasContentError = ref(false);
const loadingDisabled = ref(false);
const store = usePostsStore();
const router = useRouter();

const addPost = () => {
  if (postData.value.content) {
    loadingDisabled.value = true;
    store.createPost(postData.value).then((res) => {
      router.push("/my/posts");
    });
  } else {
    hasContentError.value = true;
  }
};

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
  @apply inline-flex items-center justify-center w-full p-5 text-gray-500 border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700;
}
</style>
