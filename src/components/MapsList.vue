<template>
    <v-container>
        <v-responsive>
            <MapsLoading :enabled="loadingMaps" />
            <MapsComponent :maps="maps" />
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue';
import { api } from '@/services/api';

// Define reactive variables using ref
const loadingMaps = ref(true);
const maps = ref([]);

// Use onMounted lifecycle hook for API call
onMounted(async () => {
    try {
        const response = await api.getMapsList();
        maps.value = response.data; // Assign the data to the maps ref
        console.log(toRaw(maps.value))
    } catch (error) {
        console.error('Failed to fetch maps:', error);
    } finally {
        loadingMaps.value = false; // Set loadingMaps to false after fetching
    }
    console.log(maps.value);
});
</script>
