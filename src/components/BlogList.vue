<template>
    <v-container>
        <v-row>
            <v-col v-for="(article, index) in articles" :key="index" cols="12" sm="6" md="4">
                <v-card class="ma-2">
                    <v-card-title>
                        <h3>{{ article.article_title }}</h3>
                    </v-card-title>
                    <v-card-actions>
                        <RouterLink :to="article.url || ''">
                            <v-btn color="primary">
                                Lire l'article
                            </v-btn>
                        </RouterLink>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { api } from "@/services/api"; // Adjust the import path as necessary

interface Article {
    article_title: string;
    slug?: string;
    url?: string;
}

const articles = ref<Article[]>([]);

onMounted(async () => {
    try {
        const response = await api.getBlogList();
        articles.value = response.data;

        articles.value.forEach((article: any) => {
            article.slug = article.article_title.toLowerCase().replace(' ', '-');
            article.url = `/blog/${article.slug}`.replace(' ', '-');
        });

        console.log(articles.value);
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});
</script>

<style>
/* Add any additional styling here if needed */
</style>