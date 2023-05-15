<script setup lang="ts">
defineProps<{
  text: any;
}>();
</script>
<template>
  <div>
    <p class="bg-red-600">
      {{ text }}
    </p>
  </div>
</template>
