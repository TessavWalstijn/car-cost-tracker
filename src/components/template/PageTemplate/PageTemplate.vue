<script lang="ts" setup>
import { defineProps } from 'vue'
import { NavMenu } from '@/components/NavMenu/'
// import NavMenu from '@/components/NavMenu/NavMenu.vue'

defineProps<{ title: string }>()
</script>

<template>
  <h1>{{ title }}</h1>
  <NavMenu />
</template>
