<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new event
      </h2>
      <VForm
        id="trading_account_create"
        class="form"
        novalidate
        @submit="submitForm()"
        :validation-schema="form"
      >
        <div
          class="gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 sm:mb-2"
        >
          <div class="mb-4 space-y-4 xl:col-span-2">
            <div class="flex flex-row gap-4">
              <div class="md:basis-1/2">
                <label for="title" class="custom-input-label">Title</label>
                <Field
                  type="text"
                  name="title"
                  class="custom-input"
                  v-model="model.title"
                />
                <div class="text-red-500 text-sm p-1">
                  <ErrorMessage name="title" />
                </div>
              </div>
              <div class="md:basis-1/2">
                <label for="title" class="custom-input-label">Type</label>
                <Field
                  as="select"
                  name="type"
                  class="custom-input"
                  v-model="model.type"
                >
                  <option
                    :value="item.value"
                    v-for="(item, index) in types"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <ErrorMessage name="type" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label for="slogan" class="custom-input-label">Slogan</label>
              <Field
                type="text"
                name="slogan"
                class="custom-input"
                v-model="model.slogan"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="slogan" />
              </div>
            </div>
            <div>
              <label for="description" class="custom-input-label"
                >Introduction</label
              >
              <Field
                type="text"
                name="introduction"
                class="custom-input"
                v-model="model.introduction"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="introduction" />
              </div>
            </div>
            <div>
              <label for="description" class="custom-input-label"
                >Description</label
              >
              <Field
                type="text"
                name="description"
                class="custom-input"
                v-model="model.description"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="description" />
              </div>
            </div>
          </div>
          <div class="mb-4 space-y-4">
            <div>
              <label for="add-guests" class="custom-input-label"
                >Add guests</label
              >
              <div class="relative">
                <input
                  type="text"
                  id="add-guests"
                  class="block p-3 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded border outline-none border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Add guest email"
                  required
                />
                <button
                  type="button"
                  class="text-white absolute inline-flex items-center right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-xs px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    class="w-4 h-4 -ml-0.5 mr-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Add
                </button>
              </div>
            </div>
            <div class="items-center md:flex md:space-x-4">
              <div class="flex flex-shrink-0 mb-4 -space-x-4 md:mb-0">
                <img
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  alt="Helene Engels"
                />
                <img
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                  alt="Robert Brown"
                />
                <img
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green"
                />
                <a
                  class="flex justify-center items-center w-8 h-8 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                  >+9</a
                >
              </div>
              <button
                type="button"
                class="inline-flex items-center py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 -ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add member
              </button>
              <button
                type="button"
                class="inline-flex items-center py-2 px-3 ml-2 text-xs font-medium text-gray-900 bg-white rounded border border-gray-200 sm:ml-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 -ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Find a time
              </button>
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Guest Permissions</label
              >
              <div class="space-y-3">
                <div class="flex items-center mr-4">
                  <input
                    id="guest-permission-1-checkbox"
                    type="checkbox"
                    value=""
                    name="guest-permission-checkbox"
                    class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="guest-permission-1-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Modify event</label
                  >
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="guest-permission-2-checkbox"
                    type="checkbox"
                    value=""
                    name="guest-permission-checkbox"
                    class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="guest-permission-2-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Invite others</label
                  >
                </div>
                <div class="flex items-center mr-4">
                  <input
                    checked
                    id="guest-permission-3-checkbox"
                    type="checkbox"
                    value=""
                    name="guest-permission-checkbox"
                    class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="guest-permission-3-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >See guest list</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="text-white justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add new event
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
interface TradingAcoounts {
  broker_id: string;
  platform_id: string;
  server_id: string;
  identity: string;
  secret?: string;
  read_only_secret?: string;
}

const { fetchBrokers, brokers, fetchPlatforms } = useMarketStore();

const model = reactive<TradingAcoounts>({} as TradingAcoounts);
// Validations Account Details
const form = Yup.object().shape({
  broker_id: Yup.string().required().label("broker_id"),
  platform_id: Yup.string().required().label("platform_id"),
  identity: Yup.string().required().label("identity"),
  //@ts-ignore
  secret: Yup.string()
    .label("Secret")
    .when("model.read_only_secret", {
      is: (val: any) => !val,
      then: Yup.string().required("Secret Or ReadOnly Secret Required!"),
    }),
  //@ts-ignore
  read_only_secret: Yup.string()
    .label("model.read_only_secret")
    .when("secret", {
      is: (val: any) => !val,
      then: Yup.string().required("Secret Or ReadOnly Secret Required!"),
    }),
  server_id: Yup.string().required().label("server"),
});

//yu add method check if antoher  field is empty required this field
Yup.addMethod(Yup.string, "requiredIf", function (ref: any, message: string) {
  return this.test("requiredIf", message, function (value: any) {
    const otherValue = this.resolve(ref);
    return !otherValue || !!value;
  });
});

onMounted(() => {
  nextTick(() => {
    fetchBrokers();
    fetchPlatforms();
  });
});

const submitForm = async () => {
  console.log("submitForm", model);
};
</script>

<style scoped>
.custom-input-label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
.custom-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
</style>
