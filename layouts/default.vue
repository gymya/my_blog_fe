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
  const searchInput = useTemplateRef('searchInput');

  // Detect operating system - use ref to avoid hydration mismatch
  const isWindows = ref(false);

  // Only detect on client side to avoid hydration issues
  onMounted(() => {
    isWindows.value = navigator.userAgent.includes('Windows');
  });

  const shortcutKey = computed(() => (isWindows.value ? 'Ctrl+K' : '⌘K'));

  // Use Nuxt's defineShortcuts for keyboard shortcuts
  defineShortcuts({
    meta_k: () => {
      searchInput.value?.inputRef?.focus();
    },
  });
</script>

<template>
  <div>
    <UNavigationMenu :items="items" class="w-full">
      <template #search-trailing>
        <UInput ref="searchInput" placeholder="Search...">
          <template #trailing>
            <UKbd>{{ shortcutKey }}</UKbd>
          </template>
        </UInput>
      </template>
    </UNavigationMenu>
    <slot />
  </div>
</template>
