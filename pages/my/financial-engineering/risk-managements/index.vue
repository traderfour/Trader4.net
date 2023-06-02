<template>
  <div>
    <BaseTable
      :table-button="{ link: '/my/financial-engineering/risk-managements/create', text: 'Add' }"
      endpoint="/my/financial-engineering/risk-managements"
      :header-filters="headerFilters"
      title="Risk Managements"
    />
  </div>
</template>

<script setup lang="ts">
const headerFilters = ref([
  { text: "logo", index: 1, key: "logo" },
  { text: "title", index: 2, key: "title" },
  { text: "slogan", index: 3, key: "slogan" },
  { text: "type", index: 5, key: "type" },
  { text: "status", index: 6, key: "status" },
  { text: "Published At", index: 7, key: "published_at" },
  { text: "actions", index: 9, key: "actions" },
]);
</script>
