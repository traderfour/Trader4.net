<template>
  <section class="bg-gray-50 dark:bg-gray-900 antialiased rounded">
    <div class="mx-auto">
      <div
        class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded overflow-hidden">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="flex-1 flex items-center space-x-2">
            <h5>
              <span class="dark:text-white font-bold text-xl">{{
                props.title
              }}</span>
            </h5>
            <h5 class="text-gray-500 dark:text-gray-400 ml-1 rtl:mr-1">
              ({{ metas.last_page * metas.per_page }})
            </h5>
          </div>
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <NuxtLink :to="props.endpoint + tableButton.link">
              <button
                class="flex items-center rtl:mr-2 ml-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Icon name="mdi:plus" class="me-1" size="16px" />
                {{ tableButton.text }}
              </button>
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4"></div>

        <BaseTableSkeleton v-if="loading" />

        <div v-else class="overflow-x-auto">
          <div
            :class="showModal == true ? 'block' : 'hidden'"
            id="popup-modal"
            tabindex="-1"
            class="absolute z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]">
            <div class="relative max-w-sm sm:max-w-md mx-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  @click="hide"
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3
                    class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    :disabled="loadingDisabled"
                    @click="removeItem()"
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    <Icon
                      v-if="loadingDisabled"
                      class="animate-spin"
                      size="1.2rem"
                      name="mdi:loading" />
                    <span v-else>Yes, I'm sure</span>
                  </button>
                  <button
                    @click="hide"
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr v-if="tableData.length >= 1">
                <th
                  v-for="item in props.headerFilters"
                  :key="item.key"
                  scope="col"
                  class="p-4">
                  {{ item.text }}
                </th>
                <th scope="col" class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="tableData.length >= 1">
                <tr
                  v-for="(tableTr, tableTrIndex) in tableItems"
                  :key="`tr-${tableTrIndex}`"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="w-4 p-4" v-for="key in Object.keys(tableTr)">
                    <img
                      v-if="key == 'logo'"
                      :src="`${
                        tableTr[key] !== null && tableTr[key] != ''
                          ? tableTr[key]
                          : 'https://s.trader4.net/defaults/posts/logo.png'
                      }`"
                      class="w-10 h-10 rounded-full" />
                    <span v-else-if="key === 'uuid'"></span>
                    <span v-else>{{ tableTr[key] }}</span>
                  </td>

                  <td class="w-4 p-4">
                    <div class="flex w-4 items-center space-x-3">
                      <button
                        @click="show(tableTr.uuid)"
                        class="bg-red-500 hover:bg-red-700 px-4 py-2 text-white rounded flex items-center">
                        <Icon name="mdi:bin" size="16px" class="me-1" />
                        Delete
                      </button>
                      <NuxtLink
                        :to="`${props.endpoint}${tableTr.uuid}`"
                        class="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded flex items-center">
                        <Icon name="mdi:pencil" size="16px" class="me-1" />
                        Edit
                      </NuxtLink>
                    </div>
                  </td>
                </tr>
              </template>

              <tr v-else class="text-center text-lg">
                No data found
              </tr>
            </tbody>
          </table>
        </div>
        <BaseTablePagination
          :currentPage="metas.current_page"
          :totalPages="metas.last_page"
          :perPage="metas.per_page"
          @on-change-page="fetchTable($event)" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { loading, getTableData, tableData, metas, deleteItem } = useTableStore();
const tableItems = ref<any>([]);
const { $toast } = useNuxtApp();
const loadingDisabled = ref(false);
const data = ref();
const showModal = ref(false);
const props = defineProps<{
  endpoint: string;
  tableButton: { text: string; link: string };
  headerFilters: ITableHeaderItem[];
  title: string;
}>();

props.headerFilters.push({ key: "uuid" });

const show = (uuid?: string) => {
  showModal.value = true;
  data.value = uuid;
};
const hide = () => {
  showModal.value = false;
};

const removeItem = () => {
  loadingDisabled.value = true;
  deleteItem(props.endpoint, data.value)
    .then((res: any) => {
      if (res.data.succeed) {
        //@ts-ignore
        $toast.success("deleted Successfully", {
          position: "top-right",
        });
        fetchTable();
        showModal.value = false;
      } else {
        loadingDisabled.value = false;
      }
      loadingDisabled.value = false;
    })
    .catch((err) => {
      $toast.error(err.data.message.toString(), {
        position: "top-right",
      });
      loadingDisabled.value = false;
    });
};

const fetchTable = async (page?: number) => {
  tableData.value = [];
  tableItems.value = [];
  await getTableData(props.endpoint, page);
  tableData.value.forEach((tableItem: any) => {
    //@TODO: Fix performance issue
    let dataItems: string[] = [];
    props.headerFilters.forEach((filterItem: ITableHeaderItem | any) => {
      if (
        Object.keys(tableItem).includes(filterItem.key) &&
        tableItem[filterItem.key] !== null
      ) {
        dataItems[filterItem.key] = tableItem[filterItem.key];
      } else {
        dataItems[filterItem.key] = "";
      }
    });
    tableItems.value.push(dataItems);
  });
};

fetchTable();
</script>
