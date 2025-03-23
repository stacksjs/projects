<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'UsesPage',
})

const currentYear = new Date().getFullYear()
const isDarkMode = useLocalStorage('isDarkMode', true)

useHead({
  title: 'Uses | Chris Breuer',
  meta: [
    { name: 'description', content: 'Hardware, software and tools that Chris Breuer uses on a daily basis.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300"
    :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight mb-12 font-mono">
        # Uses
      </h1>

      <div class="space-y-12">
        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Hardware</h2>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>14” MacBook Pro M3</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Apple Studio Display</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Logitech MX Keys for Mac</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Logitech MX Master 3S Mouse</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Sony WH-1000XM5 headphones</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>AirPods Pro 2</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>FlexiSpot Comhar Pro Standing Desk Q8</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Herman Miller Embody Chair</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Web Browsing</h2>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Arc Browser - as my Chrome alternative</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Zen Browser - as my Firefox alternative</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>1Password for password management</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>uBlock Origin for ad blocking</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Development</h2>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>VS Code & Cursor & Zed & Webstorm</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Ghostty Terminal</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Oh My Zsh</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>GitHub for project management and collaboration</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>TypeScript for type-safe JavaScript</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Design & Productivity</h2>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Figma for UI design and prototyping</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Apple Notes</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Raycast</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Slack and Discord</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Barista to keep my menu bar organized</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12">
      </div>
    </main>

    <Footer />
  </div>
</template>
