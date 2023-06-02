<template>
  <div>
    <BaseTableSkeleton v-if="loading" />
    <BaseTable v-else />
  </div>
</template>

<script setup lang="ts">
const { loading, posts, getMyPosts } = usePostsStore();
getMyPosts();
</script>
