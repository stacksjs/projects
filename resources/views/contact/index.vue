<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'ContactPage',
})

const currentYear = new Date().getFullYear()
const buildTimestamp = new Date().toISOString()
const isDarkMode = useLocalStorage('isDarkMode', true)

useHead({
  title: 'Contact | Chris Breuer',
  meta: [
    { name: 'description', content: 'Get in touch with Chris Breuer for collaborations, speaking opportunities, or just to say hello.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300"
    :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight mb-12 font-mono">
        # Contact
      </h1>

      <div class="space-y-12">
        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Get in Touch</h2>

          <p class="mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out through any of the following methods:
          </p>

          <ul class="list-none space-y-4 mb-8 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">Email:</strong>
                <a href="mailto:hello@chris-breuer.me"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200">
                  hello@chris-breuer.me
                </a>
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">GitHub:</strong>
                <a href="https://github.com/chrisbbreuer" target="_blank" rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200">
                  @chrisbbreuer
                </a>
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/chrisbbreuer/" target="_blank" rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200">
                  Chris Breuer
                </a>
              </span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>
                <strong class="font-medium">Bluesky:</strong>
                <a href="https://bsky.app/profile/chris-breuer.me" target="_blank" rel="noopener"
                  :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'"
                  class="transition-colors duration-200">
                  @chris-breuer.me
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Work Inquiries</h2>

          <p class="mb-6">
            Currently, I'm focused on developing the Stacks Framework and might have limited availability for new
            projects. However, I'm always interested in hearing about innovative ideas and potential collaborations.
          </p>

          <p class="mb-6">
            If you have a project that you think would be a good fit for my expertise in:
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Web application development</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>TypeScript/JavaScript frameworks</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Serverless architecture</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Developer tooling</span>
            </li>
          </ul>

          <p>
            Please reach out with details about your project, timeline, and goals. I'll get back to you as soon as
            possible to discuss how we might work together.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Speaking & Workshops</h2>

          <p class="mb-6">
            I occasionally speak at conferences and conduct workshops on topics related to modern web development,
            TypeScript, and building developer-friendly tools. If you'd like me to speak at your event or conduct a
            workshop for your team, please reach out with details.
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
