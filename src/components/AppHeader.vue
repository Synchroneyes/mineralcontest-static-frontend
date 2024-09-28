<template>
    <v-toolbar height="40" app>
        <v-toolbar-title class="text-caption text-disabled">
            <RouterLink to="/">
                <v-btn class="text-decoration-none on-surface" href="/" rel="noopener noreferrer" target="_blank">
                    <v-icon>mdi-cube-outline</v-icon> Mineral Contest
                </v-btn>
            </RouterLink>


            <template v-for="route in routes" :key="route.title" :title="route.title">
                <RouterLink :to="route.href">
                    <v-btn rel="noopener noreferrer" target="_blank" class="text-white">
                        {{ route.title }}
                    </v-btn>
                </RouterLink>
            </template>

            <v-btn rel="noopener noreferrer" target="_blank" href="https://discord.gg/dggP3Nv" class="text-white">
                Discord
            </v-btn>

            <v-btn rel="noopener noreferrer" target="_blank" href="https://github.com/Synchroneyes/mineralcontest"
                class="text-white">
                GitHub
            </v-btn>

        </v-toolbar-title>


    </v-toolbar>
</template>

<script setup lang="ts">
const routes = [
    {
        title: 'Accueil',
        href: '/',
    },
    {
        title: 'Cartes',
        href: '/maps',
    },
    {
        title: 'Plugins',
        href: '/files',
    },
    {
        title: 'Articles',
        href: '/blog',
    },

]
</script>

<style scoped lang="sass">
    .social-link :deep(.v-icon)
      color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
      text-decoration: none
      transition: .2s ease-in-out
  
      &:hover
        color: rgba(25, 118, 210, 1)
  </style>