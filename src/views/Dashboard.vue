<script setup lang="ts">
import { useTwitterNewsStore } from '@/stores/twitter-news.store'

const twitterNewsStore = useTwitterNewsStore()
twitterNewsStore.loadTwitterWidgets()
</script>

<template>Dashboard</template>
