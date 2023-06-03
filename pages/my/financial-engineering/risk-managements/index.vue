<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/my/financial-engineering/risk-managements/create',
        text: 'Add',
      }"
      endpoint="/my/financial-engineering/risk-managements"
      :header-filters="headerFilters"
      title="Risk Managements" />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "title", index: 1, key: "title" },
  { text: "id", index: 1, key: "uuid" },
]);
</script>
