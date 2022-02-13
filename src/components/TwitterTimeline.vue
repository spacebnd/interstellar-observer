<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  channelName: string
  theme: 'dark' | 'light'
  width?: string
  height?: string
}>()
</script>

<template>
  <a
    class="twitter-timeline"
    :data-height="height"
    :data-width="width"
    :data-theme="theme"
    :href="`https://twitter.com/${channelName}`"
    >Tweets by {{ channelName }}</a
  >
</template>
