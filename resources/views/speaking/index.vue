<script setup lang="ts">
defineOptions({
  name: 'SpeakingPage',
})

useHead({
  title: 'Speaking | Chris Breuer',
  meta: [
    { name: 'description', content: 'Speaking engagements and presentations by Chris Breuer on web development and technology.' },
  ],
})

// Mock speaking engagements data - in a real app, this would come from an API or data store
const events = [
  {
    id: 1,
    title: 'Modern Vue.js Development in 2024',
    event: 'VueConf 2024',
    date: 'June 12, 2024',
    location: 'Berlin, Germany',
    description: 'A talk about the latest features in Vue.js and best practices for modern application development.',
    slides: 'https://speakerdeck.com/username/modern-vue-js-development',
    video: 'https://youtube.com/watch?v=example1'
  },
  {
    id: 2,
    title: 'Building Type-safe Full-stack Applications',
    event: 'TypeScript Meetup',
    date: 'April 18, 2024',
    location: 'Online',
    description: 'A presentation on how to leverage TypeScript to create robust full-stack applications with end-to-end type safety.',
    slides: 'https://speakerdeck.com/username/type-safe-applications',
    video: 'https://youtube.com/watch?v=example2'
  },
  {
    id: 3,
    title: 'From Zero to Production: A Developer\'s Journey',
    event: 'DevFest 2023',
    date: 'November 5, 2023',
    location: 'San Francisco, CA',
    description: 'My personal journey of taking a project from concept to production, including challenges faced and lessons learned.',
    slides: 'https://speakerdeck.com/username/zero-to-production',
    video: 'https://youtube.com/watch?v=example3'
  },
  {
    id: 4,
    title: 'The Art of Developer Experience',
    event: 'Frontend Conference 2023',
    date: 'September 20, 2023',
    location: 'Amsterdam, Netherlands',
    description: 'Exploring how to create better developer experiences through tooling, documentation, and community.',
    slides: 'https://speakerdeck.com/username/developer-experience',
  }
]

// Mock upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Performance Optimization for Web Applications',
    event: 'Web Performance Summit',
    date: 'August 15, 2024',
    location: 'New York, NY',
    description: 'A workshop on identifying and fixing performance bottlenecks in modern web applications.',
    registration: 'https://example.com/register'
  }
]
</script>

<template>
  <Header />

  <main class="container mx-auto px-4 py-16 prose prose-gray dark:prose-invert max-w-3xl">
    <h1 class="text-4xl font-bold tracking-tight">Speaking</h1>

    <p class="text-xl my-6">
      I occasionally speak at conferences and meetups about web development,
      technology, and my experiences as a developer.
    </p>

    <div v-if="upcomingEvents.length > 0" class="my-12">
      <h2 class="text-2xl font-semibold mb-6">Upcoming Events</h2>

      <div v-for="event in upcomingEvents" :key="event.id"
        class="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-medium mb-2">{{ event.title }}</h3>

        <div class="mb-4">
          <div class="text-gray-700 dark:text-gray-300">
            <strong>Event:</strong> {{ event.event }}
          </div>
          <div class="text-gray-700 dark:text-gray-300">
            <strong>Date:</strong> {{ event.date }}
          </div>
          <div class="text-gray-700 dark:text-gray-300">
            <strong>Location:</strong> {{ event.location }}
          </div>
        </div>

        <p class="mb-4">{{ event.description }}</p>

        <a v-if="event.registration" :href="event.registration" target="_blank" rel="noopener"
          class="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 no-underline">
          Register
        </a>
      </div>
    </div>

    <div class="my-12">
      <h2 class="text-2xl font-semibold mb-6">Past Events</h2>

      <div v-for="event in events" :key="event.id" class="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-medium mb-2">{{ event.title }}</h3>

        <div class="mb-4">
          <div class="text-gray-600 dark:text-gray-400">
            {{ event.event }} • {{ event.date }} • {{ event.location }}
          </div>
        </div>

        <p class="mb-4">{{ event.description }}</p>

        <div class="flex gap-4">
          <a v-if="event.slides" :href="event.slides" target="_blank" rel="noopener"
            class="text-blue-600 dark:text-blue-400">
            Slides
          </a>
          <a v-if="event.video" :href="event.video" target="_blank" rel="noopener"
            class="text-blue-600 dark:text-blue-400">
            Video
          </a>
        </div>
      </div>
    </div>

    <div class="my-12">
      <h2 class="text-2xl font-semibold mb-4">Interested in having me speak?</h2>
      <p>
        If you'd like me to speak at your event, please reach out via
        <a href="mailto:speaking@example.com" class="text-blue-600 dark:text-blue-400">email</a>.
        I usually talk about web development, developer experience, and technology.
      </p>
    </div>
  </main>

  <Footer />
</template>