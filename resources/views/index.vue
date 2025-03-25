<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'HomePage',
})

const currentYear = new Date().getFullYear()
const isDarkMode = useLocalStorage('isDarkMode', true)

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Chris Breuer | Developer',
  meta: [
    { name: 'description', content: 'Personal portfolio of Chris Breuer, a developer passionate about developer tooling, dogs, outdoors, and technology.' },
    {
      name: 'theme-color',
      content: '#1a1a1a',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <div class="flex items-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight font-mono mr-3">
          # Hello
        </h1>
        <img src="/apple-touch-icon.png" alt="Chris Breuer" width="40" height="40" class="rounded-full" />
      </div>

      <div class="space-y-12">
        <div class="mb-12 text-lg leading-relaxed">
          <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            I'm Chris Breuer and I am passionately obsessed over developer tooling, sports, and the outdoors.
          </p>

          <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            Ever since I was young, I've loved to explore, learn, and create—especially while using tech.
            When I was 12-years-old, I wrote my first SaaS app, and to my surprise, it turned out quite successful
            and brought in several hundreds of dollars in monthly revenue. Ever since then, I have been building.
          </p>

          <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            I spent the last decade-and-some working on personal & private projects, ranging from small apps to large enterprise
            services—which caused my obsession with building scalable & serverless systems. In fact, I dove deep into
            “data storage & transfer” and “distributed & decentralized compute” techniques these past years.
            One of the core reasons I started working on Stacks.
          </p>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-6 font-mono">## Recent Posts</h2>
          <ul class="space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
              <a href="/posts/building-with-vue-and-typescript" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'">Building with Vue and TypeScript</a>
              <span :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'" class="ml-2 text-sm">May 15, {{ currentYear }}</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
              <a href="/posts/my-development-setup" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'">My Development Setup</a>
              <span :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'" class="ml-2 text-sm">April 28, {{ currentYear }}</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
              <a href="/posts/adventures-with-my-dogs" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'">Adventures with My Dogs</a>
              <span :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'" class="ml-2 text-sm">April 10, {{ currentYear }}</span>
            </li>
          </ul>
          <a href="/posts" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'">See all posts →</a>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-6 font-mono">## Projects</h2>
          <p class="mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            I'm currently focused on Stacks, a type-safe full-stack framework for Web Artisans.
            Rapid development, for the best full-stack teams, and individuals.
          </p>
          <a href="/projects" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'">View all projects →</a>
        </div>
      </div>

      <div class="mt-12">
      </div>
    </main>

    <Footer />
  </div>
</template>
