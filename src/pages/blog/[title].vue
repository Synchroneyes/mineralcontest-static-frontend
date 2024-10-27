<template>
    <v-container>
        <v-card color="white">
            <v-card-text>
                <div v-html="markdown.render(content)" class="markdown-text" />
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router'; // Import useRoute from vue-router
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';
import MarkdownIt from "markdown-it";

import markdownItMeta from 'markdown-it-meta';

// @ts-ignore
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
// @ts-ignore
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
// @ts-ignore
import MarkdownItSub from "markdown-it-sub";
// @ts-ignore
import MarkdownItSup from "markdown-it-sup";
// @ts-ignore
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
// @ts-ignore
import MarkdownItVideo from "markdown-it-video";


import 'highlight.js/styles/atom-one-dark-reasonable.css'; // Importing highlight.js CSS


const markdown = new MarkdownIt()
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor)
    .use(MarkdownItFootnote)
    .use(MarkdownItHighlightjs)
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItTasklists)
    .use(markdownItMeta)
    .use(MarkdownItTOC, {
        slugify: (s: string) => "/blog/" + title.value + "/#" + String(s).trim().toLowerCase().replace(/\s+/g, '-'),
    })
    .use(MarkdownItVideo)

const route = useRoute(); // Get the current route
const title = ref(route.params.title); // Access the title parameter from the route
const content = ref(''); // Initialize the content ref




markdown.render(content.value);

onMounted(async () => {
    try {

        console.log(title)
        const articleTitle = Array.isArray(title.value) ? title.value[0] : title.value;
        content.value = (await api.getArticleContent(articleTitle)).data; // Fetch the article content
        console.log(content.value);
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});

</script>

<style>
h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.5rem;
    color: #444;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #555;
}

code {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 0.2em 0.4em;
    font-family: monospace;
}

pre {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1em;
    overflow: auto;
    margin: 1em 0;
}

ul {
    margin-left: 1.5em;
}

.markdown-text {
    color: white;
    /* Set markdown rendered text color to white */
}

li {
    color: #555;
}
</style>