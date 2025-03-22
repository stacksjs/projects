<script setup lang="ts">
import { inject, ref } from 'vue'

defineOptions({
  name: 'ProjectsPage',
})

const currentYear = new Date().getFullYear()
const isDarkMode = inject('isDarkMode', ref(true))

// Group data
const apps = [
  {
    name: 'Barista',
    url: 'https://github.com/stacksjs/barista',
    description: 'A lightweight macOS utility that serves up a perfectly organized menubar.',
    tags: ['macOS', 'Utility', 'UI']
  },
  {
    name: 'Pomodoro',
    url: 'https://github.com/stacksjs/pomodoro',
    description: 'Minimal, functional, yet simple Pomodoro menubar app, to help stay focussed. For Mac.',
    tags: ['macOS', 'Productivity', 'Time Management']
  }
]

const libraries = [
  { name: 'audiox', url: 'https://github.com/stacksjs/audiox', description: 'Powerful audio processing for your workflows.', tags: ['Audio', 'Processing'] },
  { name: 'buddy', url: 'https://github.com/stacksjs/buddy', description: 'The Stacks CLI.', tags: ['CLI', 'Tool'] },
  { name: 'bun-git-hooks', url: 'https://github.com/stacksjs/bun-git-hooks', description: 'A simple git hooks manager for all-sized Bun projects.', tags: ['Git', 'Hooks', 'Bun'] },
  { name: 'bunfig', url: 'https://github.com/stacksjs/bunfig', description: 'Lightweight & smart Bun configuration loader.', tags: ['Bun', 'Config'] },
  { name: 'clarity', url: 'https://github.com/stacksjs/clarity', description: 'Modern debugging & logging for browser & server.', tags: ['Debugging', 'Logging'] },
  { name: 'dtsx', url: 'https://github.com/stacksjs/dtsx', description: 'Extremely fast & configurable DTS emitter.', tags: ['TypeScript', 'DTS'] },
  { name: 'dnsx', url: 'https://github.com/stacksjs/dnsx', description: 'A command-line & library DNS client. Like dig & dog, but for TypeScript.', tags: ['DNS', 'CLI'] },
  { name: 'httx', url: 'https://github.com/stacksjs/httx', description: 'A modern, user-friendly command-line & library HTTP client "for the API era."', tags: ['HTTP', 'API', 'Client'] },
  { name: 'imgx', url: 'https://github.com/stacksjs/imgx', description: 'Make your images load faster. A better save for the web.', tags: ['Images', 'Optimization'] },
  { name: 'jpgx', url: 'https://github.com/stacksjs/jpgx', description: 'A TypeScript JPEG encoder & decoder for Bun & Node.js.', tags: ['JPEG', 'Encoder', 'Decoder'] },
  { name: 'localtunnels', url: 'https://github.com/stacksjs/localtunnels', description: 'A simple and smart tunneling alternative. Without or with self-hosting.', tags: ['Tunneling', 'Networking'] },
  { name: 'pngx', url: 'https://github.com/stacksjs/pngx', description: 'Modern PNG encoder & decoder.', tags: ['PNG', 'Encoder', 'Decoder'] },
  { name: 'post', url: 'https://github.com/stacksjs/post', description: 'The Post. A modern mail server & utilities. Ships with a CLI, library, and UI.', tags: ['Mail', 'Server', 'CLI'] },
  { name: 'qrx', url: 'https://github.com/stacksjs/qrx', description: 'QR & Bar Code generating & reading. Lightweight & powerful.', tags: ['QR', 'Barcode'] },
  { name: 'rpx', url: 'https://github.com/stacksjs/rpx', description: 'A modern, fast reverse proxy. For a better local development environment.', tags: ['Proxy', 'Networking'] },
  { name: 'tlsx', url: 'https://github.com/stacksjs/tlsx', description: 'A TLS library with automation & HTTPS by default.', tags: ['TLS', 'HTTPS', 'Security'] },
  { name: 'ts-avif', url: 'https://github.com/stacksjs/ts-avif', description: 'High quality & small file sizes.', tags: ['AVIF', 'Images'] },
  { name: 'ts-collect', url: 'https://github.com/stacksjs/ts-collect', description: 'A powerful, yet lightweight, Laravel-like Collections written for TypeScript.', tags: ['Collections', 'TypeScript'] },
  { name: 'ts-countries', url: 'https://github.com/stacksjs/ts-countries', description: 'Modern, lightweight, elegant country data management.', tags: ['Countries', 'Data'] },
  { name: 'ts-gif', url: 'https://github.com/stacksjs/ts-gif', description: 'Performant TypeScript implementation of a GIF encoder & decoder.', tags: ['GIF', 'Encoder', 'Decoder'] },
  { name: 'ts-maps', url: 'https://github.com/stacksjs/ts-maps', description: 'Modern & lightweight library for creating interactive vector maps.', tags: ['Maps', 'Vector'] },
  { name: 'ts-ndarray', url: 'https://github.com/stacksjs/ts-ndarray', description: 'Multidimensional arrays for JavaScript & TypeScript.', tags: ['Arrays', 'Data'] },
  { name: 'ts-punycode', url: 'https://github.com/stacksjs/ts-punycode', description: 'Lightweight Punycode converter. RFC 3492 & RFC 5891 supported.', tags: ['Punycode', 'Converter'] },
  { name: 'ts-security', url: 'https://github.com/stacksjs/ts-security', description: 'Performant & lightweight cryptography tooling.', tags: ['Security', 'Cryptography'] },
  { name: 'ts-spreadsheets', url: 'https://github.com/stacksjs/ts-spreadsheets', description: 'Easily generate spreadsheets, like CSVs and Excel files.', tags: ['Spreadsheets', 'CSV', 'Excel'] },
  { name: 'ts-svg', url: 'https://github.com/stacksjs/ts-svg', description: 'Powerful developer toolkit for working with SVGs.', tags: ['SVG', 'Graphics'] },
  { name: 'ts-webp', url: 'https://github.com/stacksjs/ts-webp', description: 'A modern image format for the Web.', tags: ['WebP', 'Images'] },
  { name: 'vidx', url: 'https://github.com/stacksjs/vidx', description: 'Make your videos load faster. A better save for the web.', tags: ['Video', 'Optimization'] }
]

