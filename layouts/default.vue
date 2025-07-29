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
        slot: 'searchButton' as const,
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/gymya',
        target: '_blank',
      },
    ],
  ]);

  const open = ref(false);

  // Use computed property with import.meta.client to avoid hydration mismatch
  const shortcutKey = computed(() => {
    // Return default value during SSR, detect on client
    if (!import.meta.client) {
      return '⌘K'; // Default to Mac style during SSR
    }
    return navigator.userAgent.includes('Windows') ? 'Ctrl+K' : '⌘K';
  });

  // Use Nuxt's defineShortcuts for keyboard shortcuts
  defineShortcuts({
    meta_k: {
      handler: () => {
        open.value = !open.value;
      },
      usingInput: true, // Allow shortcut to work when input is focused
    },
  });
</script>

<template>
  <div>
    <UModal
      v-model:open="open"
      title="Search Articles"
      description="Search articles by title or content"
    >
      <template #content>
        <UCommandPalette placeholder="Search articles..." class="h-80" />
      </template>
    </UModal>

    <UNavigationMenu :items="items" class="w-full">
      <template #searchButton>
        <ClientOnly>
          <UButton color="neutral" variant="outline" @click="open = true">
            <UIcon name="i-lucide-search" class="size-5" />
            <span class="opacity-50 mr-2">Search...</span>
            {{ shortcutKey }}
          </UButton>
        </ClientOnly>
      </template>
    </UNavigationMenu>
    <slot />
  </div>
</template>
