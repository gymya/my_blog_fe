<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const items = ref<NavigationMenuItem[][]>([
    [
      {
        label: 'Benny Blog',
        icon: 'i-lucide-book-open',
        to: '/',
      },
      {
        label: 'Frontend',
        to: '/frontend',
        children: [
          {
            label: 'Vue',
            icon: 'i-simple-icons-vuedotjs',
            to: '/frontend/vue',
          },
          {
            label: 'Nuxt',
            icon: 'i-simple-icons-nuxt',
            to: '/frontend/nuxt',
          },
          {
            label: 'JavaScript',
            icon: 'i-simple-icons-javascript',
            to: '/frontend/JavaScript',
          },
        ],
      },
      {
        label: 'Backend',
        to: '/backend',
        children: [
          {
            label: 'C#',
            icon: 'i-simple-icons-sharp',
            to: '/backend',
          },
          {
            label: 'Node.js',
            icon: 'i-simple-icons-nodedotjs',
            to: '/backend',
          },
          {
            label: 'Python',
            icon: 'i-simple-icons-python',
            to: '/backend',
          },
        ],
      },
      {
        label: 'Life',
        type: 'label',
        to: '/backend',
      },
    ],
    [
      {
        label: '',
        slot: 'search' as const,
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/gymya',
        target: '_blank',
      },
    ],
  ]);
</script>

<template>
  <div>
    <UNavigationMenu :items="items" class="w-full">
      <template #search-trailing>
        <UInput placeholder="Search..." />
      </template>
    </UNavigationMenu>
    <slot />
  </div>
</template>