const plugins = [
  { name: 'bun-plugin-auto-imports', url: 'https://github.com/stacksjs/bun-plugin-auto-imports', description: 'Auto Imports support for Bun.', tags: ['Bun', 'Plugin', 'Auto-imports'] },
  { name: 'bun-plugin-dotenvx', url: 'https://github.com/stacksjs/bun-plugin-dotenvx', description: 'A Bun plugin to seamlessly work with dotenvx.', tags: ['Bun', 'Plugin', 'Dotenv'] },
  { name: 'bun-plugin-dtsx', url: 'https://github.com/stacksjs/bun-plugin-dtsx', description: 'Automatically generate your TypeScript DTS files, using Bun\'s bundler.', tags: ['Bun', 'Plugin', 'TypeScript'] },
  { name: 'bun-plugin-unocss', url: 'https://github.com/stacksjs/bun-plugin-unocss', description: '"Instant On-demand Atomic CSS Engine" - UnoCSS', tags: ['Bun', 'Plugin', 'CSS'] },
  { name: 'vite-plugin-dotenvx', url: 'https://github.com/stacksjs/vite-plugin-dotenvx', description: 'A Vite plugin to seamlessly work with dotenvx.', tags: ['Vite', 'Plugin', 'Dotenv'] },
  { name: 'vite-plugin-layouts', url: 'https://github.com/stacksjs/vite-plugin-layouts', description: 'Router-based layouts for your application.', tags: ['Vite', 'Plugin', 'Layouts'] },
  { name: 'vite-plugin-local', url: 'https://github.com/stacksjs/vite-plugin-local', description: 'Pretty development URLs, and HTTPS. Zero config, zero setup.', tags: ['Vite', 'Plugin', 'HTTPS'] }
]

