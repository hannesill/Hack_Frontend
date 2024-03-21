<template>
  <div>
    <div class="px-4 sm:px-0">
      <button @click="goBack" class="mb-4 inline-flex items-center py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        ← Go Back
      </button>
    </div>
    <div class="px-4 pb-4 sm:px-0 flex items-center">
      <!-- Image container -->
      <div class="flex-shrink-0 mr-4">
        <img class="h-16 w-16 rounded-full" :src="startup.logo" alt="Profile picture of the founder">
      </div>
      <!-- Text container -->
      <div>
        <h3 class="text-base font-semibold leading-7 text-white">{{ startup.startupName }}</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-400">{{ startup.linkedin }}</p>
      </div>
    </div>
    <div class="mt-6A border-t border-white/10">
      <dl class="divide-y divide-white/10">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Description</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ startup.description}}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Phase</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ startup.phase }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Industry</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ startup.industry }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Founders</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
            <ul class="list-disc pl-4">
              <li v-for="cofounder in startup.cofounders" :key="cofounder">{{ cofounder }}</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import { PaperClipIcon } from '@heroicons/vue/20/solid'

const router = useRouter();

const goBack = () => {
  router.go(-1); // This navigates one step back in the browser history
};

const route = useRoute();
const startupName = route.params.startupName;

// Or, if you're using props:
defineProps(['startupName']);


const startups = [
  {
    startupName: 'To the moon GmbH',
    cofounders: ['Lindsay Walton', 'Tom Cook'],
    description: 'Building robots that fly to the moon with the power of JavaScript.',
    phase: 'Seed',
    industry: 'Robotics',
    status: 'Active',
    linkedin: 'https://www.linkedin.com/in/lindsaywalton/',
    logo:
      'resources/icons8-moon-phase-96.png',
  },
  // More people...
]

const startup = computed(() => startups.find(startup => startup.startupName === route.params.startupName));
</script>
