<template>
  <div>
    <BaseTable
      :table-button="{ link: '/my/posts/create', text: 'Add' }"
      endpoint="/my/posts"
    />
  </div>
</template>

<script setup lang="ts"></script>
