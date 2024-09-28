<template>
    <div v-if="enabled">
        <v-row v-for="row in 4" :key="row">
            <v-col v-for="col in 3" :key="col" cols="4">
                <v-skeleton-loader type="image, list-item-two-line" height="300" :loading="true" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    enabled: {
        type: Boolean,
        default: false,
    },
});
</script>