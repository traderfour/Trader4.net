<template>
  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-900 antialiased rounded">
    <div class="mx-auto">
      <div
        class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded overflow-hidden"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
        >
          <div class="flex-1 flex items-center space-x-2">
            <h5>
              <span class="text-gray-500">All Items:</span>
              <span class="dark:text-white">123456</span>
            </h5>
            <h5 class="text-gray-500 dark:text-gray-400 ml-1">1-100 (436)</h5>
          </div>
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
          >
            <NuxtLink :to="tableButton.link">
              <button
                class="flex items-center rtl:mr-2 ml-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <Icon name="mdi:plus" class="me-1" size="16px" />
                {{ tableButton.text }}
              </button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700"
        ></div>
        <BaseTableSkeleton v-if="loading" />

        <div v-else class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr v-if="tableData.length >= 1">
                <!-- <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th> -->
                <th
                  v-for="(headerItem, headerIndex) in tableHeaders"
                  :key="headerIndex"
                  scope="col"
                  class="p-4"
                >
                  {{ headerItem.text }}
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-if="tableData.length >= 1">
                <tr
                  v-for="(tableTr, tableTrIndex) in tableItems"
                  :key="`tr-${tableTrIndex}`"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <!-- <td class="p-4 w-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onclick="event.stopPropagation()"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td> -->

                  <td
                    class="w-4 p-4"
                    v-for="(tableTd, tableTdIndex) in Object.values(tableTr)"
                    :key="`td-${tableTdIndex}`"
                  >
                    {{ tableTd }}
                  </td>
                </tr>
              </template>

              <tr v-else class="text-center text-lg">
                No Items Found
              </tr>
            </tbody>
          </table>
        </div>
        <BaseTablePagination
          v-if="!loading"
          :currentPage="metas.current_page"
          :totalPages="10"
          @on-change-page="fetchTable($event)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { loading, getTableData, tableData, metas } = useTableStore();
const tableHeaders = ref([] as ITableHeaderItem[]);
const tableItems = ref([]);
let tableHeadersValues: string[] = [];

const props = defineProps<{
  endpoint: string;
  tableButton: { text: string; link: string };
  headerFilters: ITableHeaderItem[];
}>();

const fetchTable = async (page?: number) => {
  await getTableData(props.endpoint, page);
  tableHeaders.value.forEach((tableHeaderItem) =>
    tableHeadersValues.push(tableHeaderItem.key)
  );
  Object.keys(tableData.value[0]).forEach((element) => {
    if (props.headerFilters.length > 0) {
      props.headerFilters.forEach((filterItem: ITableHeaderItem) => {
        if (element === filterItem.key) {
          tableHeaders.value.push({
            text: filterItem.text,
            key: element,
            align: filterItem.align,
            index: filterItem.index,
          });
          // @ts-ignore
          tableHeaders.value.sort((a, b) => a.index - b.index);
        }
      });
    } else {
      tableHeaders.value.push({
        text: element,
        key: element,
      });
    }
  });
  tableData.value.forEach((tableItem: any) => {
    //@TODO: Fix performance issue
    tableHeadersValues.forEach((filterItem: ITableHeaderItem) => {
      });
    });
  }

fetchTable();
</script>