const templates = [
  { name: 'projects', url: 'https://github.com/stacksjs/projects', description: 'A minimal personal portfolio template.', tags: ['Template', 'Portfolio'] },
  { name: 'ts-starter', url: 'https://github.com/stacksjs/ts-starter', description: 'A rather barebones Bun & TypeScript starting point for libraries & CLIs.', tags: ['Template', 'Starter', 'TypeScript'] }
]

const featureList = [
  'Automated database-agnostic schema migrations, seeders & factories.',
  'Self-hosted and self-managed cloud infrastructure.',
  'Insightful deployment and release manager.',
  'Smart file & familiar API based routing.',
  'Reliable background job processing.',
  'Real-time event communication.',
  'Simplistic, powerful caching.',
  'Fully-typed database ORM.'
]

const activeTab = ref('overview')

useHead({
  title: 'Projects | Chris Breuer',
  meta: [
    { name: 'description', content: 'Explore the projects and software built by Chris Breuer, including the Stacks Framework.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight mb-12 font-mono">
        # Projects
      </h1>

      <!-- Tab Navigation -->
      <div class="mb-8 border-b" :class="isDarkMode ? 'border-gray-800' : 'border-gray-200'">
        <div class="flex space-x-8">
          <button
            @click="activeTab = 'overview'"
            class="py-2 px-1 font-medium transition-colors duration-200 border-b-2 font-mono"
            :class="activeTab === 'overview'
              ? (isDarkMode ? 'text-white border-blue-500' : 'text-black border-blue-600')
              : (isDarkMode ? 'text-gray-400 border-transparent hover:text-gray-300' : 'text-gray-600 border-transparent hover:text-gray-800')"
          >
            Stacks
          </button>
          <button
            @click="activeTab = 'apps'"
            class="py-2 px-1 font-medium transition-colors duration-200 border-b-2 font-mono"
            :class="activeTab === 'apps'
              ? (isDarkMode ? 'text-white border-blue-500' : 'text-black border-blue-600')
              : (isDarkMode ? 'text-gray-400 border-transparent hover:text-gray-300' : 'text-gray-600 border-transparent hover:text-gray-800')"
          >
            Apps
          </button>
          <button
            @click="activeTab = 'libraries'"
            class="py-2 px-1 font-medium transition-colors duration-200 border-b-2 font-mono"
            :class="activeTab === 'libraries'
              ? (isDarkMode ? 'text-white border-blue-500' : 'text-black border-blue-600')
              : (isDarkMode ? 'text-gray-400 border-transparent hover:text-gray-300' : 'text-gray-600 border-transparent hover:text-gray-800')"
          >
            Libraries
          </button>
          <button
            @click="activeTab = 'plugins'"
            class="py-2 px-1 font-medium transition-colors duration-200 border-b-2 font-mono"
            :class="activeTab === 'plugins'
              ? (isDarkMode ? 'text-white border-blue-500' : 'text-black border-blue-600')
              : (isDarkMode ? 'text-gray-400 border-transparent hover:text-gray-300' : 'text-gray-600 border-transparent hover:text-gray-800')"
          >
            Plugins
          </button>
          <button
            @click="activeTab = 'templates'"
            class="py-2 px-1 font-medium transition-colors duration-200 border-b-2 font-mono"
            :class="activeTab === 'templates'
              ? (isDarkMode ? 'text-white border-blue-500' : 'text-black border-blue-600')
              : (isDarkMode ? 'text-gray-400 border-transparent hover:text-gray-300' : 'text-gray-600 border-transparent hover:text-gray-800')"
          >
            Templates
          </button>
        </div>
      </div>

      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="space-y-12">
        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## About Stacks</h2>

          <p class="mb-6">
            Discover the power of Stacks, a modern web application framework developed in TypeScript. Our philosophy centers around crafting an exceptional DX, one that empowers developers to build world-class web applications, libraries, and endlessly scalable clouds.
          </p>

          <div class="mb-8 space-y-2 pl-4">
            <div
              v-for="(feature, index) in featureList"
              :key="index"
              class="flex items-baseline py-2"
            >
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">-</span>
              <span>{{ feature }}</span>
            </div>
          </div>

          <blockquote
            class="border-l-4 pl-4 italic my-6"
            :class="isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-500'"
          >
            <p>"Remove the boilerplate, focus on what matters & supercharge your development."</p>
          </blockquote>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Key Features</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="p-6 rounded-lg"
              :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'"
            >
              <h3 class="text-lg font-bold mb-3 font-mono">Type Safety</h3>
              <p>End-to-end type safety from database to frontend, ensuring robust applications with fewer runtime errors.</p>
            </div>

            <div
              class="p-6 rounded-lg"
              :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'"
            >
              <h3 class="text-lg font-bold mb-3 font-mono">Self-Hosted</h3>
              <p>Deploy to your own infrastructure with zero configuration, maintaining full control over your applications.</p>
            </div>

            <div
              class="p-6 rounded-lg"
              :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'"
            >
              <h3 class="text-lg font-bold mb-3 font-mono">Database Agnostic</h3>
              <p>Work with your preferred database through our abstracted ORM and automated migration system.</p>
            </div>

            <div
              class="p-6 rounded-lg"
              :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'"
            >
              <h3 class="text-lg font-bold mb-3 font-mono">Developer Experience</h3>
              <p>Carefully crafted tools and APIs to make development faster, more intuitive, and enjoyable.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Apps Tab -->
      <div v-if="activeTab === 'apps'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Apps</h2>

        <div
          v-for="app in apps"
          :key="app.name"
          class="border rounded-lg p-6 transition-colors duration-200"
          :class="isDarkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'"
        >
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 class="text-xl font-bold font-mono">
              <a
                :href="app.url"
                target="_blank"
                rel="noopener"
                :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'"
                class="transition-colors duration-200"
              >
                {{ app.name }}
              </a>
            </h3>

            <div class="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span
                v-for="tag in app.tags"
                :key="tag"
                class="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full"
                :class="isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <p>{{ app.description }}</p>
        </div>
      </div>

      <!-- Libraries Tab -->
      <div v-if="activeTab === 'libraries'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Libraries & CLIs</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="lib in libraries"
            :key="lib.name"
            class="border rounded-lg p-5 transition-colors duration-200"
            :class="isDarkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'"
          >
            <h3 class="text-lg font-bold mb-2 font-mono">
              <a
                :href="lib.url"
                target="_blank"
                rel="noopener"
                :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'"
                class="transition-colors duration-200"
              >
                {{ lib.name }}
              </a>
            </h3>

            <p class="mb-3 text-sm">{{ lib.description }}</p>

            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in lib.tags"
                :key="tag"
                class="inline-block text-xs font-medium px-2 py-0.5 rounded-full"
                :class="isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Plugins Tab -->
      <div v-if="activeTab === 'plugins'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Plugins</h2>

        <div class="space-y-6">
          <div
            v-for="plugin in plugins"
            :key="plugin.name"
            class="border rounded-lg p-5 transition-colors duration-200"
            :class="isDarkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'"
          >
            <h3 class="text-lg font-bold mb-2 font-mono">
              <a
                :href="plugin.url"
                target="_blank"
                rel="noopener"
                :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'"
                class="transition-colors duration-200"
              >
                {{ plugin.name }}
              </a>
            </h3>

            <p class="mb-3">{{ plugin.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in plugin.tags"
                :key="tag"
                class="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full"
                :class="isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Templates Tab -->
      <div v-if="activeTab === 'templates'" class="space-y-8">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Templates</h2>

        <div class="space-y-6">
          <div
            v-for="template in templates"
            :key="template.name"
            class="border rounded-lg p-5 transition-colors duration-200"
            :class="isDarkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'"
          >
            <h3 class="text-lg font-bold mb-2 font-mono">
              <a
                :href="template.url"
                target="_blank"
                rel="noopener"
                :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'"
                class="transition-colors duration-200"
              >
                {{ template.name }}
              </a>
            </h3>

            <p class="mb-3">{{ template.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in template.tags"
                :key="tag"
                class="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full"
                :class="isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <p class="italic text-gray-400">
          Last updated: {{ currentYear }}
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>
