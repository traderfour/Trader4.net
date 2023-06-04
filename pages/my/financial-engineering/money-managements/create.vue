<template>
  <section>
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Money Management Plan
      </h2>
      <VForm :validation-schema="moneySchema" @submit="add">
        <div class="grid gap-4 sm:grid-cols-9 sm:gap-6 items-start">
          <div class="col-span-full lg:col-span-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <VField
              v-model="moneyData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="What`s on your mind?" />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Position Size
            </label>
            <VField
              v-model="moneyData.position_size"
              type="text"
              name="position_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size" />
            <VErrorMessage class="text-red-700 text-sm" name="position_size" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Position Size Mode
            </label>
            <input
              v-model="moneyData.position_size_mode"
              type="number"
              name="position_size_mode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size mode" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Position Size Calculation
            </label>
            <input
              v-model="moneyData.position_size_calculation"
              type="number"
              name="position_size_calculation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="position size calculation" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Maximum Size
            </label>
            <input
              v-model="moneyData.maximum_size"
              type="number"
              name="maximum_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="maximum size" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Minimum Size
            </label>
            <input
              v-model="moneyData.minimum_size"
              type="number"
              name="minimum_size"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="minimum size" />
          </div>
          <div class="col-span-full lg:col-span-3">
            <label
              for="position_size"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Status
            </label>
            <select
              v-model="moneyData.status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder=" select status">
              <option>17000</option>
            </select>
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Trading Accounts
            </label>
            <SharedMultiSelectTagging
              v-model="moneyData.trading_account"
              :placeholder="'Select trading accounts'" />
          </div>
          <div class="w-full lg:col-span-3 col-span-full">
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Instrument
            </label>
            <SharedMultiSelectTagging
              v-model="moneyData.instrument"
              :placeholder="'Select instrument'" />
          </div>
        </div>
        <button
          type="submit"
          class="items-center px-8 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled">
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading" />
          <span v-else>Publish</span>
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();

import Editor from "@tinymce/tinymce-vue";
import * as Yup from "yup";
import { useRiskStore } from "~/store/risk-managements";

// "results": {
//         "uuid": "994613d4-9511-4e9c-90c8-9e544a7d8546",
//         "title": "test",
//         "position_size": "1",
//         "position_size_mode": 1,
//         "position_size_calculation": 2,
//         "maximum_size": 2,
//         "minimum_size": 2,
//         "status": 17000,
//         "trading_account": {
//             "uuid": "98cbc8e7-b48c-44ca-a1fc-03ed5f01b5c0",
//             "name": "test name 2",
//             "status": 15001
//         },
//         "instrument": {
//             "uuid": "91gdc2a2-4251-4619-9bb6-3905d22ber10",
//             "name": "wwwww",
//             "status": 12700
//         }
//     },

const moneyData = ref({
  title: undefined,
  position_size: undefined,
  position_size_mode: undefined,
  position_size_calculation: undefined,
  maximum_size: undefined,
  minimum_size: undefined,
  status: 17000,
  trading_account: {},
  instrument: {},
});
const hasContentError = ref(false);
const loadingDisabled = ref(false);
const store = useRiskStore();
const add = () => {
  if (moneyData.value) {
    loadingDisabled.value = true;
    store
      .createRiskManagement(moneyData.value)
      .then((res: any) => {
        if (res.data.succeed && res.data.results.uuid) {
          //@ts-ignore
          $toast.success("Created Successfully", {
            position: "top-right",
          });
        } else {
          loadingDisabled.value = false;
          hasContentError.value = true;
        }
      })
      .catch((err) => {
        //@ts-ignore
        $toast.error(err.message.toString(), {
          position: "top-right",
        });
        loadingDisabled.value = false;
      });
  } else {
    loadingDisabled.value = false;
    hasContentError.value = true;
  }
};

// Form Validation
const moneySchema = Yup.object({
  title: Yup.string().required("Title is Required"),
  position_size: Yup.string().required("Position Size is Required"),
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
