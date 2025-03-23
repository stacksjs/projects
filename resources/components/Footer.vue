<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'Footer',
})

const currentYear = new Date().getFullYear()
const buildTimestamp = new Date().toISOString()
const isDarkMode = useLocalStorage('isDarkMode', true)
</script>

<template>
  <footer class="py-8 border-t transition-colors duration-300"
          :class="isDarkMode ? 'bg-[#1a1a1a] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'">
    <div class="ml-64 px-12 max-w-4xl">
      <div class="flex justify-between items-center">
        <p>
          &copy; {{ currentYear }} Chris Breuer. All rights reserved.
        </p>
        <p class="italic text-sm">
          Last built at {{ buildTimestamp }}
        </p>
      </div>
    </div>
  </footer>
</template>
