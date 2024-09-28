<template>
    <v-container>
        <v-card color="white">
            <v-card-text>
                <div v-html="markdown.render(content)" class="markdown-text" /> <!-- Apply markdown-text class -->
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
import 'highlight.js/styles/atom-one-dark-reasonable.css'; // Importing highlight.js CSS


const markdown = new MarkdownIt()
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);

const content = ``
markdown.render(content);
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
    color: white; /* Set markdown rendered text color to white */
}
</style>