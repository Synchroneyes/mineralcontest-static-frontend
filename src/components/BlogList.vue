<template>
    <v-container>
        <v-row>
            <v-col v-for="(article, index) in articles" :key="index" cols="12" sm="6" md="4">
                <v-card class="ma-2">
                    <v-card-title>
                        <h4>{{ article.article_title }}</h4>
                    </v-card-title>

                    <v-card-subtitle>
                        <p>Publié par {{ article.article_author }}</p>
                    </v-card-subtitle>
                    <v-card-item>
                        <p>{{ article.article_description }}</p>
                    </v-card-item>
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
    article_description?: string;
    article_author?: string;
    url?: string;
}

const articles = ref<Article[]>([]);

onMounted(async () => {
    try {
        const response = await api.getBlogList();
        articles.value = response.data;

        articles.value.forEach((article: any) => {
            article.slug = article.article_url.split("/").slice(-1)[0].toLowerCase().replace(' ', '-');
            article.url = `/blog/${article.slug}`.replace(' ', '-');
        });

    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});
</script>

<style>
/* Add any additional styling here if needed */
</style>