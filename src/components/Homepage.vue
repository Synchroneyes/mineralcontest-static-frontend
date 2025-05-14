<template>
  <v-container class="fill-height" style="position: relative; overflow: hidden;" :fluid="false" max-width="900">
    <!-- Video background -->


    <v-responsive class="align-center fill-height mx-auto" style="position: relative; z-index: 1;">
      <v-img class="mb-4" height="250" src="@/assets/mc_logo_front.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Bienvenue sur le site</div>

        <h1 class="text-h2 font-weight-bold text-white">Mineral Contest</h1>
        <div class="text-body-2 font-weight-light mb-n1">Par Synchroneyes</div>
      </div>

      <div class="py-4"></div>

      <v-row>
        <v-col cols="12">
          <v-card prepend-icon="mdi-rocket-launch-outline" class="py-4" :href="latestVersion.file_url"
            append-icon="mdi-download" rel="noopener noreferrer" rounded="lg"
            subtitle="Cliquez ici et téléchargez simplement la dernière version du plugin."
            title="Un plugin gratuit et Open-Source" variant="outlined">
            <v-overlay opacity=".2" scrim="primary-darken-1" contained model-value persistent />
          </v-card>
        </v-col>

        <!-- Remaining content as is -->
        <v-col cols="6">

          <RouterLink to="/blog" style="text-decoration: none; color: inherit;">
            <v-card append-icon="mdi-open-in-new" class="py-4" prepend-icon="mdi-post" rel="noopener noreferrer"
              rounded="lg" subtitle="Explorez la liste des articles disponible." title="Blog" variant="text">
              <v-overlay opacity=".2" scrim="warning" contained model-value persistent />
            </v-card>
          </RouterLink>
        </v-col>

        <v-col cols="6">
          <RouterLink to="/maps" style="text-decoration: none; color: inherit;">
            <v-card append-icon="mdi-open-in-new" class="py-4" prepend-icon="mdi-map" rel="noopener noreferrer"
              rounded="lg" subtitle="Explorez la liste des cartes disponible." title="Cartes" variant="text">
              <v-overlay opacity=".2" scrim="primary-darken-1" contained model-value persistent />
            </v-card>
          </RouterLink>
        </v-col>

        <v-col cols="6">
          <RouterLink to="/files" style="text-decoration: none; color: inherit;">
            <v-card append-icon="mdi-open-in-new" class="py-4" prepend-icon="mdi-widgets-outline"
              rel="noopener noreferrer" rounded="lg" subtitle="Téléchargez la version qui vous convient."
              title="Plugins" variant="text">
              <v-overlay opacity=".2" scrim="primary-darken-1" contained model-value persistent />
            </v-card>
          </RouterLink>
        </v-col>

        <v-col cols="6">
          <v-card append-icon="mdi-open-in-new" class="py-4" href="https://discord.gg/dggP3Nv"
            prepend-icon="mdi-account-group-outline" rel="noopener noreferrer" rounded="lg"
            subtitle="La communauté est active sur Discord." target="_blank" title="Communauté" variant="text">
            <v-overlay opacity=".2" scrim="warning" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="py-4" prepend-icon="mdi-chart-bar" rel="noopener noreferrer" rounded="lg"
            :subtitle=pluginDownloadCountText target="_blank" title="Stats - Plugins" variant="text">
            <v-overlay opacity=".2" scrim="warning" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="py-4" prepend-icon="mdi-chart-bar" rel="noopener noreferrer" rounded="lg"
            :subtitle=mapsDownloadCountText title="Stats - Cartes" variant="text">
            <v-overlay opacity=".2" scrim="primary-darken-1" contained model-value persistent />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue';
import { api } from '@/services/api';
import { getTotalPluginDownloadCount, getTotalMapDownloadCount } from '@/services/github';

const pluginDownloadCountText = ref('Nombre de téléchargements: 0');
const mapsDownloadCountText = ref('Nombre de téléchargements: 0');


// Define reactive variables using ref
interface FileData {
  plugins: Record<string, any>;
}

const files = ref<FileData>({ plugins: {} });
interface VersionData {
  file_url: string;
  // Add other properties if needed
}

const latestVersion = ref<VersionData>({ file_url: '' });

// Use onMounted lifecycle hook for API call
onMounted(async () => {
  try {
    const response = await api.getFilesList();
    files.value = response.data; // Assign the data to the files ref
    let plugins = files.value.plugins;
    latestVersion.value = getLatestVersion(plugins);

    const pluginCount = await getTotalPluginDownloadCount();
    const mapCount = await getTotalMapDownloadCount();

    // Format numbers with spaces as thousands separators
    const formatNumber = (num: number) => num.toLocaleString('fr-FR');

    pluginDownloadCountText.value = `Nombre de téléchargements: ${formatNumber(pluginCount)}`;
    mapsDownloadCountText.value = `Nombre de téléchargements: ${formatNumber(mapCount)}`;

  } catch (error) {
    console.error('Failed to fetch files:', error);
  } finally {
  }
});

function getLatestVersion(plugins: Record<string, any>) {
  const versions = Object.keys(plugins);

  // Sort versions by comparing each part of the version numbers
  const sortedVersions = versions.sort((a, b) => {
    const versionA = a.split('.').map(Number);
    const versionB = b.split('.').map(Number);

    for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
      const partA = versionA[i] || 0;
      const partB = versionB[i] || 0;

      if (partA !== partB) {
        return partB - partA; // Sort in descending order
      }
    }

    return 0;
  });

  const latestVersion = sortedVersions[0];
  return plugins[latestVersion];
}
</script>

<style scoped>
.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
}
</style>
