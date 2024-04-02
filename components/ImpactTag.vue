<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: 'medium impact',
  },
)
</script>

<template>
  <span
    class="bg-light-grayish-blue font-normal p-2 rounded-sm text-center text-very-dark-orange text-xs tracking-[.4px] uppercase"
    v-text="props.text"
  />
</template>