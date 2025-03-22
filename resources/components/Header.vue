<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Header',
})

const route = useRoute()
const isDarkMode = useLocalStorage('isDarkMode', true)

const currentPage = computed(() => {
  const path = route.path
  if (path === '/') return 'about'
  return path.slice(1) // Remove leading slash
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  applyDarkMode()
}

function applyDarkMode() {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    document.body.style.backgroundColor = '#1a1a1a'
    document.body.style.color = '#e5e7eb'
  } else {
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#1f2937'
  }
}

onMounted(() => {
  applyDarkMode()
})
</script>

<template>
  <aside :class="[
    'fixed left-0 top-0 bottom-0 w-64 py-8 px-8 flex flex-col border-r transition-colors duration-300',
    isDarkMode ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'
  ]">
    <!-- Signature at top -->
    <div class="mb-12">
      <img src="/svgs/signature.svg" alt="Chris Breuer signature" width="150" height="40"
        :class="{'filter invert': isDarkMode}" class="transition-all duration-300" />
    </div>

    <!-- Navigation centered vertically in the remaining space -->
    <nav class="flex-grow flex flex-col justify-center font-mono">
      <ul class="space-y-6">
        <li>
          <a href="/" :class="[
              'transition-colors duration-200',
              currentPage === 'about' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            About
          </a>
        </li>
        <li>
          <a href="/posts" :class="[
              'transition-colors duration-200',
              currentPage === 'posts' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            Posts
          </a>
        </li>
        <li>
          <a href="/projects" :class="[
              'transition-colors duration-200',
              currentPage === 'projects' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            Projects
          </a>
        </li>
        <li>
          <a href="/uses" :class="[
              'transition-colors duration-200',
              currentPage === 'uses' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            Uses
          </a>
        </li>
        <li>
          <a href="/contact" :class="[
              'transition-colors duration-200',
              currentPage === 'contact' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            Contact
          </a>
        </li>
        <li>
          <a href="/colophon" :class="[
              'transition-colors duration-200',
              currentPage === 'colophon' ? (
                isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'
              ) : (
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              )
            ]">
            Colophon
          </a>
        </li>
      </ul>

      <div class="mt-12 flex flex-col space-y-3">
        <a href="https://github.com/chrisbbreuer" target="_blank" rel="noopener" :class="[
            'transition-colors duration-200',
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          ]">
          GitHub
          <i class="i-hugeicons-link-square-01 h-3 w-3"></i>
        </a>
        <a href="https://www.linkedin.com/in/chrisbbreuer/" target="_blank" rel="noopener" :class="[
            'transition-colors duration-200',
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          ]">
          LinkedIn
          <i class="i-hugeicons-link-square-01 h-3 w-3"></i>
        </a>
        <a href="https://bsky.app/profile/chris-breuer.me" target="_blank" rel="noopener" :class="[
            'transition-colors duration-200',
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          ]">
          Bluesky
          <i class="i-hugeicons-link-square-01 h-3 w-3"></i>
        </a>
      </div>
    </nav>

    <!-- Light/Dark mode toggle at bottom -->
    <div class="mt-auto pt-6">
      <button @click="toggleDarkMode" class="flex items-center"
        :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'">
        <template v-if="isDarkMode">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Light Mode
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark Mode
        </template>
      </button>
    </div>
  </aside>
</template>
