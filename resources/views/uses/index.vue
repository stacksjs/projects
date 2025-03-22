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
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
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
              <span>16" MacBook Pro M3 Max with 64GB of RAM</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Dual 27" Studio Displays</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Keychron K8 Pro Mechanical Keyboard with Brown switches</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Logitech MX Master 3S Mouse</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>CalDigit TS4 Thunderbolt Dock</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Blue Yeti X Microphone</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>AirPods Pro 2</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Fully Jarvis Standing Desk</span>
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
              <span>Arc Browser as my primary browser</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Firefox Developer Edition for web development testing</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>1Password for password management</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Ublock Origin for ad blocking</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>JSON Formatter for API responses</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Development</h2>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Visual Studio Code as primary editor</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Cursor for AI-assisted coding</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Warp as my terminal</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Oh My Zsh with custom configuration</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Git for version control</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>GitHub for project management and collaboration</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Docker for containerization</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Postman for API testing</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Bun as my JavaScript runtime</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>TypeScript for type-safe JavaScript</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>MongoDB and PostgreSQL for databases</span>
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
              <span>Notion for note-taking and documentation</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Raycast as my app launcher and productivity tool</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Slack and Discord for communication</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Spotify for music while coding</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Rectangle for window management</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Bartender to keep my menu bar organized</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Remote Work</h2>

          <ul class="list-none space-y-3 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Zoom for video conferences</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Calendly for scheduling meetings</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Miro for collaborative whiteboarding</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Google Workspace for email and document collaboration</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12">
        <p class="italic" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
          Last updated: {{ currentYear }}
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>