<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new trading account
      </h2>
      <VForm
        id="trading_account_create"
        class="form"
        novalidate
        @submit="submitForm()"
        :validation-schema="form"
      >
        <div
          class="gap-4 "
        >
          <div class="mb-4 ">
            <div class="gap-4 my-3">
              <label for="identity" class="custom-input-label">Identity</label>
              <Field
                type="text"
                name="identity"
                class="custom-input"
                v-model="model.identity"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="identity" />
              </div>
            </div>
            <div class="flex flex-row gap-4 my-3">
              <div class="md:basis-1/3">
                <label for="broker_id" class="custom-input-label"
                  >Broker
                </label>
                <Field
                  as="select"
                  name="broker_id"
                  class="custom-input"
                  v-model="model.broker_id"
                >
                  <option
                    :value="item.uuid"
                    v-for="(item, index) in brokers"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <ErrorMessage name="broker_id" />
                  </div>
                </div>
              </div>
              <div class="md:basis-1/3">
                <label for="platform_id" class="custom-input-label"
                  >Platform ID</label
                >
                <Field
                  as="select"
                  name="platform_id"
                  class="custom-input"
                  v-model="model.platform_id"
                >
                  <option
                    :value="item.uuid"
                    v-for="(item, index) in brokers"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <ErrorMessage name="platform_id" />
                  </div>
                </div>
              </div>
              <div class="md:basis-1/3">
                <label for="server_id" class="custom-input-label"
                  >Server ID</label
                >
                <Field
                  as="select"
                  name="server_id"
                  class="custom-input"
                  v-model="model.server_id"
                >
                  <option
                    :value="item.uuid"
                    v-for="(item, index) in brokers"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <div class="text-red-500 text-sm p-1">
                  <div class="fv-help-block">
                    <ErrorMessage name="server_id" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 my-3"> 
            <div class="basis-1/2">
              <label for="secret" class="custom-input-label">Secret</label>
              <Field
                type="text"
                name="secret"
                class="custom-input"
                v-model="model.secret"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="secret" />
              </div>
            </div>
            <div class="basis-1/2">
              <label for="read_only_secret" class="custom-input-label"
                >Read Only Secret</label
              >
              <Field
                type="text"
                name="read_only_secret"
                class="custom-input"
                v-model="model.read_only_secret"
              />
              <div class="text-red-500 text-sm p-1">
                <ErrorMessage name="read_only_secret" />
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

const { fetchBrokers, brokers, fetchPlatforms, platforms } = useMarketStore();

const model = reactive<TradingAcoounts>({
  broker_id: "",
  platform_id: "",
  server_id: "",
  identity: "",
  secret: "",
  read_only_secret: "",
} as TradingAcoounts);
// Validations Account Details
const form = Yup.object().shape(
  {
    broker_id: Yup.string().required().label("Broker ID"),
    platform_id: Yup.string().required().label("Platform ID"),
    identity: Yup.string().required().label("Identity"),
    secret: Yup.string()
      .label("Secret")
      .when("read_only_secret", {
        is: (val: any) => !val,
        then: () =>
          Yup.string().required("Secret Or Read Only Secret Required!"),
      }),
    read_only_secret: Yup.string()
      .label("Read Only Secret")
      .when("secret", {
        is: (val: any) => !val,
        then: () =>
          Yup.string().required("Secret Or Read Only Secret Required!"),
      }),
    server_id: Yup.string().required().label("Server"),
  },
  ["secret", "read_only_secret"] as any
);

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
