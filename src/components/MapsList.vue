<template>
    <v-container>
        <v-responsive>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Maps</v-card-title>
                        <v-card-subtitle class="display-2">Instructions</v-card-subtitle>
                        <v-card-text class="display-2">Pour installer une carte, il suffit de télécharger la carte
                            souhaité. Une
                            fois effectué, il faut extraire l'archive dans le dossier plugins/MineralContest/worlds/ de
                            votre serveur. Vous devriez alors voir un nouveau dossier, ayant comme prefix <b>mc_</b> et
                            en redémarrant votre serveur, vous selectionner votre carte dans le menu de vote!
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

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
