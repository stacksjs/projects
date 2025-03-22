<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

defineOptions({
  name: 'AboutPage',
})

const currentYear = new Date().getFullYear()
const isDarkMode = useLocalStorage('isDarkMode', true)

useHead({
  title: 'About | Chris Breuer',
  meta: [
    { name: 'description', content: 'Learn more about Chris Breuer, a passionate software engineer and creator of the Stacks Framework.' },
  ],
})
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDarkMode ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-800'">
    <Header />

    <main class="ml-64 px-12 py-16 max-w-4xl">
      <div class="flex items-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight font-mono mr-3">
          # About
        </h1>
        <img src="/apple-touch-icon.png" alt="Chris Breuer" width="40" height="40" class="rounded-full" />
      </div>

      <div class="space-y-12">
        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Background</h2>

          <p class="mb-4 leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            Hi, I'm Chris Breuer, a software engineer with a passion for building elegant, user-centric applications. With over a decade of experience in the tech industry, I've dedicated my career to crafting intuitive digital experiences and robust backend systems.
          </p>

          <p class="mb-4 leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            My journey in software development began with a curiosity about how things work, which evolved into a deep interest in creating tools that solve real-world problems. Today, I focus on developing the Stacks Framework, a powerful TypeScript framework designed to help developers build scalable applications more efficiently.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Professional Journey</h2>

          <p class="mb-4 leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            Throughout my career, I've had the opportunity to work with a diverse range of technologies and organizations. My experience spans from frontend development with modern frameworks like Vue and React to backend architecture with Node.js, Laravel, Go, and cloud infrastructure.
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Led engineering teams at startups and established companies</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Architected cloud-native applications on major cloud platforms</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Developed enterprise-scale distributed systems</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Created developer tooling to improve workflow efficiency</span>
            </li>
          </ul>

          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            This diverse background has given me a holistic understanding of the software development lifecycle and the challenges faced by development teams, which informs my approach to building developer tools and frameworks.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Technical Skills</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="text-lg font-bold mb-3 font-mono">Languages</h3>
              <ul class="list-none space-y-2 pl-4">
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>TypeScript / JavaScript</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Go</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Python</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Rust</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-3 font-mono">Frontend</h3>
              <ul class="list-none space-y-2 pl-4">
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Vue.js</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>React</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>TailwindCSS</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>UnoCSS</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-3 font-mono">Backend</h3>
              <ul class="list-none space-y-2 pl-4">
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Node.js</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Express</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>GraphQL</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>REST API Design</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold mb-3 font-mono">Cloud & DevOps</h3>
              <ul class="list-none space-y-2 pl-4">
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>AWS</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Docker & Kubernetes</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>CI/CD (GitHub Actions, Jenkins)</span>
                </li>
                <li class="flex items-baseline">
                  <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
                  <span>Infrastructure as Code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Beyond Coding</h2>

          <p class="mb-4 leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            When I'm not immersed in code, I enjoy a variety of activities that help me maintain balance and perspective:
          </p>

          <ul class="list-none space-y-3 mb-6 pl-4">
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Exploring the outdoors through hiking and photography</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Reading books on technology, design, and philosophy</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Contributing to open-source projects</span>
            </li>
            <li class="flex items-baseline">
              <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'" class="mr-2">•</span>
              <span>Learning about emerging technologies and industry trends</span>
            </li>
          </ul>

          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            These interests not only provide a refreshing break from the screen but also often inspire new approaches to problem-solving in my professional work.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 font-mono">## Connect</h2>

          <p class="mb-4 leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            I'm always interested in connecting with fellow developers, discussing new projects, or exploring collaboration opportunities. Feel free to reach out through any of the channels on my <a :href="'/contact'" :class="isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'" class="transition-colors duration-200">contact page</a>.
          </p>

          <p class="leading-relaxed" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
            Whether you're curious about the Stacks Framework, have questions about my work, or just want to say hello, I look forward to hearing from you!
          </p>
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
