<script lang="ts" setup>
const props = defineProps<{
  isOnTrack?: boolean
}>()

const $class = computed(
  () =>
    `${
      props.isOnTrack ? 'bg-green-pill-background' : 'bg-orange-pill-background'
    } font-normal p-2 rounded-sm text-center text-very-dark-orange text-xs tracking-[.4px] uppercase`,
)

const text = computed(() => (props.isOnTrack ? 'on track' : 'off track'))
</script>

<template>
  <span
    :class="$class"
    v-text="text"
  />
</template>