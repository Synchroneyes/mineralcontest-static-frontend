<template>
  <v-row v-for="(row, rowIndex) in chunkedMaps" :key="rowIndex">
    <v-col v-for="(map, colIndex) in row" :key="colIndex" cols="4">
      <v-card>
        <!-- Skeleton loader shown while the image is loading -->
        <v-skeleton-loader v-if="loadingMap[`${rowIndex}-${colIndex}`]" type="image" height="200px" />
        <v-img v-else :src="map.map_thumbnail" height="200px" @load="onImageLoad(rowIndex, colIndex)"
          @error="onImageError(rowIndex, colIndex)"></v-img>

        <v-card-title>{{ map.map_name }}</v-card-title>

        <!-- Clickable map description with hover pointer -->
        <v-card-subtitle class="hover-pointer" @click="openDialog(map.map_description)">
          {{ map.map_description }}
        </v-card-subtitle>

        <v-card-text>Taille: {{ map.map_size_display }} <br /> Nombre de téléchargements: {{ map.download_count
        }}</v-card-text>

        <v-card-text></v-card-text>

        <!-- Centering the button inside v-card-actions -->
        <v-card-actions class="justify-center">
          <v-btn :href="map.map_url" target="_blank" color="primary">
            <v-icon>mdi-download</v-icon>Télécharger
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Dialog for showing the full description -->
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title>Description de la carte</v-card-title>
      <v-card-text>{{ dialogDescription }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="dialog = false">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted } from 'vue';


// Define props to receive the maps array
interface Map {
  map_thumbnail: string;
  map_name: string;
  map_description: string;
  map_size_display: string;
  map_url: string;
  download_count: number
}

import { PropType } from 'vue';

const props = defineProps({
  maps: {
    type: Array as PropType<Map[]>,
    default: () => [],
  },
});

// Sorting maps by map_name and chunking them into rows of 3
const chunkedMaps = computed(() => {
  const sortedMaps = [...props.maps].sort((a, b) =>
    a.map_name.localeCompare(b.map_name)
  );
  const chunkSize = 3;
  const result = [];
  for (let i = 0; i < sortedMaps.length; i += chunkSize) {
    result.push(sortedMaps.slice(i, i + chunkSize));
  }
  return result;
});

// Dialog state for displaying full description
const dialog = ref(false);
const dialogDescription = ref("");

// Function to open the dialog with the full description
const openDialog = (description: string) => {
  dialogDescription.value = description;
  dialog.value = true;
};

// Image loading states for each map (using map index as key)
const loadingMap = ref<{ [key: string]: boolean }>({});

// Function to handle when the image has finished loading
const onImageLoad = (rowIndex: number, colIndex: number) => {
  loadingMap.value[`${rowIndex}-${colIndex}`] = false;
};

// Function to handle image load errors
const onImageError = (rowIndex: number, colIndex: number) => {
  loadingMap.value[`${rowIndex}-${colIndex}`] = false;
  console.error(`Image failed to load at row ${rowIndex}, col ${colIndex}`);
};

// Initialize all maps with loading skeleton active
onMounted(() => {
  chunkedMaps.value.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      loadingMap.value[`${rowIndex}-${colIndex}`] = true;
    });
  });
});
</script>

<style scoped>
/* CSS to change pointer on hover */
.hover-pointer {
  cursor: pointer;
}
</style>