<template>
  <div class="relative">
    <div
      class="flex flex-wrap flex-col rounded-t-lg border dark:border-gray-700">
      <div>
        <div
          v-for="tag in selectedTags"
          :key="tag[props.fieldName.key]"
          class="inline-flex items-center px-2 py-1 m-1 bg-gray-200 rounded">
          <span class="text-xs font-semibold text-gray-700 me-2">{{
            tag[props.fieldName.label]
          }}</span>
          <button @click="removeTag(tag)" class="-mt-1">
            <Icon
              class="dark:hover:bg-gray-300 hover:bg-gray-300 text-gray-700 rounded"
              name="mdi:close" />
          </button>
        </div>
      </div>
      <div class="relative">
        <input
          v-model="inputValue"
          @keyup.enter="addTag()"
          @keydown.escape="inputValue = ''"
          class="custom-input"
          placeholder="Add tag..."
          @click="showOptions = !showOptions" />
        <Icon
          @click="showOptions = !showOptions"
          :class="showOptions ? 'rotate-180' : 'rotate-0'"
          class="absolute dark:text-white text-gray-900 text-lg right-2 top-3"
          name="mdi:chevron-down" />
      </div>
    </div>
    <ul
      v-if="showOptions"
      class="absolute w-full max-h-40 rounded-b-sm overflow-y-auto z-10 py-1 dark:bg-gray-700 bg-white shadow-lg">
      <li
        v-for="option in filterOptions(inputValue).filter(
          (option) => !selectedTags.includes(option[props.fieldName.key])
        )"
        :key="option[props.fieldName.key]"
        @click="selectOption(option)"
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
  modelValue: {
    type: Array,
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
  // selectedTags.value = selectedTags.value.filter((t) => t !== tag);
  selectedTags.value.splice(selectedTags.value.indexOf(tag), 1);
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

const emit = defineEmits(["update:modelValue"]);
watch(selectedTags.value, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});

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
  @apply bg-white  text-gray-900 text-sm rounded-t-lg outline-none  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500;
}
</style>
