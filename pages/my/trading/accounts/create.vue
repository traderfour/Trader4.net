<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new trading account
      </h2>
      <section class="md:w-2/3">

        <TradingAccountForm @submit="submitFrom" />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">

const submitFrom = (data: any) => {
  console.log(data)
}

</script>

<style scoped></style>
