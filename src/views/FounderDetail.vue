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
        <img class="h-16 w-16 rounded-full" :src="founder.image" alt="Profile picture of the founder">
      </div>
      <!-- Text container -->
      <div>
        <h3 class="text-base font-semibold leading-7 text-white">{{ founder.name }}</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-400">{{ founder.email }}</p>
      </div>
    </div>
    <div class="mt-6A border-t border-white/10">
      <dl class="divide-y divide-white/10">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Professional Experience</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ founder.professional_experience_job}} @{{ founder.professional_experience_company }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Education</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ founder.education_degree }} @{{ founder.education_school }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Role</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{{ founder.role }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">About</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Startup</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
            <router-link :to="{ name: 'startupDetail', params: { startupName: founder.startupName } }">{{ founder.startupName }}</router-link>
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


const people = [
  {
    name: 'Lindsay Walton',
    professional_experience_job: 'Front-end Developer',
    professional_experience_company: 'Google',
    education_degree: 'Computer Science (B.Sc.)',
    education_school: 'TUM',
    email: 'lindsay.walton@example.com',
    role: 'CEO',
    startupName: 'To the moon GmbH',
    linkedin: 'https://www.linkedin.com/in/lindsaywalton/',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

const founder = computed(() => people.find(person => person.email === route.params.email));
</script>
