<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <form @submit.prevent="addPost">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              v-model="postData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="slogan"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slogan
            </label>
            <input
              v-model="postData.slogan"
              type="text"
              name="slogan"
              id="slogan"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Slogan"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="exceprt"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Exceprt
            </label>
            <input
              type="text"
              name="exceprt"
              id="exceprt"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Exceprt"
            />
          </div>
          <div>
            <label
              for="public"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Public</label
            >
            <select
              v-model="postData.is_public"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected>Select category</option>
              <option :value="false">Private</option>
              <option :value="true">Public</option>
            </select>
          </div>
          <div>
            <label
              for="item-weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Item Weight (kg)</label
            >
            <input
              type="number"
              name="item-weight"
              id="item-weight"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="12"
              required
            />
          </div>
          <!-- Logo & cover -->
          <ImageUploader
            lable-idle="Logo here"
            @on-uploaded-successfully="
              ($event) => {
                postData.logo_id = $event.results.uuid;
              }
            "
          />
          <ImageUploader lable-idle="Cover here" />
          <div class="sm:col-span-2">
            <ClientOnly>
              <Editor v-model="postData.content" />
            </ClientOnly>
          </div>
        </div>
        <button
          type="submit"
          class="items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800"
        >
          Add Post +
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";

const postData = ref({
  title: "",
  slogan: "",
  logo_id: "",
  cover_id: "",
  excerpt: "",
  content: "",
  comments: 0,
  type: 0,
  is_public: "",
  attachments: "",
  categories: "",
  tags: "",
  platforms: "",
});

const addPost = () => {
  usePostsStore()
    .createPost(postData.value)
    .then((res) => {
      console.log(res);
    });
};
</script>

<style>
.tox-notifications-container {
  display: none;
}
</style>
