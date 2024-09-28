<template>
    <v-container>
        <v-responsive>
            <v-data-table :items="files" :sort-by="[{ key: 'type', order: 'asc' }, { 'key': 'version', order: 'desc' }]"
                :multi-sort="true" :sort-desc="[desc]" :loading="loading">
                <!-- Template for download_url as a button -->
                <template #item.telechargement="{ item }">
                    <v-btn :href="item.telechargement" color="primary" text>
                        Télécharger
                    </v-btn>
                </template>

                <template #headers="props">
                    <tr>
                        <th>Type</th>
                        <th>Version</th>
                        <th>Version Serveur</th>
                        <th>Taille</th>
                        <th>Lien</th> <!-- Replacing 'download_url' with 'Lien' -->
                    </tr>
                </template>
                <!-- Custom headers to change 'download_url' to 'Lien' -->

            </v-data-table>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue';
import { api } from '@/services/api';

const files = ref([]);
const loading = ref(true);

// Use onMounted lifecycle hook for API call
onMounted(async () => {
    try {
        const response = (await api.getFilesList()).data;
        console.log(response.plugins);

        // Push "map_creation" data into the files array
        for (const key in response.map_creation) {
            files.value.push({
                type: "Création de carte",
                version: response.map_creation[key].file_version,
                version_serveur: response.map_creation[key].file_server_version,
                taille: response.map_creation[key].file_size_display,
                telechargement: response.map_creation[key].file_url,
            });
        }

        // Push "plugins" data into the files array
        for (const key in response.plugins) {
            files.value.push({
                type: "Plugin",
                version: response.plugins[key].file_version,
                version_serveur: response.plugins[key].file_server_version,
                taille: response.plugins[key].file_size_display,
                telechargement: response.plugins[key].file_url,
            });
        }

        loading.value = false;
        // Output raw data for debugging
        console.log(toRaw(files.value));
    } catch (error) {
        console.error('Failed to fetch files:', error);
    }
});
</script>
