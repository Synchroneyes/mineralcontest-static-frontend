<template>
    <v-container>
        <v-responsive>
            <v-data-table :items="files" :sort-by="[{ key: 'type', order: 'asc' }, { 'key': 'version', order: 'desc' }]"
                :multi-sort="true" :sort-desc="[sortDesc]" :loading="loading" class="text-white">
                <!-- Template for download_url as a button -->
                <template #item.telechargement="{ item }">
                    <v-btn :href="item.telechargement" color="primary">
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
                        <th>Nombre de téléchargements</th>
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
import { getPluginDownloadCount } from '@/services/github';

interface FileItem {
    type: string;
    version: string;
    version_serveur: string;
    taille: string;
    telechargement: string;
    nombre_telechargements: number;
}

const files = ref<FileItem[]>([]);
const loading = ref(true);
const sortDesc = ref([true]); // Define the sortDesc property

// Use onMounted lifecycle hook for API call
onMounted(async () => {
    try {
        const response = (await api.getFilesList()).data;

        // Push "map_creation" data into the files array
        for (const key in response.map_creation) {
            files.value.push({
                type: "Création de carte",
                version: response.map_creation[key].file_version,
                version_serveur: response.map_creation[key].file_server_version,
                taille: response.map_creation[key].file_size_display,
                telechargement: response.map_creation[key].file_url,
                nombre_telechargements: await getPluginDownloadCount("map_creation-" + response.map_creation[key].file_version),
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
                nombre_telechargements: await getPluginDownloadCount("plugins-" + response.plugins[key].file_version),

            });
        }

        loading.value = false;
    } catch (error) {
        console.error('Failed to fetch files:', error);
    }
});
</script>
