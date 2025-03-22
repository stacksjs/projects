<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'ColophonPage',
})

const currentYear = new Date().getFullYear()
const buildTimestamp = new Date().toISOString()
const isDarkMode = useLocalStorage('isDarkMode', true)

useHead({
  title: 'Colophon | Chris Breuer',
  meta: [
    { name: 'description', content: 'Information about the design, technology, and inspirations behind this website.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight mb-12 font-mono">
        # Colophon
      </h1>

      <div class="space-y-12">
        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## About This Site</h2>

          <p class="mb-4">
            This website serves as my digital garden—a place where I share my work, thoughts, and interests. The design prioritizes simplicity, readability, and accessibility.
          </p>

          <p class="mb-4">
            My goal was to create a minimalist site that loads quickly and focuses on content. I've drawn inspiration from the markdown format for its straightforward approach to presenting information.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Technology Stack</h2>

          <p class="mb-6">
            This site is built with the following technologies:
          </p>

          <ul class="list-none space-y-3 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <a
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200"
                >
                  Vue.js
                </a> - A progressive JavaScript framework
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <a
                  href="https://nuxt.com/"
                  target="_blank"
                  rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200"
                >
                  Nuxt
                </a> - The intuitive Vue framework
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200"
                >
                  Tailwind CSS
                </a> - A utility-first CSS framework
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200"
                >
                  TypeScript
                </a> - JavaScript with syntax for types
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <a
                  href="https://pages.cloudflare.com/"
                  target="_blank"
                  rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200"
                >
                  Cloudflare Pages
                </a> - For hosting and deployment
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Design Philosophy</h2>

          <p class="mb-4">
            The design of this site embraces a "less is more" philosophy. I've intentionally kept the visual elements minimal to highlight the content while providing a comfortable reading experience.
          </p>

          <p class="mb-4">
            Key aspects of the design include:
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Dark theme by default with light mode toggle for accessibility</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Sidebar navigation for straightforward access to key sections</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Monospace fonts for headings to enhance the markdown-inspired aesthetic</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Clean typography with ample whitespace for improved readability</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Minimal use of colors and visual elements to reduce distractions</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Typography</h2>

          <p class="mb-4">
            The site uses a carefully selected set of fonts:
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">Headings:</strong> Monospace fonts to emphasize the markdown aesthetic
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">Body text:</strong> System font stack for optimal performance and native feel
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Inspiration</h2>

          <p class="mb-4">
            This site draws inspiration from various sources:
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Markdown documentation and text editors</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Minimalist personal websites in the dev community</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Terminal interfaces and code editors</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Digital gardens and personal knowledge management systems</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Open Source</h2>

          <p class="mb-6">
            The code for this website is open source and available on
            <a
              href="https://github.com/chrisbbreuer/website"
              target="_blank"
              rel="noopener"
              :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
              class="transition-colors duration-200"
            >
              GitHub
            </a>.
            Feel free to explore, fork, or contribute.
          </p>

          <p>
            If you have suggestions for improvements or notice any issues, please open an issue or pull request.
          </p>
        </div>
      </div>

      <div class="mt-12">
        <p class="italic" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
          Last built at {{ buildTimestamp }}
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>
