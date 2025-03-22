<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'PostsPage',
})

const currentYear = new Date().getFullYear()
const isDarkMode = useLocalStorage('isDarkMode', true)
const currentPage = ref(1)
const postsPerPage = 3

const posts = [
  {
    id: '1',
    title: 'Introducing the Stacks Framework',
    date: 'January 15, 2024',
    excerpt: 'A deep dive into the next-generation web development framework designed for modern applications.',
    tags: ['Development', 'Framework', 'Web'],
    url: '/posts/introducing-stacks-framework',
  },
  {
    id: '2',
    title: 'The Future of Serverless Development',
    date: 'December 10, 2023',
    excerpt: 'Exploring how serverless architectures are transforming the way we build and deploy applications.',
    tags: ['Serverless', 'Cloud', 'Architecture'],
    url: '/posts/future-of-serverless',
  },
  {
    id: '3',
    title: 'Building Scalable Systems with Distributed Computing',
    date: 'November 5, 2023',
    excerpt: 'How to leverage distributed computing to create highly scalable and resilient systems.',
    tags: ['Distributed Systems', 'Scalability', 'Engineering'],
    url: '/posts/scalable-systems-distributed-computing',
  },
  {
    id: '4',
    title: 'Modern Developer Tooling in 2023',
    date: 'October 20, 2023',
    excerpt: 'An overview of the essential tools and workflows that improve developer productivity.',
    tags: ['Tooling', 'Productivity', 'Development'],
    url: '/posts/modern-developer-tooling',
  },
  {
    id: '5',
    title: 'Type Safety Across the Stack',
    date: 'September 15, 2023',
    excerpt: 'How to achieve end-to-end type safety from your database to your frontend.',
    tags: ['TypeScript', 'Type Safety', 'Development'],
    url: '/posts/type-safety-across-stack',
  },
  {
    id: '6',
    title: 'Building CLI Tools with TypeScript',
    date: 'August 22, 2023',
    excerpt: 'A guide to creating command-line interfaces using TypeScript for better developer experiences.',
    tags: ['CLI', 'TypeScript', 'Development'],
    url: '/posts/building-cli-tools-typescript',
  },
  {
    id: '7',
    title: 'The Art of API Design',
    date: 'July 10, 2023',
    excerpt: 'Principles and practices for designing clean, intuitive, and developer-friendly APIs.',
    tags: ['API', 'Design', 'Development'],
    url: '/posts/art-of-api-design',
  },
]

// Get all unique tags
const allTags = computed(() => {
  const tagSet = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
})

// Filter posts by selected tag
const selectedTag = ref(null)
const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts
  return posts.filter(post => post.tags.includes(selectedTag.value))
})

// Handle pagination
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

function selectTag(tag) {
  if (selectedTag.value === tag) {
    selectedTag.value = null
  } else {
    selectedTag.value = tag
  }
  currentPage.value = 1 // Reset to first page when changing tags
}

function setPage(page) {
  currentPage.value = page
}

useHead({
  title: 'Posts | Chris Breuer',
  meta: [
    { name: 'description', content: 'Thoughts, articles, and guides on development, technology, and more.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight mb-12 font-mono">
        # Posts
      </h1>

      <div class="mb-12">
        <p class="text-lg mb-8">
          A collection of my thoughts, articles, and guides on development, technology, and more.
        </p>
      </div>

      <!-- Tag Cloud -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Tags</h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in allTags"
            :key="tag"
            @click="selectTag(tag)"
            class="px-3 py-1 text-sm rounded-full transition-colors duration-200"
            :class="[
              selectedTag === tag
                ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                : (isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
            ]"
          >
            {{ tag }} <span v-if="selectedTag === tag" class="ml-1">×</span>
          </button>
        </div>
      </div>

      <!-- Posts List -->
      <div class="space-y-12">
        <div v-if="paginatedPosts.length === 0" class="py-10 text-center">
          <p>No posts found with the selected tag.</p>
        </div>

        <div v-for="post in paginatedPosts" :key="post.id" :class="isDarkMode ? 'border-b border-gray-800 pb-10' : 'border-b border-gray-200 pb-10'">
          <h2 class="text-2xl font-bold mb-2 font-mono">
            <a :href="post.url" :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'" class="transition-colors duration-200">
              {{ post.title }}
            </a>
          </h2>
          <div class="text-gray-400 mb-4">{{ post.date }}</div>
          <p class="mb-4">{{ post.excerpt }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in post.tags"
              :key="index"
              class="inline-block text-xs rounded-full px-3 py-1"
              :class="isDarkMode ? 'text-gray-300 bg-gray-800' : 'text-gray-700 bg-gray-200'"
              @click="selectTag(tag)"
              style="cursor: pointer"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-between items-center" v-if="totalPages > 1">
        <button
          @click="setPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded transition-colors duration-200"
          :class="[
            currentPage === 1
              ? (isDarkMode ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
              : (isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
          ]"
        >
          Previous
        </button>

        <div class="flex space-x-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="setPage(page)"
            class="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
            :class="[
              currentPage === page
                ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                : (isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
            ]"
          >
            {{ page }}
          </button>
        </div>

        <button
          @click="setPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded transition-colors duration-200"
          :class="[
            currentPage === totalPages
              ? (isDarkMode ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
              : (isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
          ]"
        >
          Next
        </button>
      </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6 font-mono">## Topics I Write About</h2>

        <ul class="list-none space-y-3 mb-8">
          <li class="flex items-baseline">
            <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
            <span>Web development frameworks and technologies</span>
          </li>
          <li class="flex items-baseline">
            <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
            <span>Serverless architectures and cloud computing</span>
          </li>
          <li class="flex items-baseline">
            <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
            <span>Developer tooling and productivity</span>
          </li>
          <li class="flex items-baseline">
            <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
            <span>System design and architecture</span>
          </li>
          <li class="flex items-baseline">
            <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" class="mr-2">•</span>
            <span>Open-source software and contributions</span>
          </li>
        </ul>
      </div>
    </main>

    <Footer />
  </div>
</template>