<script lang="ts" setup>
import { ImpactTag, TrackingTag } from '#components'

defineProps<{
  body: string
  header: string
  isOnTrack: boolean
}>()
</script>

<template>
  <div class="bg-white flex flex-col space-y-4 p-6 rounded-lg shadow-custom">
    <div class="flex flex-row space-x-2">
      <TrackingTag :is-on-track="isOnTrack" />
      <ImpactTag class="hidden lg:inline" />
    </div>
    <h2
      class="font-bold leading-5 text-very-dark-desaturated-blue text-sm tracking-[.4px]"
    >
      {{ header }}
    </h2>
    <p class="font-normal leading-5 min-h-10 text-dark-grayish-blue text-sm">
      {{ body }}
    </p>
    <ImpactTag class="inline lg:hidden" />
  </div>
</template>