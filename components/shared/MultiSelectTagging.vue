<template>
  <div class="relative">
    <div tabindex="1" class="flex flex-wrap flex-col border rounded p-2">
      <div>
        <div
          v-for="(tag, idx) in selectedTags"
          :key="idx"
          class="inline-flex items-center px-3 py-1 m-1 bg-gray-200 rounded"
        >
          <span class="text-sm font-semibold text-gray-700 mr-2">{{
            tag
          }}</span>
          <button @click="removeTag(tag as string)" class="-mt-1">
            <Icon name="mdi:close" />
          </button>
        </div>
      </div>

      <input
        v-model="inputValue"
        @keyup.enter="addTag()"
        @keydown.escape="inputValue = ''"
        class="flex-grow my-2 w-full h-8 px-2 text-sm text-gray-700 dark:text-white dark:placeholder:text-gray-100 placeholder-gray-500 bg-transparent border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent"
        placeholder="Add tag..."
        @focus="showOptions = true"
        @blur="closeOptions"
      />
    </div>
    <ul
      v-if="showOptions"
      class="absolute z-10 py-1 mt-1 bg-white rounded-md shadow-lg px-5"
    >
      <li
        v-for="option in filterOptions(inputValue).filter(
          (option) => !selectedTags.includes(option[props.fieldName.key])
        )"
        :key="option[props.fieldName.key]"
        @click="selectOption(option[props.fieldName.key])"
        class="px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
      >
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

function closeOptions() {
  setTimeout(() => {
    showOptions.value = false;
  }, 100);
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
