<template>
  <BaseTableSkeleton v-if="loading" />
  <!-- Start block -->
  <section v-else class="bg-gray-50 dark:bg-gray-900 antialiased rounded">
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
            <NuxtLink to="/my/posts/create">
              <button
                id="createProductButton"
                data-modal-toggle="createProductModal"
                class="flex items-center rtl:mr-2 ml-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add
                <Icon name="mdi:plus" class="ms-1" size="16px" />
              </button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700"
        ></div>
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr v-if="tableData.length > 1">
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" class="p-4">Product</th>
                <th scope="col" class="p-4">Product</th>
                <th scope="col" class="p-4">Product</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-if="tableData.length > 1"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td class="p-4 w-4">
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
                </td>
                <th
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="flex items-center me-3">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      class="h-8 w-auto me-3"
                    />
                    Apple iMac 27&#34;
                  </div>
                </th>
              </tr>

              <tr v-else class="text-center">
                No Items Found
              </tr>
            </tbody>
          </table>
        </div>
        <BaseTablePagination />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { loading, getTableData, tableData, metas } = useTableStore();

const props = defineProps<{
  endpoint: string;
}>();

const fetchTable = async (page?: number) => {
  await getTableData(props.endpoint, page);
  console.log(tableData.value);
  console.log(metas.value);
};

fetchTable();
</script>
