<template>
  <nav
    class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
    aria-label="Table navigation"
  >
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
      Showing
      <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">1000</span>
    </span>
    <ul class="inline-flex items-stretch -space-x-px">
      <li>
        <a
          href="#"
          class="flex items-center justify-center h-full py-1.5 px-3 ms-0 text-gray-500 bg-white rounded-s-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Previous</span>
          <Icon name="mdi:chevron-left" class="w-5 h-5" />
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>

      <li>
        <a
          href="#"
          class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-e-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <Icon name="mdi:chevron-right" class="w-5 h-5" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>
