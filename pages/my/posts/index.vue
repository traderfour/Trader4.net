<template>
  <div>
    <BaseTable
      :table-button="{ link: '/my/posts/create', text: 'Add' }"
      endpoint="/my/posts"
      :header-filters="headerFilters"
    />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "logo", index: 1, key: "logo" },
  { text: "title", index: 2, key: "title" },
  { text: "slogan", index: 3, key: "slogan" },
]);
</script>
