<template>
  <div class="relative">
    <div class="flex flex-wrap flex-col rounded px-2 py-1">
      <div>
        <div
          v-for="tag in selectedTags"
          :key="tag"
          class="inline-flex items-center px-3 py-1 m-1 bg-gray-200 rounded">
          <span class="text-sm font-semibold text-gray-700 mr-2">{{
            tag
          }}</span>
          <button @click="removeTag(tag)" class="-mt-1">
            <Icon name="mdi:close" />
          </button>
        </div>
      </div>

      <input
        v-model="inputValue"
        @keyup.enter="addTag()"
        @keydown.escape="inputValue = ''"
        class="custom-input"
        placeholder="Add tag..."
        @click="showOptions = !showOptions"
        @blur="closeDropdown = false"
        tabindex="0" />
    </div>
    <ul
      v-if="showOptions"
      class="absolute w-full z-10 py-1 mt-1 dark:bg-gray-700 bg-white rounded-sm shadow-lg">
      <li
        v-for="option in filterOptions(inputValue).filter(
          (option) => !selectedTags.includes(option[props.fieldName.key])
        )"
        :key="option[props.fieldName.key]"
        @click="selectOption(option[props.fieldName.key])"
        class="px-3 py-1 text-sm text-gray-700 hover:text-white dark:text-white cursor-pointer hover:bg-blue-500">
        {{ option[props.fieldName.label] }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  options: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  fieldName: {
    type: Object,
    required: false,
    default: () => {
      return {
        label: "name",
        key: "value",
      };
    },
  },
});
const selectedTags = ref<string[]>([]);
const inputValue = ref("");
const showOptions = ref(false);

function addTag() {
  if (inputValue.value && !selectedTags.value.includes(inputValue.value)) {
    selectedTags.value.push(inputValue.value);
    inputValue.value = "";
  }
}

function removeTag(tag: string) {
  selectedTags.value = selectedTags.value.filter((t) => t !== tag);
}

function selectOption(option: string) {
  selectedTags.value.push(option);
  showOptions.value = false;
}

function filterOptions(query: string) {
  return props.options.filter((option) =>
    option[props.fieldName.label].toLowerCase().includes(query.toLowerCase())
  );
}
watch(
  () => inputValue.value,
  (newValue) => {
    if (newValue) {
      showOptions.value = true;
    } else {
      showOptions.value = false;
    }
  }
);
</script>
<style scoped>
.custom-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
</style>
