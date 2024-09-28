<template>
    <v-toolbar height="40" app v-if="!isMobile">
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

    <v-toolbar height="40" app v-if="isMobile">
        <v-toolbar-title class="text-caption text-disabled">
            <RouterLink to="/">
                <v-btn class="text-decoration-none on-surface" href="/" rel="noopener noreferrer" target="_blank">
                    <v-icon>mdi-cube-outline</v-icon> Mineral Contest
                </v-btn>
            </RouterLink>
        </v-toolbar-title>

        <!-- Mobile Dropdown Menu -->
        <v-menu activator="parent" offset-y bottom origin="top right">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="route in routes" :key="route.title" @click="$router.push(route.href)">
                    <v-list-item-title>{{ route.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDiscord">
                    <v-list-item-title>Discord</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openGitHub">
                    <v-list-item-title>GitHub</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const isMobile = computed(() => {
    return unref(display.mobile)
})

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
function openDiscord() {
    window.open('https://discord.gg/dggP3Nv', '_blank');
}

function openGitHub() {
    window.open('https://github.com/Synchroneyes/mineralcontest', '_blank');
}
</script>

<style scoped lang="sass">
    .social-link :deep(.v-icon)
      color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
      text-decoration: none
      transition: .2s ease-in-out
  
      &:hover
        color: rgba(25, 118, 210, 1)
  </style>