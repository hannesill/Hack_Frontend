<template>
  <div>
    <h2>{{ founder.name }}</h2>
    <p>{{ founder.email }}</p>
    <img :src="founder.image" alt="Profile picture">
    <!-- Add more founder details here -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];

const founder = computed(() => people.find(person => person.email === route.params.email));
</script>
