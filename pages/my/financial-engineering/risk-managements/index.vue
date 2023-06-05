<template>
  <div>
    <BaseTable
      :table-button="{
        link: '/create',
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
  { text: "max_risk", index: 1, key: "max_risk" },
  { text: "max_daily_risk", index: 3, key: "max_daily_risk" },
  { text: "risk_per_chart", index: 4, key: "risk_per_chart" },
]);
</script>
